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

  gotoChoose: function () {
    wx.navigateTo({
      url: '../main/main?operation=choose'
    });
  },
  gotoAdd: function () {
    wx.navigateTo({
      url: '../main/main?operation=add'
    });
  },
  viewMyFoods: function () {
    wx.navigateTo({
      url: '../list/list'
    });
  },
});
