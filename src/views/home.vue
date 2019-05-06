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
    <hr>
    <button @click="echartsOpen">点击生成echarts</button>
    <div id="eChartsTestOne"></div>
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
    },
    // echartsOpen
    echartsOpen() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('eChartsTestOne'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '左侧标题'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              normal: {
                color: '#ff0525',
                width: 2
              }
            },
            markPoint: {
              // 显示一定区域内的最大值和最小值
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            symbol: 'circle',     // 设定为实心点
            symbolSize: 20   // 设定实心点的大小
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle: {
              normal: {
                color: '#FFF722',
                width: 2
              }
            },
            symbolSize: 10   // 设定实心点的大小
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
            lineStyle: {
              normal: {
                color: '#12FF5E',
                width: 2
              }
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
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
  #eChartsTestOne{
    width: 100%;
    height: 500px;
    color: #ff0525;
  }
</style>
