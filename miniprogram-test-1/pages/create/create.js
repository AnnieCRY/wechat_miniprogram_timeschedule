// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'Mon', value: '周一', checked: 'true' },
      { name: 'Tue', value: '周二', checked: 'true' },
      { name: 'Wed', value: '周三', checked: 'true' },
      { name: 'THU', value: '周四', checked: 'true' },
      { name: 'FRI', value: '周五', checked: 'true' },
      { name: 'SAT', value: '周六' },
      { name: 'SUN', value: '周日' },
    ],
    start_time: '9:00',
    end_time: '18:00'
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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