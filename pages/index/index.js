var c = 0
var d = 1
var source= 'https://github.com/guidesc/Petinkou/blob/master/audios/' + d + '.m4a?raw=true'
console.log(source)
Page({
  data: {
    curIdx: null,
    count:0,
    listInfo: [
      {
        imgUrl: 'https://github.com/guidesc/Petinkou/blob/master/images/app1.gif?raw=true',
        curUrl: 'https://github.com/guidesc/Petinkou/blob/master/images/app2.gif?raw=true',
        tstUrl: 'https://github.com/guidesc/Petinkou/blob/master/images/app3.gif?raw=true'

      }
    ]
  },
  changeImg: function (e) {
    
    this.setData({
      curIdx: e.currentTarget.dataset.current,
      count: c}),
    c = c + 1
    d = d + 1
    source = 'https://github.com/guidesc/Petinkou/blob/master/audios/' + d + '.m4a?raw=true'
    
    console.log(source)
    backgroundAudioManager.src = source // 设置了 src 之后会自动播放

    //wx.pauseBackgroundAudio()
    //  console.log(e)
    //  console.log(this.data.curIdx) 
    //  console.log(this.data.count)
  }

})

const backgroundAudioManager = wx.getBackgroundAudioManager()

backgroundAudioManager.src = source // 设置了 src 之后会自动播放

