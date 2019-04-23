<template>
  <div>
    <!--<first></first>-->
    <h1 @click="modify" id="myBtn">{{title}}</h1>
    <h2 @click='reg'>注册</h2>
    <h2 @click='handleClick'>登录</h2>
    <div>用户信息：{{ userInfo }}</div>
    <h2 @click='swiper'>图片数据</h2>
    <img v-for="(item, index) in slider" :key="index" :src="item" alt="" style="width: 100%;height: auto;">
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
import first from '@/components/test/first'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      swiperList: []
    }
  },
  components: {
    first
  },
  created () {
    console.log(this.$store.state)
  },
  mounted () {
  },
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
    },
    modify () {
      this.$store.commit('setTitle', '更改')
      this.$store.dispatch('testGu')
      console.log(this.$store.getters.doneTodosCount)
    },
    // reg
    reg () {
      let obj = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('reg', obj).then(res => {
        if (res.code === 1) {
          alert(res.error)
        } else
        if (res.code === 0) {
          alert('注册成功')
        }
      })
    },
    // login
    handleClick () {
      let obj = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('login', obj).then(res => {
        if (res.code === 1) {
          alert(res.error)
        }
      })
    },
    // swiper
    swiper () {
      this.$store.dispatch('getSliders')
    }
  },
  computed: {
    ...mapState({
      title: state => {
        return state.testStore.title
      },
      userInfo: state => {
        return state.session.userInfo
      },
      slider: state => {
        return state.session.slider
      }
    })
  }
}
</script>

<style scoped>

</style>
