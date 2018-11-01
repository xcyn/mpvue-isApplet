<template>
  <div class="container">
    <!-- 导航搜索测试 -->
    <div class="nav">
      <div class="search">
        <van-search
          class="s_ipt"
          v-model="serValue"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div class="bread">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=" alt="">
      </div>
    </div>
    <!-- 轮播方案测试 -->
    <div class="banner_swipe">
      <van-swipe v-if="inBrowser" :width='375' :autoplay="1500">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>
      <div v-else>
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="image in images" :index="image" :key="image">
              <swiper-item>
                  <image :src="image" class="slide-image" mode="aspectFill"/>
              </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
    <!-- 通知栏测试 -->
    <van-notice-bar
      left-icon="//me.xiaojukeji.com/project/stargate-auth/img/logo@2x.png?v=08d2fd"
      text="商品打折促销通告：11月11日，全场儿童商品7.5折，全场女生商品7折，全场男生商品5折"
    />
    <!-- 卡劵测试 -->
    <div class="discount">
      <div class="discount_item" v-for="(item,key) in discounts" :key="key">
        <div class="discount_item--money">&yen; 40元</div>
        <div class="discount_item--price pb3">新店优惠</div>
        <div class="discount_item--userule pb3">满300使用</div>
        <div class="discount_item--useday">领取15天内有效</div>
      </div>
    </div>
    <!-- card测试 -->
    <div @click="handleGoDetail">
      <van-card
        v-for="(card, key) in cards"
        class="good van-hairline--bottom"
        :key="key"
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      >
        <div slot="footer">
          <van-button size="mini">购买</van-button>
        </div>
      </van-card>
    </div>
    <!-- 测试组件 -->
    <h6 class="commpnent">自定义组件测试</h6>
    <os-accordion :items='items' />
    <div v-if="inBrowser" class="footer">
       <van-tabbar>
        <van-tabbar-item @click="handleGo('/pages/index/main')" icon="shop">首页</van-tabbar-item>
        <van-tabbar-item @click="handleGo('/pages/me/main')" icon="gold-coin">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// Use Vuex
import osAccordion from '@/components/accordion'

export default {
  computed: {
    count () {
      return 1
    }
  },
  data () {
    return {
      motto: 'Hello World',
      serValue: '',
      items: [{
        text: 'item1',
        des: '我的item1'
      }, {
        text: 'item2',
        des: '我的item2'
      }, {
        text: 'item3',
        des: '我的item3'
      }, {
        text: 'item4',
        des: '我的item4'
      }],
      discounts: [{}, {}, {}, {}],
      cards: [{}, {}, {}, {}, {}, {}],
      images: [
        '//m.360buyimg.com/mobilecms/jfs/t1/7311/27/1094/92889/5bcd4d95E4e29d1b8/08a137eddb69130e.jpg!cr_1125x549_0_72',
        '//m.360buyimg.com/mobilecms/s1125x690_jfs/t1/6096/40/2438/107321/5bd12167E279de2f0/84f8485900f114df.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ],
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }
  },

  components: {
    osAccordion
  },

  methods: {
    handleGoDetail () {
      const url = '/pages/detail/main'
      this.navigatePageTo(url)
    },
    handleShare () {
      const url = '/pages/share/main'
      this.navigatePageTo(url)
    },
    handleGo (url) {
      this.navigatePageTo(url)
    }
  },

  created () {
    this.showShareMenu()
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  background-color rgba(0,0,0,0.1)
.nav
  display flex
  justify-content space-between
  position fixed
  top 0
  left 0
  width 94%
  padding 0 3%
  z-index 99
.search
  width 100%
.s_ipt
  background transparent!important
.s_ipt /deep/ .van-search
  background transparent!important
.van-card:not(:first-child)
  margin-top 0
.bread
  width 40px
  height 44px
.bread > img
  margin 14px 0 0 15px
  width 20px
  height 18px
.banner_swipe
  width: 100%
.discount
  padding 10px
  background-color #fff
  margin 5px 0
  display flex
  overflow-x auto
.discount_item
  padding 10px 5px
  background-color orange
  color #fff
  font-size 10px
  flex 0 0 150px
  margin-right 5px
.discount_item--money
  font-size 18px
.footer
  padding-top 50px
.pb3
  padding-bottom 3px
.commpnent
  padding 10px
</style>
