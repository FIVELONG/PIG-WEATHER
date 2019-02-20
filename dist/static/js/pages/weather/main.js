global.webpackJsonp([1],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(24);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(85);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

exports.default = {
  config: {
    navigationBarTitleText: '猪维乐'
  }
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5cf994d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(25)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5cf994d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/weather/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cf994d0", Component.options)
  } else {
    hotAPI.reload("data-v-5cf994d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utils = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QQMapWX = __webpack_require__(90); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var mapKey = 'OSABZ-6VLWP-O7RDL-LT2BT-TQPA2-IYFJZ';
var weatherKey = 'c3df624717af4fbf8e4b39b4c816857c';
var qqmapsdk = void 0;
exports.default = {
  data: function data() {
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
    };
  },

  methods: {
    getNowWeather: function getNowWeather() {
      var _this = this;

      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/now',
        data: {
          location: this.location,
          key: weatherKey
        },
        success: function success(res) {
          console.log(res);
          _this.nowWeather = res.data.HeWeather6[0].now;
        }
      });
    },
    getWeather: function getWeather() {
      var _this2 = this;

      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/forecast',
        data: {
          location: this.location,
          key: weatherKey,
          rnd: new Date().getTime() // 随机数，防止请求缓存
        },
        success: function success(res) {
          var weekArray = ['日', '一', '二', '三', '四', '五', '六'];
          var data = res.data.HeWeather6[0].daily_forecast;
          for (var index = 0; index < data.length; index++) {
            data[index].formatTime = weekArray[new Date(data[index].date).getDay()];
          }
          _this2.dayAfter = data.slice(1);
          _this2.today = data[0];
        }
      });
    },
    modalinput: function modalinput() {
      this.hiddenCityChoose = !this.hiddenCityChoose;
    },
    cancel: function cancel() {
      this.hiddenCityChoose = true;
    },
    confirm: function confirm() {
      this.hiddenCityChoose = true;
    },
    formSubmit: function formSubmit(e) {
      var _this3 = this;

      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this3.userInfo.formid) {
                  _context.next = 3;
                  break;
                }

                (0, _utils.showToast)('等到期再续订哦~', 'none', 2000);
                return _context.abrupt('return');

              case 3:
                _this3.idArr.push(e.mp.detail.formId);

                if (!(_this3.idArr.length >= 7)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return (0, _utils.post)('/weapp/api/subFormId', {
                  formId: JSON.stringify(_this3.idArr),
                  location: _this3.location
                });

              case 7:
                res = _context.sent;

                if (res.code === 0) {
                  _this3.userInfo.formid = JSON.stringify(_this3.idArr);
                  console.log(_this3.userInfo);
                  (0, _utils.showToast)('订阅成功', 'none', 2000);
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    },
    handleContact: function handleContact(e) {
      console.log(e);
    }
  },
  created: function created() {
    qqmapsdk = new QQMapWX({
      key: mapKey
    });
  },
  onShow: function onShow() {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var cur, userRes;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cur = _this4;

              wx.getSystemInfo({
                success: function success(res) {
                  console.log(res.statusBarHeight);
                }
              });
              wx.getLocation({
                type: 'wgs84',
                success: function success(res) {
                  var latitude = res.latitude;
                  var longitude = res.longitude;
                  qqmapsdk.reverseGeocoder({
                    location: {
                      latitude: latitude, // 使用 wx.getLocation 的返回值
                      longitude: longitude
                    },
                    success: function success(res) {
                      if (res.status === 0) {
                        // 获取到城市名
                        _this4.location = res.result.ad_info.city;
                        cur.getWeather();
                        cur.getNowWeather();
                      }
                    },
                    fail: function fail(res) {
                      console.log('fail', res);
                    },
                    complete: function complete(res) {
                      console.log('complete', res);
                    }
                  });
                }
              });
              _context2.next = 5;
              return (0, _utils.get)('/weapp/api/getUserInfo');

            case 5:
              userRes = _context2.sent;

              console.log(userRes);
              if (userRes.code === 0) {
                _this4.userInfo = userRes.data.userInfo;
              }

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this4);
    }))();
  }
};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.get = get;
exports.post = post;
exports.login = login;
exports.showModal = showModal;
exports.showToast = showToast;

