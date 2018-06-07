//对应的audio.js
Page({
  data: {
    audioContext: '',
    audio: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=4',
      currentTime: 0,
      currtRate: 0

    }
  },
  //以下是状态监听
  audioError: function (resp) {
    console.log(resp);
  },
  audioPlay: function (resp) {
    console.log(resp);
    console.log('开始播放');
  },
  playEnd: function (resp) {
    console.log(resp);
    console.log('播放结束');
  },
  timeUpdate: function (resp) {
    this.setData({
      currtRate: (100 * resp.detail.currentTime / resp.detail.duration)
    });//总时长
    this.currentTime = resp.detail.currentTime;//当前时长
    console.log(resp);
    console.log('播放进度变化');
  },
  //以下是操作
  play: function () {
    this.audioContext.play();
  },
  pause: function () {
    this.audioContext.pause();
  },
  goFast: function () {
    this.audioContext.seek(this.currentTime + 20);
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.audioContext = wx.createAudioContext('audio');

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})