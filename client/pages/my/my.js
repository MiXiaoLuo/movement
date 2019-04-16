// pages/my/my.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['我的活动','我的场馆','我的收藏','我的消息','个人设置','意见反馈'],
    login:'',
    img:'../../images/m-portrait.jpg'
  },
  login:function(){
    var ti = this;
    wx.getUserInfo({
      success:function(res){
        ti.setData({
          login:res.userInfo.nickName,
          img:res.userInfo.avatarUrl
        })
        app.users = res.userInfo.nickName;
      },
      fail:function(){
        wx: wx.navigateTo({
          url: '../m-login/m-login'
        });
      }
    })
  },
  nav:function(e){
    var number = e.currentTarget.dataset.index;
    switch(number){
      case 0:
        wx: wx.navigateTo({
          url: '../m-activities/m-activities'
        });
      break;
      case 1:
        wx: wx.navigateTo({
          url: '../m-venues/m-venues'
        });
        break;
        case 2:
        wx: wx.navigateTo({
          url: '../m-collection/m-collection'
        });
        break;
      case 3:
        wx: wx.navigateTo({
          url: '../m-news/m-news'
        });
      break;
      case 4:
        wx: wx.navigateTo({
          url: '../m-settings/m-settings'
        });
      break; 
      case 5:
        wx: wx.navigateTo({
          url: '../m-feedback/m-feedback'
        });
      break;
      
    }
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
    if(app.users){
      this.setData({
        login: app.users
      }) 
    }else{
      this.setData({
        login: '登录 / 注册'
      })
    }
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