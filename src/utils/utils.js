// 封装微信工具
import conf from './config'
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}
export function login (uInfo) {
  let user = wx.getStorageSync('userInfo')
  if (user) {
    return
  }
  wx.getSetting({
    success: async data => {
      if (data.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.login({
          success: async res => {
            if (res.code) {
              wx.getUserInfo({
                success: async data => {
                  // 发起网络请求
                  const info = await post('/weapp/login', {
                    code: res.code,
                    encryptedData: data.encryptedData,
                    iv: data.iv
                  })
                  showToast('登录成功', 'success', 2000)
                  wx.setStorageSync('userInfo', info)
                  return uInfo(info)
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      } else {
        // console.log('nouser')
        // wx.switchTab({
        //   url: 'pages/me/main'
        // })
      }
    }
  })
}
function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'userInfo',
      complete: function (rep) {
        wx.request({
          url: conf.host + url,
          data,
          method,
          header: {
            'Cookie': 'userid=' + (rep.data ? rep.data.userInfo.userid : ''),
            'content-type': 'application/json; charset=utf-8'
          },
          success: function (res) {
            if (res.data.code === 0) {
              // showToast(res.data.msg, 'success', 2000)
              resolve(res.data)
            } else if (res.data.code === 2) {
              wx.login({
                success: async result => {
                  console.log(result.code)
                  if (result.code) {
                    const info = await post('/weapp/api/weappLogin', {
                      code: result.code
                    })
                    wx.setStorageSync('userInfo', info.data)
                    resolve(info)
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
            } else {
              showToast('连接失败', 'none', 2000)
              reject(res.data)
            }
          }
        })
      }
    })
  })
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export function showToast (text, icon, time) {
  wx.showToast({
    title: text,
    icon: icon,
    duration: time,
    mask: true
  })
}
