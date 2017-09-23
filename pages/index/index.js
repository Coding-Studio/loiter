Page({
  data: {
    motto: 'Hello World'
  },

  onLoad: function () {

  },
  onShareAppMessage: function() {
    return {
      path: '/pages/index/index'
    };
  },

  gotoChoose: function (operation) {
    wx.navigateTo({
      url: '../main/main?operation=choose'
    });
  },
  gotoAdd: function (operation) {
    wx.navigateTo({
      url: '../main/main?operation=add'
    });
  },
});
