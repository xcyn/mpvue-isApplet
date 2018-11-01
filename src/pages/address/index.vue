<template>
  <div>
    <div
      v-if="inAlipay"    
    >
      <div class="btn">
        <van-button @click="handleGetAddress" class="button" width='100%' type="primary">从微信获取地址</van-button>
      </div>
      <div class="address">
        <span>地址：</span>{{address}}
      </div>
      <div class="map">
        <map id="map" 
          longitude="113.324520" 
          latitude="23.099994" 
          scale="14" 
          :controls="controls" 
          :markers="markers" 
          :polyline="polyline" 
          @regionchange="regionchange" 
          @begin="regionChangeBegin" 
          @end="regionChangeEnd"
          show-location 
          style="width: 100%; height: 300px;"></map>
      </div>
      <div class="btn">
        <van-button @click="handleOk" class="button" width='100%' type="primary">确定</van-button>
      </div>
    </div>
    <!-- H5 -->
    <van-address-edit
      v-if="inBrowser"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @change-detail="onChangeDetail"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import addressList from './address.js'

export default {
  components: {
  },

  data () {
    return {
      areaList: addressList,
      searchResult: [],
      markers: [{
        iconPath: '/resources/others.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: '/resources/location.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }],
      address: ''
    }
  },
  methods: {
    handleBack () {
      this.backPageTo()
    },
    handleOk () {
      const url = '/pages/index/main'
      this.navigatePageTo(url)
    },
    onChangeDetail () {},
    regionchange (e) {
      console.log(e.type)
    },
    regionChangeBegin (e) {
      console.log(e.markerId)
    },
    regionChangeEnd (e) {
      console.log(e.controlId)
    },
    handleGetAddress () {
      // 获取地址
      this.WXP.chooseAddress().then((res) => {
        const { provinceName, countyName, cityName, detailInfo } = res
        this.address = `${provinceName}${countyName}${cityName}${detailInfo}`
      })
    },
    handleDelete () {
      const url = '/pages/index/main'
      this.navigatePageTo(url)
    }
  },

  created () {
    this.showShareMenu()
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.btn
  padding 25px 10px 10px 10px
  font-size 12px
.map
  padding 0 10px
.address
  font-size 12px
  padding 10px
.button /deep/ .van-button
  width 100%

</style>
