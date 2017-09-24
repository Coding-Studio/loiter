const questions = require('../../enums/questions');

const app = getApp();

Page({
  data: {
    operation: 'choose',
    recomends: [],
    foodName: '',
    features: []
  },

  onLoad: function (query) {
    const operation = query.operation || 'choose';
    if (operation === 'choose') {
      let recomends = null;
      if (query.selects.length === 0) {
        recomends = [];
      } else {
        recomends = query.selects.split(',');
      }
      this.setData({
        recomends: recomends,
        operation: operation
      });
    } else {
      const selects = query.selects.split(',').map(o => Number(o));

      const myFoods = wx.getStorageSync('userDefiniedFoods') || {};
      myFoods[query.name] = selects;
      app.globalData.foods[query.name] = selects;
      wx.setStorageSync('userDefiniedFoods', myFoods);

      const features = [];
      for (let i = 0; i < selects.length; i++) {
        if (selects[i] == 1) {
          features.push([questions[i][0], questions[i][2]]);
        }
      }
      this.setData({
        foodName: query.name,
        features: features,
        operation: operation
      });
    }
  },
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index'
    };
  },

  gotoIndex: function () {
    wx.navigateBack({
      delta: 10
    });
  },
  gotoAdd: function () {
    wx.navigateTo({
      url: '../main/main?operation=add'
    });
  },
});
