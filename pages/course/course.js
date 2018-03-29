// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAllClassify: true,
    classifyList: [
      {
        name: '语文',
        id: 0,
        isActive: false
      },
      {
        name: '数学',
        id: 1,
        isActive: false
      },
      {
        name: '英语',
        id: 2,
        isActive: false
      },
      {
        name: '地理',
        id: 3,
        isActive: false
      },
      {
        name: '化学',
        id: 4,
        isActive: false
      },
      {
        name: '物理',
        id: 5,
        isActive: false
      },
      {
        name: 'C++',
        id: 6,
        isActive: false
      },
      {
        name: '前端',
        id: 7,
        isActive: false
      },
      {
        name: '美术',
        id: 8,
        isActive: false
      },
      {
        name: '安全常识',
        id: 9,
        isActive: false
      },
      {
        name: '篮球',
        id: 10,
        isActive: false
      }
    ],
    courseList: [
      {
        id: 0,
        type: '语文',
        title: 'ES6快速入门',
        studyNumber: 12,
        file: 'http://img1.mukewang.com/5a97d4000001d97906000338-590-330.jpg'
      },
      {
        id: 1,
        type: 'C++',
        title: 'C++二十一天入门到精通',
        studyNumber: 200,
        file: 'http://img1.mukewang.com/5a56fdb400017d0306000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      },
      {
        id: 2,
        type: '前端',
        title: '移动web开发适配秘籍Rem',
        studyNumber: 123,
        file: 'http://img3.mukewang.com/5a2516840001a77006000338-590-330.jpg'
      }
    ]
  },

  /**
   * 选择类别
   */
  checkClassify: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.classifyList.forEach(item => {
      item.isActive = false;
    })
    if (index === 'all') {
      this.setData({ isAllClassify: true })
    } else {
      this.setData({ isAllClassify: false })
      this.data.classifyList[index].isActive = true;
    }
    this.setData({ classifyList: this.data.classifyList })
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