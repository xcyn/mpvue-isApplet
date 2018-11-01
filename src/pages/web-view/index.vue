<template>
  <div class="web-view">
    <h6>webView测试</h6> 
    <web-view v-if="inAlipay" src="https://d-h5.rlab.net.cn/rider-register/"></web-view>
  </div>
</template>

<script>

export default {
  computed: {
  },
  data () {
    return {
    }
  },

  components: {
  },

  methods: {

  },

  created () {
  },
  onLoad (options) {
    this.showShareMenu()
  }
}
</script>

<style scoped>
</style>
