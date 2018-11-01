<template>
  <div>
    <!-- 轮播方案测试 -->
    <div class="banner_swipe">
      <van-swipe v-if="inBrowser" :width='375' :autoplay="1500">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>
      <div v-else>
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(image, index) in images" :index="index" :key="index">
              <swiper-item>
                  <image :src="image" class="slide-image" mode="aspectFill"/>
              </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="good_introduce">
      <div class="title">商品介绍</div>
      <div class="des">双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销双11促销</div>
      <div class="img">
        <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/497/8/13056/156449/5bd5144eEfae50b10/423e528e17f90109.jpg!q80.dpg.webp" alt="">
      </div>
    </div>
    <!-- 提交栏 -->
    <van-goods-action v-if="inBrowser">
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickIcon" />
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickIcon" />
      <van-goods-action-big-btn text="加入购物车" @click="onClickButton" />
      <van-goods-action-big-btn text="立即购买" @click="onClickButton" primary />
    </van-goods-action>
    <van-goods-action v-else>
      <van-goods-action-icon
        icon="chat"
        text="客服"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart"
        text="购物车"
        @click="onClickIcon"
      />
      <van-goods-action-button
        text="加入购物车"
        type="warning"
        @click="onClickButton"
      />
      <van-goods-action-button
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import osAccordion from '@/components/accordion'

export default {
  components: {
    osAccordion
  },

  data () {
    return {
      images: [
        '//pt-starimg.didistatic.com/static/starimg/img/152569695803590v6mDFhjjUHpW1IVMt.png',
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t21982/1/1307467166/242338/6f78fd7b/5b24ef9fNf286d6d0.jpg!q80.dpg.webp'
      ]
    }
  },
  methods: {
    handleBack () {
      this.backPageTo()
    },
    handlegoWebView () {
      const url = '/pages/web-view/main'
      this.navigatePageTo(url)
    },
    onClickIcon () {
      console.log('点击图标')
    },
    onClickButton () {
      const url = '/pages/address/main'
      this.navigatePageTo(url)
    }
  },

  created () {
    this.showShareMenu()
  }

}
</script>

<style scoped>
.banner_swipe {
  width: 375px;
}
.swiper {
  height: 300px;
}
.good_introduce {
  font-size: 15px;
  padding: 10px 5px
}
.title {
  padding: 0 8px;
  font-weight: 700
}
.des {
  font-size: 10px;
  padding: 5px
}
.img {
  width: 375px;
  height: 350px;
}
</style>
