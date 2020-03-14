<template>
  <div>
    <h1 @click="modifyCommit">commit:{{title}}</h1>
    <h1 @click="modifyDispatch">dispatch:{{title}}</h1>
    <h1>监听title.length：{{$store.getters.doneTodosCount}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  methods: {
    modifyCommit () {
      this.$store.commit('setTitle', '更改commit')
      console.log(this.$store.getters.doneTodosCount)
    },
    modifyDispatch () {
      this.$store.dispatch('testGu', '更改dispatch')
      console.log(this.$store.getters.doneTodosCount)
    }
  },
  computed: {
    ...mapState({
      title: state => {
        return state.testStore.title
      }
    })
  }
}
</script>

<style scoped>

</style>
