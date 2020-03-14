<template>
    <div>
      <cutting></cutting>
    </div>
</template>

<script>
/*
* 单独使用引入cropper
* 与element-ui同时使用引入index
* import cutting from '@/components/Cutting/index'
* <cutting @imgupload="imgupload"></cutting>
* <cutting multiple @imgupload="imgupload"></cutting>
* */
import cutting from '@/components/Cutting/cropper'
export default {
  name: 'index',
  components: {
    cutting
  }
}
</script>

<style scoped>

</style>
