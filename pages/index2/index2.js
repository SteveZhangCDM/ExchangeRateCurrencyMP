// pages/index2/index2.js
Page({
  data: {
    value: '',
    show1: false,
    show2: false,
    arr1_currency: [
      { name: 'CAD' },
      { name: 'USD' },
      { name: 'EUR' },
      { name: 'JPY' },
      { name: 'CNY' },
    ],
    arr2_currency: [
      { name: 'CAD' },
      { name: 'USD' },
      { name: 'EUR' },
      { name: 'JPY' },
      { name: 'CNY' },
    ],
  },
  onChange(event) {},
  onTap1() {
    this.setData({
      show1: true,
    });
  },
  onTap2() {
    this.setData({
      show2: true,
    });
  },
  onClose() {
    this.setData({
      show1: false,
      show2: false,
    });
  },
  onSelect1(res) {
    this.setData({
      selected_currency1: res.detail.name,
    });
  },
  onSelect2(res) {
    this.setData({
      selected_currency2: res.detail.name,
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {},
});
