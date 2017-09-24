const app = getApp();

Page({
  data: {
    myFoods: [],
    checkedFoods: []
  },

  onLoad: function (options) {
    const myFoods = wx.getStorageSync('userDefiniedFoods') || {};
    this.setData({
      myFoods: Object.keys(myFoods)
    });
  },
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index'
    };
  },

  changeCheckedFoods: function (e) {
    this.setData({
      checkedFoods: e.detail.value
    });
  },
  gotoAdd: function () {
    wx.navigateTo({
      url: '../main/main?operation=add'
    });
  },
  deleteChecked: function () {
    const myFoods = wx.getStorageSync('userDefiniedFoods') || {};
    for (let i = 0; i < this.data.checkedFoods.length; i++) {
      delete myFoods[this.data.checkedFoods[i]];
      delete app.globalData.foods[this.data.checkedFoods[i]];
    }
    wx.setStorageSync('userDefiniedFoods', myFoods);

    this.setData({
      myFoods: Object.keys(myFoods)
    });
  }
});