var _config = __webpack_require__(89);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(url, data) {
  return request(url, 'GET', data);
} // 封装微信工具
function post(url, data) {
  return request(url, 'POST', data);
}
function login(uInfo) {
  var _this = this;

  var user = wx.getStorageSync('userInfo');
  if (user) {
    return;
  }
  wx.getSetting({
    success: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (data.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.login({
                    success: function () {
                      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res) {
                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (res.code) {
                                  wx.getUserInfo({
                                    success: function () {
                                      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                                        var info;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                          while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                _context.next = 2;
                                                return post('/weapp/login', {
                                                  code: res.code,
                                                  encryptedData: data.encryptedData,
                                                  iv: data.iv
                                                });

                                              case 2:
                                                info = _context.sent;

                                                showToast('登录成功', 'success', 2000);
                                                wx.setStorageSync('userInfo', info);
                                                return _context.abrupt('return', uInfo(info));

                                              case 6:
                                              case 'end':
                                                return _context.stop();
                                            }
                                          }
                                        }, _callee, _this);
                                      }));

                                      return function success(_x3) {
                                        return _ref3.apply(this, arguments);
                                      };
                                    }()
                                  });
                                } else {
                                  console.log('登录失败！' + res.errMsg);
                                }

                              case 1:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this);
                      }));

                      return function success(_x2) {
                        return _ref2.apply(this, arguments);
                      };
                    }()
                  });
                } else {
                  // console.log('nouser')
                  // wx.switchTab({
                  //   url: 'pages/me/main'
                  // })
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }));

      return function success(_x) {
        return _ref.apply(this, arguments);
      };
    }()
  });
}
function request(url, method, data) {
  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: 'userInfo',
      complete: function complete(rep) {
        wx.request({
          url: _config2.default.host + url,
          data: data,
          method: method,
          header: {
            'Cookie': 'userid=' + (rep.data ? rep.data.userInfo.userid : ''),
            'content-type': 'application/json; charset=utf-8'
          },
          success: function success(res) {
            var _this2 = this;

            if (res.data.code === 0) {
              // showToast(res.data.msg, 'success', 2000)
              resolve(res.data);
            } else if (res.data.code === 2) {
              wx.login({
                success: function () {
                  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(result) {
                    var info;
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            console.log(result.code);

                            if (!result.code) {
                              _context4.next = 9;
                              break;
                            }

                            _context4.next = 4;
                            return post('/weapp/api/weappLogin', {
                              code: result.code
                            });

                          case 4:
                            info = _context4.sent;

                            wx.setStorageSync('userInfo', info.data);
                            resolve(info);
                            _context4.next = 10;
                            break;

                          case 9:
                            console.log('登录失败！' + res.errMsg);

                          case 10:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this2);
                  }));

                  return function success(_x4) {
                    return _ref4.apply(this, arguments);
                  };
                }()
              });
            } else {
              showToast('连接失败', 'none', 2000);
              reject(res.data);
            }
          }
        });
      }
    });
  });
}

function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  });
}

