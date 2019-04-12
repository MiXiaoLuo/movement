// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [
      {
        img: '../../images/activity-0.jpg',
        title: '《夜的钢琴曲》—石进钢琴音乐会郑州站',
        time: '2019-5-11',
        address: '河南艺术中心',
        tickets: '￥100',
        residue: '356'
      },
      {
        img: '../../images/activity-1.jpg',
        title: '话剧《亲切的凶手》',
        time: '2019.04.19 - 2019.05.18',
        address: '丹尼斯大卫城',
        tickets: '￥100',
        residue: '486'
      },
      {
        img: '../../images/activity-2.jpg',
        title: '昆剧《赵氏孤儿》巡演',
        time: '2019.05.16',
        address: '河南艺术中心',
        tickets: '￥50',
        residue: '364'
      },
      {
        img: '../../images/activity-3.jpg',
        title: '昆剧《牡丹亭》巡演',
        time: '2019.05.15',
        address: '河南艺术中心',
        tickets: '￥50',
        residue: '423'
      },
      {
        img: '../../images/activity-4.jpg',
        title: '魅力古典音乐季 "今夜无人入睡"—意大利圣雷莫交响乐团歌剧歌曲音乐会',
        time: '2019.05.14',
        address: '河南艺术中心',
        tickets: '￥80',
        residue: '318'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  toDetails: function (e) {
    wx.navigateTo({
      url: '../a-details/a-details?id=' + e.currentTarget.id
    })
  }
})