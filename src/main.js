import Vue from 'vue'
import App from './App'
import './weui.css'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/weather/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#496ee2',
      navigationBarTitleText: '猪维乐',
      navigationBarTextStyle: 'light',
      navigationStyle: 'custom'
    }
    // tabBar: {
    //   selectedColor: '#266ca9',
    //   list: [{
    //     pagePath: 'pages/square/main',
    //     text: '猪怎么说',
    //     iconPath: 'static/img/space.png',
    //     selectedIconPath: 'static/img/space-active.png'
    //   }, {
    //     pagePath: 'pages/me/main',
    //     text: '我的',
    //     iconPath: 'static/img/home.png',
    //     selectedIconPath: 'static/img/home-active.png'
    //   }]
    // }
  }
}
