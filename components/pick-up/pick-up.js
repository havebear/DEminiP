// components/pick-up/pick-up.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: 'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPickUp: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pickUp() {
      console.log(this.data.isPickUp);
      this.setData({
        isPickUp: !this.data.isPickUp
      })
    }
  }
})
