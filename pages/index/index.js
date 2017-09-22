const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
    const that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
    });
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../main/main'
    });
  },
});
