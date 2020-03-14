<template>
    <div>
      <button @click="echartsOpen">点击生成echarts</button>
      <div id="eChartsTestOne"></div>
    </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    echartsOpen () {
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
            symbol: 'circle', // 设定为实心点
            symbolSize: 20 // 设定实心点的大小
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
            symbolSize: 10// 设定实心点的大小
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
