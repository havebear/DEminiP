// pages/course/course-detail/course-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverFile: '',
    title: '无标题',
    directorys: [
      {
        title: '课程介绍',
        id: '1'
      },
      {
        title: '环境搭建',
        id: '2'
      },
      {
        title: 'ES6基础',
        id: '3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.coverFile = options.file;
    this.setData({
      coverFile: options.file,
      title: options.title
    })
    // wx.setNavigationBarTitle({
    //   title: options.title || '课程详情'
    // })
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

  // methods
  // 开始学习
  toStudy() {
    wx.navigateTo({
      url: `/pages/course/learn-page/learn-page?id=1`,
    })
  }
})