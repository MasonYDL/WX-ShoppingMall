// pages/index/index.js
var common = require('../../utils/common.js')
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: "http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg" },
      { src: "http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg" },
      { src: "http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg" }
    ],
    productList:[],
    navList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
    let list = common.getProductList()
    let list1= common.getClassList()
    this.setData({
      //productList:list,
      navList: list1
    })
    wx.request({
      url: 'http://123.56.254.65:8100/productlist',
      data: {},
      method: "GET",
      header: {},
      success: function (res) {
        //console.log(res.data);
        that.setData({
          productList: res.data,
        })
      }
    });
    function getProductList() {
      let list = [];
      for (var i = 0; i < productList.length; i++) {
        let obj = {};
        obj.id = productList[i].id;
        obj.name = productList[i].name;
        obj.price = productList[i].price;
        obj.src = productList[i].src;
        obj.classid = productList[i].classid;
        list.push(obj);
      }
      return list;
    }
  },
})