// pages/detail/detail.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{
      id: '001',
      name:"西瓜",
      price:"10.00",
      src1:"/images/xigua1.jpg",
      src2: "/images/xigua2.jpg",
      src3: "/images/xigua3.jpg",
      src4: "/images/xigua4.jpg",
      src5: "/images/xigua1.jpg",
      src6: "/images/xigua2.jpg",
    }
  },
  addCar(){
    let product = this.data.product
    wx.setStorageSync(product.name, product)
    console.log(product)

    wx.showModal({
      title: '成功提示',
      content: '产品添加到购物车成功',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let result = common.getProductDetail(id)
    if(result.code == '200'){
      this.setData({
        product:result.product
      })
    }
  }
})