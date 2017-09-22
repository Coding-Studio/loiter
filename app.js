const defaultFoods = require('./enums/default_foods');

App({
  globalData: {
    userInfo: null,
    foods: []
  },

  onLaunch: function () {
    const userDefiniedFoods = wx.getStorageSync('userDefiniedFoods') || [];
    this.globalData.foods = defaultFoods.concat(userDefiniedFoods);
  },

  getUserInfo: function (cb) {
    const that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo;
          typeof cb == "function" && cb(that.globalData.userInfo);
        }
      });
    }
  },
});
