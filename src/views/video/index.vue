<template>
  <div>
    <video style="width: 100%;height: 200px"
           @click="cVideo"
           webkit-playsinline=""
           playsinline=""
           x5-playsinline=""
           x-webkit-airplay="allow"
           x5-video-orientation="landscape"
           x5-video-player-type="h5"
           x5-video-player-fullscreen="false"
           controls="controls"
           loop="loop"
           src="http://www.runoob.com/try/demo_source/mov_bbb.mp4"
           preload="auto"
           id="video1">
    </video>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    cVideo () {
      var video = document.getElementById('video1')
      // 显示视频控件
      video.controls = true
      // 播放或暂停
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }
}
</script>

<style scoped>

</style>
