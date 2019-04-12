// pages/launch/launch.js
var guan = null;
var ting = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ti = this;
    var index = 5;
    ting = setInterval(function(){
      index--;
      ti.setData({
        number: index
      })
      console.log(ti.data.number);
    },1000)
    guan = setTimeout(function () {
      clearInterval(ting);
      wx.switchTab({
        url: '../index/index'
      })
    }, 5000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index'
    })
    clearTimeout(guan);
    clearInterval(ting);
  }
})