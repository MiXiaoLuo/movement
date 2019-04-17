//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner0.png',
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png',
      '../../images/banner4.png'
      ],
    details: [
        {
          img: '../../images/banner0.png',
          title:'千群健身',
          time: '09:00-22:00',
          address: '健康路168号2楼3楼(省体育场)',
          tickets: '￥9.9',
          residue: '56'
        },
        {
          img: '../../images/banner1.png',
          title: '乐动健身俱乐部',
          time: '09:00-22:00',
          address: '英才街国基生活区旗杆向南50米路西',
          tickets: '￥9.9',
          residue: '32'
        },
        {
          img: '../../images/banner2.png',
          title: '中州·沁雅',
          time: '09:00-22:00',
          address: '农业路71号',
          tickets: '￥9.9',
          residue: '63'
        },
        {
          img: '../../images/banner3.png',
          title: '莱喜健身俱乐部',
          time: '09:00-22:00',
          address: '航海路中州大道交汇处美食广场3楼(美景天城)',
          tickets: '￥14.9',
          residue: '47'
        },
        {
          img: '../../images/banner4.png',
          title: '拜逑台球会所',
          time: '09:00-22:00',
          address: '交通路与政通路交叉口向东300米路北B1楼',
          tickets: '￥9.8',
          residue: '30'
        }
      ]
  },
  cnt: function (e) {
    var data = this.data.details[e.currentTarget.dataset.on];
    // console.log(data);
    wx.navigateTo({
      url: '../v-details/v-details?on=' + JSON.stringify(data),
    })
  }
})