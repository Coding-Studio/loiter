const questions = require('../../enums/questions');

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
      this.setData({
        recomends: query.selects.split(','),
        operation: operation
      });
    } else {
      const selects = query.selects.split(',');
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
  }
});
