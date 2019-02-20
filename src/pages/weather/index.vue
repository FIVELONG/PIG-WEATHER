<template>
  <div v-if="nowWeather" class="weatherPanel">
    <div class="today-box" :class="nowWeather.cond_code == 100 ? 'sunny' : (nowWeather.cond_code >= 101 && nowWeather.cond_code < 300 ? 'cloud' : (nowWeather.cond_code >= 300 && nowWeather.cond_code < 400 ? 'rain' : (nowWeather.cond_code >= 400 &&  nowWeather.cond_code < 500 ? 'snow' : (nowWeather.cond_code == 500 || nowWeather.cond_code == 501 || nowWeather.cond_code == 509 || nowWeather.cond_code == 510 || nowWeather.cond_code == 514 || nowWeather.cond_code == 515 ? 'fog' : (nowWeather.cond_code < 599 ? 'haze' : 'other')))))">
      <p class="location">{{location}}</p>
      <p class="time">今天（星期{{today.formatTime}}）</p>
      <p class="tmp">{{nowWeather.tmp}}</p>
      <p class="cond">{{nowWeather.cond_txt}}：{{today.tmp_min + '℃ ~ ' + today.tmp_max +'℃'}}</p>
    </div>
    <ul class="weather-list">
      <li class="clearfix" v-for="(item, index) in dayAfter" :key="index">
        <span class="day">星期{{item.formatTime}}</span><span class="cond">{{item.cond_txt_d}}</span><span class="tmp">{{item.tmp_min + '℃ ~ ' + item.tmp_max +'℃'}}</span>
      </li>
    </ul>
    <div>
      <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
        <button class="btn">
          <div class="aa">
            <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
              <button class="btn" formType="submit">
                <div class="aa">
                  <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                    <button class="btn" formType="submit">
                      <div class="aa">
                        <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                          <button class="btn" formType="submit">
                            <div class="aa">
                              <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                                <button class="btn" formType="submit">
                                  <div class="aa">
                                    <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                                      <button class="btn" formType="submit">
                                        <div class="aa">
                                          <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                                            <button class="btn" formType="submit">
                                              <div class="aa">
                                                <form name="pushMsgFm" report-submit="true" data-type="submit" @submit="formSubmit">
                                                  <button class="btn" formType="submit">
                                                    <div class="aa">
                                                      {{userInfo.formid ? '已订阅' : '订阅天气'}}
                                                    </div>
                                                  </button>
                                                </form>
                                              </div>
                                            </button>
                                          </form>
                                        </div>
                                      </button>
                                    </form>
                                  </div>
                                </button>
                              </form>
                            </div>
                          </button>
                        </form>
                      </div>
                    </button>
                  </form>
                </div>
              </button>
            </form>
          </div>
        </button>
      </form>
    </div>
    <modal :hidden="hiddenCityChoose" :title="cityModal.title" :confirm-text="cityModal.confirm" :cancel-text="cityModal.cancel" @cancel="cancel" @confirm="confirm">  
      <input type='text' placeholder="请输入城市"/>
    </modal> 
  </div>
</template>

