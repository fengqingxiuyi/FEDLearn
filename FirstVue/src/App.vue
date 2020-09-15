<template>
  <div id="app">
    <button type="button" v-on:click="getData">发起请求</button>
    <toast ref="toast"></toast>
  </div>
</template>

<script>

import Toast from './components/toast/Toast'
export default {
  name: 'App',
  components: {
    [Toast.name]: Toast
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('http://104.224.173.101:8080/firstmybatis/queryName', {
        params: { // 请求参数
          id: 1
        }
      }).then(response => {
        console.log(response.data)
        this.$refs.toast.show(JSON.stringify(response.data), 2500)
      }).catch(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