function showToast(text, icon, time) {
  wx.showToast({
    title: text,
    icon: icon,
    duration: time,
    mask: true
  });
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var host = 'https://www.imaginepig.com'; // http://www.imaginepig.com:7001 http://localhost:7001

var conf = {
  host: host,
  login: host + '/weapp/login',
  user: host + '/weapp/user'
};
exports.default = conf;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(91);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(92);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 微信小程序JavaScriptSDK
 * @version 1.0
 * @date 2017-01-10
 * @author jaysonzhou@tencent.com
 */
/* eslint-disable */
var ERROR_CONF = {
    KEY_ERR: 311,
    KEY_ERR_MSG: 'key格式错误',
    PARAM_ERR: 310,
    PARAM_ERR_MSG: '请求参数信息有误',
    SYSTEM_ERR: 600,
    SYSTEM_ERR_MSG: '系统错误',
    WX_ERR_CODE: 1000,
    WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var Utils = {
    /**
     * 得到终点query字符串
     * @param {Array|String} 检索数据
     */
    location2query: function location2query(data) {
        if (typeof data == 'string') {
            return data;
        }
        var query = '';
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (!!query) {
                query += ';';
            }
            if (d.location) {
                query = query + d.location.lat + ',' + d.location.lng;
            }
            if (d.latitude && d.longitude) {
                query = query + d.latitude + ',' + d.longitude;
            }
        }
        return query;
    },


    /**
     * 使用微信接口进行定位
     */
    getWXLocation: function getWXLocation(success, fail, complete) {
        wx.getLocation({
            type: 'gcj02',
            success: success,
            fail: fail,
            complete: complete
        });
    },


    /**
     * 获取location参数
     */
    getLocationParam: function getLocationParam(location) {
        if (typeof location == 'string') {
            var locationArr = location.split(',');
            if (locationArr.length === 2) {
                location = {
                    latitude: location.split(',')[0],
                    longitude: location.split(',')[1]
                };
            } else {
                location = {};
            }
        }
        return location;
    },


    /**
     * 回调函数默认处理
     */
    polyfillParam: function polyfillParam(param) {
        param.success = param.success || function () {};
        param.fail = param.fail || function () {};
        param.complete = param.complete || function () {};
    },


    /**
     * 验证param对应的key值是否为空
     * 
     * @param {Object} param 接口参数
     * @param {String} key 对应参数的key
     */
    checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
        if (!param[key]) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return true;
        }
        return false;
    },


    /**
     * 验证参数中是否存在检索词keyword
     * 
     * @param {Object} param 接口参数
     */
    checkKeyword: function checkKeyword(param) {
        return !this.checkParamKeyEmpty(param, 'keyword');
    },


    /**
     * 验证location值
     * 
     * @param {Object} param 接口参数
     */
    checkLocation: function checkLocation(param) {
        var location = this.getLocationParam(param.location);
        if (!location || !location.latitude || !location.longitude) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return false;
        }
        return true;
    },


    /**
     * 构造错误数据结构
     * @param {Number} errCode 错误码
     * @param {Number} errMsg 错误描述
     */
    buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
        return {
            status: errCode,
            message: errMsg
        };
    },


    /**
     * 构造微信请求参数，公共属性处理
     * 
     * @param {Object} param 接口参数
     * @param {Object} param 配置项
     */
    buildWxRequestConfig: function buildWxRequestConfig(param, options) {
        var that = this;
        options.header = { "content-type": "application/json" };
        options.method = 'GET';
        options.success = function (res) {
            var data = res.data;
            if (data.status === 0) {
                param.success(data);
            } else {
                param.fail(data);
            }
        };
        options.fail = function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, result.errMsg));
        };
        options.complete = function (res) {
            var statusCode = +res.statusCode;
            switch (statusCode) {
                case ERROR_CONF.WX_ERR_CODE:
                    {
                        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
                        break;
                    }
                case ERROR_CONF.WX_OK_CODE:
                    {
                        var data = res.data;
                        if (data.status === 0) {
                            param.complete(data);
                        } else {
                            param.complete(that.buildErrorConfig(data.status, data.message));
                        }
                        break;
                    }
                default:
                    {
                        param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
                    }

            }
        };
        return options;
    },


    /**
     * 处理用户参数是否传入坐标进行不同的处理
     */
    locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
        var that = this;
        locationfail = locationfail || function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
        };
        locationcomplete = locationcomplete || function (res) {
            if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
                param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            }
        };
        if (!param.location) {
            that.getWXLocation(locationsuccess, locationfail, locationcomplete);
        } else if (that.checkLocation(param)) {
            var location = Utils.getLocationParam(param.location);
            locationsuccess(location);
        }
    }
};

