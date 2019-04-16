// pages/venues/venues.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: ['全部', '图书馆', '文化馆', '美术馆', '台球馆', '羽毛球馆','乒乓球馆'],
    _index:0,
    con:[{
      img:'../../images/fitness.jpg',
      title:'盘城文体活动中心',
      place:'地点 : 南京市 浦口区 盘城街道 盘城新街68号'
    },{
        img: '../../images/fitness1.jpg',
        title: '顶山街道文体中心排练厅',
        place: '地点 : 南京市 浦口区 顶山街道 吉庆路10号'
    }]
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
  details:function(e){
    var show = this.data.con[e.currentTarget.dataset.or];
    wx:wx.navigateTo({
      url: '../v-details/v-details?con=' + JSON.stringify(show)
    })
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

  }
})