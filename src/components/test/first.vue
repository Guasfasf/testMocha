<template>
  <div>
    <h1 class="li">{{ title }}</h1>
    <input v-model="newItem" >
    <button @click="addItemToList">Add</button>
    <ul>
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: '',
      title: 'listComponent'
    }
  },
  methods: {
    addItemToList () {
      if (this.newItem === '') return
      this.listItems.push(this.newItem)
      this.newItem = ''
    }
  }
}
</script>
