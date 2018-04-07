// pages/mine/my-course/my-course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: [
      {
        id: 0,
        level: '初一',
        type: '语文',
        title: 'ES6快速入门',
        count: 12,
        file: 'http://img1.mukewang.com/5a97d4000001d97906000338-590-330.jpg'
      },
      {
        id: 1,
        level: '初一',
        type: 'C++',
        title: 'C++二十一天入门到精通',
        count: 200,
        file: 'http://img1.mukewang.com/5a56fdb400017d0306000338-590-330.jpg'
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

  }
})