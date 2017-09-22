const defaultFoods = require('./enums/default_foods');

App({
  globalData: {
    foods: {}
  },

  onLaunch: function () {
    const userDefiniedFoods = wx.getStorageSync('userDefiniedFoods') || {};
    this.globalData.foods = Object.assign(defaultFoods, userDefiniedFoods);
  }
});
