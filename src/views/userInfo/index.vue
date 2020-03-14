<template>
  <div>
    <h2 @click='reg'>注册</h2>
    <h2 @click='handleClick'>登录</h2>
    <div>用户信息：{{ userInfo }}</div>
    <ptCode id="ptCode1" ref="ptCode1" :identifyCode="identifyCode" @click.native="floorNumber"></ptCode>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ptCode from '@/components/PtCode/PtCode'
export default {
  name: 'index',
  data () {
    return {
      identifyCode: ''
    }
  },
  mounted () {
    this.floorNumber()
  },
  components: {
    ptCode
  },
  methods: {
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
    floorNumber () {
      var num = ''
      for (var i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10)
      }
      this.identifyCode = num
      this.$refs.ptCode1.drawPic()
    }
  },
  computed: {
    ...mapState({
      userInfo: state => {
        return state.session.userInfo
      }
    })
  }
}
</script>

<style scoped>

</style>
