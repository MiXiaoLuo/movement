// pages/m-login/m-login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:1,
    enrollUser:'',
    enrollPass:'',
    enrollCona:' ',
    loginUser:'',
    loginPass:'',
    login:''
  },
  loginEnroll:function(e){
    // console.log(e)
    this.setData({
      list:e.currentTarget.dataset.list
    })
  },
  enroll:function(){
    var user = this.data.enrollUser;
    var pass = this.data.enrollPass;
    var cona = this.data.enrollCona;
    var ti = this;
    if(user && pass && cona == ''){
      wx.request({
        url: 'http://localhost:8086/enroll',
        method: 'GET',
        data: {
          user: user,
          pass: pass
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          ti.setData({
            enrollCona:res.data.msg
          })
        }
      })
    }
  },
  enrollUser:function(e){
    this.setData({
      enrollUser:e.detail.value
    })
  },
  enrollPass:function(e){
    this.setData({
      enrollPass: e.detail.value
    })
  },
  enrollCona:function(e){
    var pass = this.data.enrollPass;
    var cona = e.detail.value;
    if(pass == cona){
      this.setData({
        enrollCona:''
      });
    }else{
      this.setData({
        enrollCona: '两次密码不一致!'
      })
    }
  },
  login:function(){
    var user = this.data.loginUser;
    var pass = this.data.loginPass;
    var ti = this;
    if (user && pass) {
      wx.request({
        url: 'http://localhost:8086/login',
        method: 'GET',
        data: {
          user: user,
          pass: pass
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res)
          if(res.data.code === 2){
            wx.navigateBack({
              delta: 2
            })
            return;
          }
          if(res.data.code == 3){
            ti.setData({
              login:res.data.msg
            })
            return;
          }
        }
      })
    }
  },
  loginUser:function(e){
    this.setData({
      loginUser:e.detail.value
    });
  },
  loginPass:function(e){
    this.setData({
      loginPass: e.detail.value
    });
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

  }
})