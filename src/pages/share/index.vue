<template>
  <div class="share-warp">
    <p>Vuex 测试{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p class="back" @click="backPageTo">返回</p>
    <button open-type='share'>分享</button>
  </div>
</template>

<script>
// Use Vuex

export default {
  data () {
    return {

    }
  },
  computed: {
    count () {
      return 1
    }
  },
  // 小程序专属
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res)
    }
    return {
      title: '我自定义的分享回调',
      path: '/pages/detail/main?id=111'
    }
  },
  methods: {
    increment () {
    },
    decrement () {
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.share-warp
  text-align center
  margin-top 100px
.home
  display inline-block
  margin 100px auto
  padding 5px 10px
  color blue
  border 1px solid blue
.back
  border 1px solid green
  padding 10px
  margin-top 10px
  text-align center
</style>
