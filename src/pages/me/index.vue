<template>
  <div>
    <div class="me_info">
      <div class="user" v-if="userInfo">
        <img class="user--logo" :src="userInfo.avatarUrl">
        <div class="user--name">
          {{userInfo.nickName}}
        </div>
      </div>
      <div class="user" v-else>
        <div class="user--login">
          <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">登陆</button>
        </div>
      </div>

    </div>
    <div class="cell">
      <van-cell-group>
        <van-cell title="我的购物车" is-link />
        <van-cell title="单元格" is-link value="内容" />
        <van-cell
          @click="handleGoPage('/pages/calendar/main')"
          title="日历"
          is-link
          arrow-direction="down"
          value="哈哈"
        />
        <van-cell
          title="首页"
          is-link
          arrow-direction="down"
          value="内容"
          :border='false'
          url="/pages/index/main"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    handleBack () {
      this.backPageTo()
    },
    handleGoPage (url) {
      this.navigatePageTo(url)
    },
    handlegoWebView () {
      const url = '/pages/web-view/main'
      this.navigatePageTo(url)
    },
    getUserInfo: function (e) {
      const { target: { userInfo } } = e
      this.$store.commit('saveUserInfo', userInfo)
      this.userInfo = userInfo
      console.log('userInfo', userInfo)
    }
  },

  created () {
    this.showShareMenu()
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.me_info
  height 200px
  background-color rgba(255,0,0,0.5)
  display flex
  align-items center
  justify-content center
  color #fff
.user
  text-align center
.user--logo
  width 50px
  height 50px
  border-radius 50%
.user--name
  padding-top 7px
  font-size 12px
.user--login
  font-size 20px
.cell
  padding-top 10px

</style>
