Page({
  data: {
    prefix: '你想吃',
    selectedValue: 0
  },

  onLoad: function (query) {
    const operation = query.operation || 'choose';
    if (operation === 'add') {
      this.setData({
        prefix: '这个食物是'
      });
    }
  },
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index'
    }
  },
});
