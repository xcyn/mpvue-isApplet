import { inBrowser, inWechat, inAlipay } from '@/utils'

// 全局mixin
export default {
  data () {
    return {
      code: '',
      userInfo: null
    }
  },
  computed: {
    inBrowser () {
      return inBrowser
    },
    inWechat () {
      return inWechat
    },
    inAlipay () {
      return inAlipay
    }
  },
  methods: {
    newroot () {
      return this.$route
    },
    showShareMenu () {
      if (inBrowser) {

      } else if (inWechat) {

      } else if (inAlipay) {
        wx.showShareMenu()
      }
    },
    navigatePageTo (url) {
      if (inBrowser || inWechat) {
        this.$router.push(url)
      } else if (inAlipay) {
        wx.navigateTo({
          url
        })
      }
    },
    backPageTo (index) {
      if (inBrowser || inWechat) {
        this.$router.back(index)
      } else if (inAlipay) {
        wx.navigateBack({
          delta: index ? `-${index}` : 1
        })
      }
    },
    getUserInfo () {
      if (inBrowser || inWechat) {
        // todo
      } else if (inAlipay) {
        // 调用登录接口
        wx.login({
          success: (loginRes) => {
            this.code = loginRes.code
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                console.log('this.userInfo', this.userInfo)
              }
            })
          }
        })
      }
    }
  },
  created () {
  }
}
