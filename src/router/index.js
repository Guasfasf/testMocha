import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import listComponent from '@/views/listComponent/index'
import dispatchTitle from '@/views/dispatchTitle/index'
import userInfo from '@/views/userInfo/index'
import Picture from '@/views/Picture/index'
import video from '@/views/video/index'
import echarts from '@/views/echarts/index'
import cropperImg from '@/views/cropperImg/index'
import exportExcel from '@/views/exportExcel/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'listComponent',
      component: listComponent
    },
    {
      path: '/dispatchTitle',
      name: 'dispatchTitle',
      component: dispatchTitle
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/Picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/cropperImg',
      name: 'cropperImg',
      component: cropperImg
    },
    {
      path: '/exportExcel',
      name: 'exportExcel',
      component: exportExcel
    }
  ]
})
