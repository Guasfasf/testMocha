<template>
  <div>
    <button @click="excelDao">导出excel</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    /*
    * this.$http 提供请求api地址
    * params 请求参数
    * ExportExcelCommission 请求api接口
    * */
    excelDao () {
      let params = {
        'StoreId': 'AEA0B6AD-414C-440A-9D59-918FE82D35F1',
        'DateStart': '2019-10-12 10:49:32.200',
        'DateEnd': '2019-10-13 10:49:32.200',
        'StaffName': '',
        'Status': '',
        'PagSize': 0,
        'PagIndex': 0,
        'Operatorid': '894179D8-481F-4121-A5B5-EEF28A2A320E',
        'TenantId': '55E1FEC4-4E91-40E2-BAE4-C1212D25D7F2'
      }
      this.$http.post('ExportExcelCommission', params, { responseType: 'blob' }).then(res => {
        let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
        // let objectUrl = URL.createObjectURL(blob);
        // window.location.href = objectUrl;

        var downloadElement = document.createElement('a')
        var href = window.URL.createObjectURL(blob) // 创建下载的链接
        downloadElement.href = href
        downloadElement.download = '导出文件.xls'// 下载后文件名
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href) // 释放掉blob对象
      })
    }
  }
}
</script>

<style scoped>

</style>
