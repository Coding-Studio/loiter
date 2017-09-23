const questions = require('../../enums/questions');
const getScore = require('../../utils/get_score');

const app = getApp();

Page({
  data: {
    foodName: '',
    operation: 'choose',
    prefix: '你想吃',
    checkedValue: 1,
    selectedValues: (new Array(questions.length)).fill(0),
    index: 0,
    questions: questions,
  },

  onLoad: function (query) {
    const operation = query.operation || 'choose';
    if (operation === 'add') {
      this.setData({
        operation: 'add',
        prefix: '这个食物是'
      });
    }
  },
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index'
    };
  },
  checkedValueChange: function (e) {
    this.setData({
      checkedValue: e.detail.value
    });
  },

  setName: function (e) {
    this.setData({
      foodName: e.detail.value
    });
  },
  main: function (offset) {
    let selectedValues = this.data.selectedValues;
    if (this.data.checkedValue == 1) {
      selectedValues[this.data.index] = 1;
    } else {
      selectedValues[this.data.index] = 0;
    }
    this.setData({
      selectedValues: selectedValues,
      index: this.data.index += offset
    });
  },
  preOne: function () {
    if (this.data.index > 0) {
      this.main(-1);
    }
  },
  nextOne: function () {
    if (this.data.index < this.data.questions.length - 1) {
      this.main(1);
    }
  },
  submit: function () {
    this.main(0);
    if (this.data.operation === 'add') {
      wx.navigateTo({
        url: '../result/result?name=' + this.data.foodName + '&selects=' + this.data.selectedValues.toString() + '&operation=' + this.data.operation
      });
    } else {
      const foods = app.globalData.foods;
      let calcs = [];
      for (let foodName in foods) {
        calcs.push([foodName, getScore(foods[foodName], this.data.selectedValues)]);
      }
      calcs.sort((a, b) => {
        return b[1] - a[1];
      });
      calcs = calcs.slice(0, 3).map(o => o[0]);
      wx.navigateTo({
        url: '../result/result?selects=' + calcs.toString() + '&operation=' + this.data.operation
      });
    }
  }
});
