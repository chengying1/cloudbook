//index.js
//获取应用实例
import {fetch} from "../../utils/util.js"
const app = getApp()

Page({
  data: {
    swiperData:[],
    mainContent:[],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500
  },
  onLoad () {
 this.getData()
 this.getContent()
  },
getData(){
 fetch.get("/swiper").then(res => {
  //  console.log(res.data)
   this.setData({
     swiperData:res.data
   })
 })
},
getContent(){
  fetch.get("/category/books").then(res => {
    // console.log(res)
    this.setData({
      mainContent:res.data
    })
  })
},
jumpBook(event){
  const id = event.currentTarget.id
  // console.log(event)
  wx.navigateTo({
    url: `/pages/details/details?id=${id}`,
  })
}
})
