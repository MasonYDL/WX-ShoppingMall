const productList = [
  {
    name: "白菜",
    id: 3,
    price: 3.50,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 1,
    num: 1
  },
  {
    name: "青菜",
    id: 4,
    price: 5.00,
    src: "/images/qingcai.jpg",
    src1: "/images/qingcai1.jpg",
    src2: "/images/qingcai2.jpg",
    src3: "/images/qingcai3.jpg",
    src4: "/images/qingcai1.jpg",
    src5: "/images/qingcai3.jpg",
    src6: "/images/qingcai2.jpg",
    classid: 1,
    num: 1
  },
  {
    name: "西瓜",
    id: 1,
    price: 10.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 2,
    num: 1
  },
  {
    name: "草莓",
    id: 2,
    price: 15.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 2,
    num: 1
  },
  {
    name: "猪肉",
    id: 5,
    price: 20.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 3,
    num: 1
  },
  {
    name: "牛肉",
    id: 6,
    price: 45.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 3,
    num: 1
  },
  {
    name: "鲫鱼",
    id: 7,
    price: 15.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 4,
    num: 1
  },
  {
    name: "鲤鱼",
    id: 8,
    price: 25.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 4,
    num: 1
  }
]

const classList = [
  {
    id: 1,
    name: "精选好物",
    src:"/images/精选好物.jpg"

  },
  {
    id: 2,
    name: "时令水果",
    src: "/images/时令水果.jpg"
  },
  {
    id: 3,
    name: "安心乳品",
    src: "/images/安心乳品.jpg"
  },
  {
    id: 4,
    name: "海鲜水产",
    src: "/images/海鲜水产.jpg"
  },
  {
    id: 5,
    name: "米面粮油",
    src: "/images/米面粮油.jpg"
  },
  {
    id: 6,
    name: "酒饮冲调",
    src: "/images/酒饮.jpg"
  },
  {
    id: 7,
    name: "肉禽蛋品",
    src: "/images/肉禽蛋品.jpg"
  },
  {
    id: 8,
    name: "新鲜蔬菜",
    src: "/images/新鲜蔬菜.jpg"
  },
  {
    id: 9,
    name: "熟食餐饮",
    src: "/images/熟食餐饮.jpg"
  },
  {
    id: 10,
    name: "蜜饯干果",
    src: "/images/蜜饯干果.jpg"
  }
]
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


function getpro(id) {
  var data1;
  wx.request({
    url: 'http://123.56.254.65:8100/product/' + id,
    data: {},
    method: "GET",
    header: {
    },
    success: function (res) {
      //console.log(res.data);
      data1 = res.data
    }
  })
  return data1;
}

function getClassList() {
  let list=[];
  for(var i=0; i<classList.length;i++)
  {
    let obj={};
    obj.id=classList[i].id;
    obj.name=classList[i].name;
    obj.src=classList[i].src;
    list.push(obj);
  }
  return list;
}


function getProductDetail(productId) {
  let message = {
    code: '404',
    product: {}
  }
  for (var i = 0; i < productList.length; i++) {
    if (productId == productList[i].id) {
      message.code = '200',
        message.product = productList[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getProductList: getProductList,
  getProductDetail: getProductDetail,
  getClassList:getClassList,
  getpro:getpro
}
