<template>
  <div>
    <h1 @click="listAdd">列表添加</h1>
    <h1 @click="modify">commit dispatch</h1>
    <h1 @click="userInfoG">用户信息</h1>
    <h1 @click="Picture">图片数据</h1>
    <h1 @click="videoEvent">video标签</h1>
    <h1 @click="echartsEvent">echarts</h1>
    <h1 @click="cropperImg">cropper图片剪切</h1>
    <h1 @click="exportExcel">导出excel</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      swiperList: []
    }
  },
  created () {
    console.log(this.$store.state)
  },
  mounted () {
  },
  components: {
  },
  methods: {
    // 列表组件
    listAdd () {
      this.$router.push('/list')
    },
    // vux commit dispatch 方法
    modify () {
      this.$router.push('/dispatchTitle')
    },
    // 用户信息 注册登录
    userInfoG () {
      this.$router.push('/userInfo')
    },
    // 图片数据
    Picture () {
      this.$router.push('/Picture')
    },
    // video点击事件
    videoEvent () {
      this.$router.push('/video')
    },
    // echarts
    echartsEvent () {
      this.$router.push('/echarts')
    },
    // cropper
    cropperImg () {
      this.$router.push('/cropperImg')
    },
    // exportExcel
    exportExcel () {
      this.$router.push('/exportExcel')
    }
  }
}
</script>
