// pages/course/learn-page/learn-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPickUp: false,
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
    ],
    appraisals: [
      {
        id: 1,
        avatar: 'http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201708/30161624zc6pqlpa.jpg',
        userName: '兵哥哥',
        time: '2018.3.28 13.45',
        count: 123,
        content: '我是评论内容，这个课程呢，难度：低级，中级，高级。',
        isLike: true
      },
      {
        id: 2,
        avatar: 'http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201708/30161624zc6pqlpa.jpg',
        userName: '兵哥哥',
        time: '2018.3.28 13.45',
        count: 123,
        content: '我是评论内容，这个课程呢，难度：低级，中级，高级。',
        isLike: true
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

  // methods
  pickUp() {
    console.log(this.data.isPickUp);
    this.setData({
      isPickUp: !this.data.isPickUp
    })
  }
})