var QQMapWX = function () {

    /**
     * 构造函数
     * 
     * @param {Object} options 接口参数,key 为必选参数
     */
    function QQMapWX(options) {
        (0, _classCallCheck3.default)(this, QQMapWX);

        if (!options.key) {
            throw Error('key值不能为空');
        }
        this.key = options.key;
    }

    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */


    (0, _createClass3.default)(QQMapWX, [{
        key: 'search',
        value: function search(options) {
            var that = this;
            options = options || {};

            Utils.polyfillParam(options);

            if (!Utils.checkKeyword(options)) {
                return;
            }

            var requestParam = {
                keyword: options.keyword,
                orderby: options.orderby || '_distance',
                page_size: options.page_size || 10,
                page_index: options.page_index || 1,
                output: 'json',
                key: that.key
            };

            if (options.address_format) {
                requestParam.address_format = options.address_format;
            }

            if (options.filter) {
                requestParam.filter = options.filter;
            }

            var distance = options.distance || "1000";
            var auto_extend = options.auto_extend || 1;

            var locationsuccess = function locationsuccess(result) {
                requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_SEARCH,
                    data: requestParam
                }));
            };
            Utils.locationProcess(options, locationsuccess);
        }

        /**
         * sug模糊检索
         *
         * @param {Object} options 接口参数对象
         * 
         * 参数对象结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-suggestion.html
         */

    }, {
        key: 'getSuggestion',
        value: function getSuggestion(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (!Utils.checkKeyword(options)) {
                return;
            }

            var requestParam = {
                keyword: options.keyword,
                region: options.region || '全国',
                region_fix: options.region_fix || 0,
                policy: options.policy || 0,
                output: 'json',
                key: that.key
            };
            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_SUGGESTION,
                data: requestParam
            }));
        }

        /**
         * 逆地址解析
         *
         * @param {Object} options 接口参数对象
         * 
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-gcoder.html
         */

    }, {
        key: 'reverseGeocoder',
        value: function reverseGeocoder(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);
            var requestParam = {
                coord_type: options.coord_type || 5,
                get_poi: options.get_poi || 0,
                output: 'json',
                key: that.key
            };
            if (options.poi_options) {
                requestParam.poi_options = options.poi_options;
            }

            var locationsuccess = function locationsuccess(result) {
                requestParam.location = result.latitude + ',' + result.longitude;
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_GET_GEOCODER,
                    data: requestParam
                }));
            };
            Utils.locationProcess(options, locationsuccess);
        }

        /**
         * 地址解析
         *
         * @param {Object} options 接口参数对象
         * 
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-geocoder.html
         */

    }, {
        key: 'geocoder',
        value: function geocoder(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'address')) {
                return;
            }

            var requestParam = {
                address: options.address,
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_GET_GEOCODER,
                data: requestParam
            }));
        }

        /**
         * 获取城市列表
         *
         * @param {Object} options 接口参数对象
         * 
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-region.html
         */

    }, {
        key: 'getCityList',
        value: function getCityList(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);
            var requestParam = {
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_CITY_LIST,
                data: requestParam
            }));
        }

        /**
         * 获取对应城市ID的区县列表
         *
         * @param {Object} options 接口参数对象
         * 
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-region.html
         */

    }, {
        key: 'getDistrictByCityId',
        value: function getDistrictByCityId(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'id')) {
                return;
            }

            var requestParam = {
                id: options.id || '',
                output: 'json',
                key: that.key
            };

            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_AREA_LIST,
                data: requestParam
            }));
        }

        /**
         * 用于单起点到多终点的路线距离(非直线距离)计算：
         * 支持两种距离计算方式：步行和驾车。
         * 起点到终点最大限制直线距离10公里。
         *
         * @param {Object} options 接口参数对象
         * 
         * 请求参数结构可以参考
         * http://lbs.qq.com/webservice_v1/guide-distance.html
         */

    }, {
        key: 'calculateDistance',
        value: function calculateDistance(options) {
            var that = this;
            options = options || {};
            Utils.polyfillParam(options);

            if (Utils.checkParamKeyEmpty(options, 'to')) {
                return;
            }

            var requestParam = {
                mode: options.mode || 'walking',
                to: Utils.location2query(options.to),
                output: 'json',
                key: that.key
            };

            var locationsuccess = function locationsuccess(result) {
                requestParam.from = result.latitude + ',' + result.longitude;
                wx.request(Utils.buildWxRequestConfig(options, {
                    url: URL_DISTANCE,
                    data: requestParam
                }));
            };
            if (options.from) {
                options.location = options.from;
            }

            Utils.locationProcess(options, locationsuccess);
        }
    }]);
    return QQMapWX;
}();