<script>
import { get, post, showToast } from '@/utils/utils'
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js')
const mapKey = 'OSABZ-6VLWP-O7RDL-LT2BT-TQPA2-IYFJZ'
const weatherKey = 'c3df624717af4fbf8e4b39b4c816857c'
let qqmapsdk
export default {
  data () {
    return {
      nowWeather: null,
      idArr: [],
      userInfo: {},
      today: {},
      dayAfter: [],
      location: '',
      hiddenCityChoose: true,
      cityModal: {
        title: '请输入城市名',
        confirm: '确定',
        cancel: '取消'
      }
    }
  },
  methods: {
    getNowWeather () {
      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/now',
        data: {
          location: this.location,
          key: weatherKey
        },
        success: res => {
          console.log(res)
          this.nowWeather = res.data.HeWeather6[0].now
        }
      })
    },
    getWeather () {
      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/forecast',
        data: {
          location: this.location,
          key: weatherKey,
          rnd: new Date().getTime() // 随机数，防止请求缓存
        },
        success: res => {
          var weekArray = ['日', '一', '二', '三', '四', '五', '六']
          const data = res.data.HeWeather6[0].daily_forecast
          for (let index = 0; index < data.length; index++) {
            data[index].formatTime = weekArray[new Date(data[index].date).getDay()]
          }
          this.dayAfter = data.slice(1)
          this.today = data[0]
        }
      })
    },
    modalinput () {
      this.hiddenCityChoose = !this.hiddenCityChoose
    },
    cancel () {
      this.hiddenCityChoose = true
    },
    confirm () {
      this.hiddenCityChoose = true
    },
    async formSubmit (e) {
      if (this.userInfo.formid) {
        showToast('等到期再续订哦~', 'none', 2000)
        return
      }
      this.idArr.push(e.mp.detail.formId)
      if (this.idArr.length >= 7) {
        const res = await post('/weapp/api/subFormId', {
          formId: JSON.stringify(this.idArr),
          location: this.location
        })
        if (res.code === 0) {
          this.userInfo.formid = JSON.stringify(this.idArr)
          console.log(this.userInfo)
          showToast('订阅成功', 'none', 2000)
        }
      }
    },
    handleContact (e) {
      console.log(e)
    }
  },
  created () {
    qqmapsdk = new QQMapWX({
      key: mapKey
    })
  },
  async onShow () {
    let cur = this
    wx.getSystemInfo({
      success (res) {
        console.log(res.statusBarHeight)
      }
    })
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        var latitude = res.latitude
        var longitude = res.longitude
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude, // 使用 wx.getLocation 的返回值
            longitude: longitude
          },
          success: res => {
            if (res.status === 0) {
              // 获取到城市名
              this.location = res.result.ad_info.city
              cur.getWeather()
              cur.getNowWeather()
            }
          },
          fail: res => {
            console.log('fail', res)
          },
          complete: res => {
            console.log('complete', res)
          }
        })
      }
    })
    const userRes = await get('/weapp/api/getUserInfo')
    console.log(userRes)
    if (userRes.code === 0) {
      this.userInfo = userRes.data.userInfo
    }
  }
}
</script>

<style lang="scss">
  .btn {
    width: 1rpx;
    height: 1rpx;
    margin: 0;
    padding: 0;
    /* position: fixed; */
    /* top: 150rpx; */
    border-color: transparent;
    border: none;
    background-color: transparent;
  }
  .aa {
    position: fixed;
    width: 156rpx;
    top: 170rpx;
    right: 0px;
    font-size: 30rpx;
    color: #fff;
  }
  button::after {
    border: none;
  }
  .contact {
    float: right;
    margin-top: 10rpx;
    color: #fff;
    background-color: transparent;
  }
  .weatherPanel {
    .sunny {
      background-image: url('https://www.imaginepig.com/img/home_bg_sunny.jpg')
    }
    .cloud, .other {
      background-image: url('https://www.imaginepig.com/img/home_bg_cloud.jpg')
    }
    .rain {
      background-image: url('https://www.imaginepig.com/img/home_bg_rain.jpg')
    }
    .snow {
      background-image: url('https://www.imaginepig.com/img/home_bg_xue.jpg')
    }
    .fog {
      background-image: url('https://www.imaginepig.com/img/home_bg_wu.jpg')
    }
    .haze {
      background-image: url('https://www.imaginepig.com/img/home_bg_mai.jpg')
    }
    .today-box {
      height: 770rpx;
      padding-top: 170rpx;
      color: #fff;
      text-align: center;
      background-size: 100% 100%;
      box-sizing: border-box;
      .location {
        font-size: 48rpx;
      }
      .time {
        padding-left:1%;
        font-size: 24rpx;
      }
      .tmp {
        line-height: 240rpx;
        font-size: 240rpx;
      }
      .cond {
        font-size: 60rpx;
      }
    }
    .weather-list {
      li {
        padding: 0 30rpx;
        line-height: 94rpx;
        font-size: 34rpx;
        color: #333;
        box-shadow: 0 2rpx 0 0 rgba(240,240,240,0.50);
        .day {
          float: left;
          width: 300rpx;
        }
        .tmp {
          float: right;
        }
      }
    }
  }
</style>