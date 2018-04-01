// pages/test/test-ing/test-ing.js
import { wxLoading } from '../../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    testIndex: 0,
    testData: [
      {
        id: 0,
        d: '下列说法有误的一项是',
        remake: '关于这题呢，没啥好说的，分丢了就是基础知识不牢固，闲暇时多看看书，胸藏文墨怀若谷 腹有诗书气自华。',
        answers: [
          {
            id: 0,
            text: '《论语》是儒家的经典著作之一，与《大学》《中庸》《孟子》合称为“四书”。'
          },
          {
            id: 1,
            text: '《左传》相传是战国时期鲁国史官左丘明所写，课文《曹刿论战》就选自其中。'
          },
          {
            id: 2,
            text: '《史记》是我国第一部纪传体通史，全书共一百三十篇，被鲁迅称为“史家之绝唱，无韵之离骚”。'
          },
          {
            id: 3,
            text: '人们常用“唐诗、宋词、元曲、明清小说”概括唐、宋、元、明、清这几个时期突出的文学形式。'
          }
        ]
      },
      {
        id: 1,
        d: '下列说法有误的一项是',
        answers: [
          {
            id: 0,
            text: '明清四大古典小说是《红楼梦》、《三国演义》、《儒林外史》、《西游记》。'
          },
          {
            id: 1,
            text: '被鲁迅誉为“清末四大谴责小说”的作品是《官场现形记》、《二十年目睹之怪现状》、《老残游记》、《孽海花》。'
          },
          {
            id: 2,
            text: '我国现代文学的奠基人是鲁迅。他小说的代表作是《狂人日记》'
          },
          {
            id: 3,
            text: '“四书五经”是我国古代科举考试的内容，其中“四书”指《论语》、《孟子》、《大学》、《中庸》，“五经”指《易》、《尚书》、《礼》、《诗》、《春秋》。'
          }
        ]
      },
      {
        id: 2,
        d: '下列说法有误的一项是',
        answers: [
          {
            id: 0,
            text: '“高山流水遇知音，阳春白雪传雅趣”“看似点横撇捺，实则恢弘豁达”“万代文章尊李杜，千秋翰墨秉苏黄”，这三幅对联分别适宜赠送音乐家、书法家、文学家。。'
          },
          {
            id: 1,
            text: '京剧脸谱中，红脸代表忠勇，黑脸代表猛智，蓝脸和绿脸代表草莽英雄，黄脸和白脸代表凶诈，金脸和银脸代表神妖。'
          },
          {
            id: 2,
            text: '小说塑造人物的方法是丰富多样的。其中有外貌和心理描写，也有动作和语言描写，如《范进中举》中范进发疯狂奔狂舞是动作描写，而对胡屠户与众人则主要采用了语言描写。'
          },
          {
            id: 3,
            text: '“明初诗文三大家”是指宋濂、刘基和高启。朱元璋称宋濂为“开国文臣之首”，赞刘基“当今文章第一”'
          }
        ]
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

  /**
   * methos
   */
  chooseAnswer(e) {
    const index = e.currentTarget.dataset.index;
    let list = this.data.testData;
    if (!list[this.data.testIndex].answers[index].isActive) {
      list[this.data.testIndex].answers.map(value => value.isActive = false);
      list[this.data.testIndex].answers[index].isActive = true;
      this.setData({
        testData: list
      })
    }
  },

  chooseQuestion(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      testIndex: index
    })
  },

  nextQuestion(e) {
    const type = Number(e.currentTarget.dataset.type || 0);
    let index = this.data.testIndex;
    this.setData({
      testIndex: type == 0 ? index - 1 : index + 1
    })
  },

  submit() {
    // wxLoading('提交中');
    wx.showLoading({
      title: '提交中',
      mask: true
    })

    setTimeout(function () {
      wx.hideLoading();
      wx.navigateTo({
        url: '/pages/test/test-result/test-result?id=1'
      })
    }, 2000)
  }
})