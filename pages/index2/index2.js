// pages/index2/index2.js
Page({
  
  data: {
    value:'',
    show: false,
    arr_currency:[
      {name: "CAD"},
      {name: "USD"},
      {name: "EUR"},
      {name: "JPY"},
      {name: "CNY"},
    ]
    
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  onTap(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  onSelect(res){
    console.log(res.detail.name)
    this.setData({
      selected_currency:res.detail.name
    })
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
