var c = 1

Page({
  data: {
    curIdx: null,
    count:0,
    source: 'https://github.com/guidesc/Petinkou/blob/master/audios/1.m4a?raw=true',
    listInfo: [
      {
        imgUrl: 'https://github.com/guidesc/Petinkou/blob/master/images/app1.gif?raw=true',
        curUrl: 'https://github.com/guidesc/Petinkou/blob/master/images/app2-2.gif?raw=true',
        tstUrl: '../../images/blue-lowerleft.png'

      }
    ]
  },
  changeImg: function (e) {
    
    this.setData({
      curIdx: e.currentTarget.dataset.current,
      count: c,
      source: 'https://github.com/guidesc/Petinkou/blob/master/audios/2.m4a?raw=true'
    }),
    c = c + 1


    //wx.pauseBackgroundAudio()
      console.log(e)
      console.log(this.data.curIdx) 
      console.log(this.data.count)
  }

})

const backgroundAudioManager = wx.getBackgroundAudioManager()

backgroundAudioManager.src = 'https://github.com/guidesc/Petinkou/blob/master/audios/Swing%20Republic.m4a?raw=true' // 设置了 src 之后会自动播放

