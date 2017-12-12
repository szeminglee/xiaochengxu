Page({
  data: {
    slider: [
      { picUrl: 'http://owkvn7umo.bkt.clouddn.com/banner.png' },
      { picUrl: 'http://owkvn7umo.bkt.clouddn.com/banner2.png' },
      { picUrl: 'http://owkvn7umo.bkt.clouddn.com/banner3.png' }
    ],
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})