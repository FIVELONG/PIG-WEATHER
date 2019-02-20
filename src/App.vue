<script>
// import {login} from '@/utils/utils'
// import qcloud from 'wafer2-client-sdk'
// import config from '@/utils/config'
export default {
  async created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')
  }
  // onLaunch () {
  //   login()
  // }
}
</script>

<style>
.clearfix {
  zoom: 1;
}
.clearfix:before, .clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
.defaultColor {
  color: #266ca9;
}
.textOverflow {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
