// pages/v-details/v-details.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    _num: 1,
    animationData:{},
    anima:false,
    review:false,
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    shi:0,
    tempFilePaths:[],
    con:{}
  },
  evaluation:function(e){
    this.setData({
      _num: e.target.dataset.num
    })
  },
  images:function(){
    var ti = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        ti.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  xImages:function(e){
    var url = e.currentTarget.dataset.url;
    var images = this.data.tempFilePaths
    images.splice(url,1);
    this.setData({
      tempFilePaths:images
    })
  },
  previewImages:function(e){
    var index = e.currentTarget.dataset.index;
    var url = this.data.tempFilePaths;
    wx.previewImage({
      current: url[index],
      urls: url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    this.dateInit();
    this.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    })
    var json = JSON.parse(options.con);
    this.setData({
      con:json
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

  },


  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = [];                       //需要遍历的日历数组数据
    let arrLen = 0;                         //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();                 //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();                          //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate();               //获取目标月有多少天
    let obj = {};
    let num = 0;
    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;
    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  /**
   * 上月切换
   */
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  /**
   * 下月切换
   */
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  lookHuoDong:function(e){
    console.log(e);
    this.setData({
      shi: e.currentTarget.dataset.datenum
    })
  },

  animationData: function () {
    this.setData({
      anima: true
    });
    Up(this);
  },
  riliDown:function(){
    var that = this;
    Down(this);
    setTimeout(function () {
      that.setData({
        anima: false
      })
    }, 1000)
  },
  evaUp:function(){
    this.setData({
      review: true
    });
    Up(this);
  },
  evaDown:function(){
    var that = this;
    Down(this);
    setTimeout(function () {
      that.setData({
        review: false
      })
    }, 1000)
  }


})

function Up(tmd){
  var animation = wx.createAnimation({
    duration: 2000,
    timingFunction: 'ease'
  });
  tmd.animation = animation;
  var ti = tmd;
  setTimeout(function () {
    animation.translateY(-100 + '%').step()
    ti.setData({
      animationData: animation.export()
    })
  }, 200);
}

function Down(tmd){
  var that = tmd;
  var animation = wx.createAnimation({
    duration: 1000,
    timingFunction: 'linear'
  })
  tmd.animation = animation;
  setTimeout(function () {
    animation.translateY(0).step()
    that.setData({
      animationData: animation.export()
    })
  }, 10)
}
