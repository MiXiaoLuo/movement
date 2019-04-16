// pages/a-details/a-details.js
Page({
  data: {
    json: {}
  },
  onLoad: function (options) {
    var json = JSON.parse(options.data);
    this.setData({
      json: json
    });
  }
})