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
        residue: '356',
        contents: '音乐会现场钢琴演奏家：石进他，40分钟创作出《夜的钢琴曲五》，却斩获近2亿收听量；他，原创专辑获得2011年“华语金曲奖年度独奏专辑”提名；他，80后理工男，却被冯小刚钦点为《非诚勿扰2》配乐；他，因为一场周杰伦演唱会，22岁才开始钢琴创作之路；他，就是石进，“一个小拇指在音乐圈”的独立音乐人。首首都是不同的心情，记录着一个又一个夜晚，欢乐的、忧伤的、难过的、当然也包括幸福的。是以治愈系为主。夜的钢琴曲中的每一首曲子都静谧舒缓，让彼此心灵诗意地栖息。在这里，每个人总会找到一首属于自己情感的乐曲。轻柔的钢琴，道出淡淡的思念，回味经典的同时，此次演奏会石进本人来到郑州，也会带来2017全新专辑《夜的钢琴曲IV》，与你娓娓道来这轻如云烟的思念。'
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
    ],
    nav: ['全部', '演出', '展览', '讲座','其他'],
    _index:0
  },
  nav:function(e){
    this.setData({
      _index:e.currentTarget.dataset.index
    })
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
    var data = this.data.details[e.currentTarget.id];
    wx.navigateTo({
      url: '../a-details/a-details?id=' + e.currentTarget.id + '&data=' + JSON.stringify(data)
    })
  }
})