module.exports = QQMapWX;

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.nowWeather) ? _c('div', {
    staticClass: "weatherPanel"
  }, [_c('div', {
    staticClass: "today-box",
    class: _vm.nowWeather.cond_code == 100 ? 'sunny' : (_vm.nowWeather.cond_code >= 101 && _vm.nowWeather.cond_code < 300 ? 'cloud' : (_vm.nowWeather.cond_code >= 300 && _vm.nowWeather.cond_code < 400 ? 'rain' : (_vm.nowWeather.cond_code >= 400 && _vm.nowWeather.cond_code < 500 ? 'snow' : (_vm.nowWeather.cond_code == 500 || _vm.nowWeather.cond_code == 501 || _vm.nowWeather.cond_code == 509 || _vm.nowWeather.cond_code == 510 || _vm.nowWeather.cond_code == 514 || _vm.nowWeather.cond_code == 515 ? 'fog' : (_vm.nowWeather.cond_code < 599 ? 'haze' : 'other')))))
  }, [_c('p', {
    staticClass: "location"
  }, [_vm._v(_vm._s(_vm.location))]), _vm._v(" "), _c('p', {
    staticClass: "time"
  }, [_vm._v("今天（星期" + _vm._s(_vm.today.formatTime) + "）")]), _vm._v(" "), _c('p', {
    staticClass: "tmp"
  }, [_vm._v(_vm._s(_vm.nowWeather.tmp))]), _vm._v(" "), _c('p', {
    staticClass: "cond"
  }, [_vm._v(_vm._s(_vm.nowWeather.cond_txt) + "：" + _vm._s(_vm.today.tmp_min + '℃ ~ ' + _vm.today.tmp_max + '℃'))])], 1), _vm._v(" "), _c('ul', {
    staticClass: "weather-list"
  }, _vm._l((_vm.dayAfter), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "clearfix"
    }, [_c('span', {
      staticClass: "day"
    }, [_vm._v("星期" + _vm._s(item.formatTime))]), _c('span', {
      staticClass: "cond"
    }, [_vm._v(_vm._s(item.cond_txt_d))]), _c('span', {
      staticClass: "tmp"
    }, [_vm._v(_vm._s(item.tmp_min + '℃ ~ ' + item.tmp_max + '℃'))])])
  })), _vm._v(" "), _c('div', [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '7'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn"
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '6'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '5'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '4'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '3'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '2'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '1'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_c('form', {
    attrs: {
      "name": "pushMsgFm",
      "report-submit": "true",
      "data-type": "submit",
      "eventid": '0'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "formType": "submit"
    }
  }, [_c('div', {
    staticClass: "aa"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.userInfo.formid ? '已订阅' : '订阅天气') + "\n                                                  ")])])], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "hidden": _vm.hiddenCityChoose,
      "title": _vm.cityModal.title,
      "confirm-text": _vm.cityModal.confirm,
      "cancel-text": _vm.cityModal.cancel,
      "eventid": '8',
      "mpcomid": '0'
    },
    on: {
      "cancel": _vm.cancel,
      "confirm": _vm.confirm
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入城市"
    }
  })])], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cf994d0", esExports)
  }
}

/***/ })

},[84]);
//# sourceMappingURL=main.js.map