<template>
  <div class="accordion">
    <div v-for="( data, key) in datas" :key="key">
      <div class="item" @click="handleShow(key)">
        {{ data.text }}
      </div>
      <div class="description" v-if="data.show">
        {{ data.des }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
const Accordions = {
  name: 'os-accordion',
  props: {
    items: {
      type: Array,
      default: []
    },
    des: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      datas: null
    }
  },
  methods: {
    handleShow (key) {
      let copyDatas = _.cloneDeep(this.datas)
      copyDatas[key].show = !copyDatas[key].show
      this.datas = copyDatas
    }
  },
  created () {
    const { items } = this
    if (items.length > 0) {
      this.datas = _.cloneDeep(items)
      this.datas[0].show = true
    }
  }
}
export default Accordions
</script>

<style scoped>
.accordion {
  padding: 10px;
  background: #fff;
}
.item {
  padding: 10px 5px;
  border: 1px solid rgba(0,0,0,0.2)
}
.description {
  padding: 30px 10px;
  border: 1px solid rgba(43, 150, 33, 0.8)
}
</style>
