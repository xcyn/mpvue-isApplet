<template>
  <div class="wxc-page-calendar" ref="pageCalendar" :style="calendarExtendStyle">
    <div @click="minibarLeftButtonClick" :style="{backgroundColor: minibarCfg.backgroundColor, color: minibarCfg.textColor}">{{minibarCfg.title}}</div>
    <div class="calendar-weekday" v-if="isShow">
      <span class="flex-item weekday-text"
            v-for="(week,k) in ['日','一','二','三','四','五','六']"
            :key="k"
            :aria-label="'周' + week"
            >{{week}}</span>
    </div>
    <div class="calendar-list"
          v-if="isShow">
      <div v-for="(month,index) in monthsArray"
            :key="index"
            :class="[!month.title && 'calendar-row']">
        <div class="month-text"
              v-if="month.title">{{month.title}}</div>
        <template v-else>
          <span
                v-for="(cell,rowIndex) in month"
                :key="index + '-' + rowIndex"
                :ref="cell.ref"
                :class="['row-item', cell.cellClass]"
                :aria-label=" cell.text || '' +','+ cell.note || '' +','+  cell.ext || ''"
                @click="onClickDate(cell)">
            <span :class="['calendar-note', cell.cls]">{{cell.note}}</span>
            <span :class="['calendar-day', cell.cls]">{{cell.text}}</span>
            <span :class="['calendar-ext', cell.cls]">{{cell.ext}}</span>
          </span>
        </template>
      </div>
      <span class="iphone-x" v-if="isIPhoneX"></span>
    </div>
  </div>
</template>

<script>
  import * as Format from './format'

  const isWeb = true

  export default {
    props: {
      selectedDate: Array,
      animationType: {
        type: String,
        default: 'push'
      },
      dateRange: {
        type: Array,
        required: true,
        default: () => ([])
      },
      minibarCfg: {
        type: Object,
        default: () => ({
          'title': '选择日期',
          'backgroundColor': '#FFC900',
          'textColor': '#3D3D3D'
        })
      },
      // 原生功能
      showHeader: {
        type: Boolean,
        default: false
      },
      selectedNote: {
        type: Array,
        default: () => (['开始', '到达', '往返'])
      },
      isRange: {
        type: Boolean,
        default: false
      },
      needDestroy: {
        type: Boolean,
        default: false
      },
      descList: {
        type: Array,
        default: () => ([])
      }
    },
    data: () => ({
      isShow: false,
      reSelect: true,
      today: Format.getToDay(),
      departDate: '',
      arriveDate: ''
    }),
    computed: {
      calendarExtendStyle () {
        // return Utils.uiStyle.pageTransitionAnimationStyle(this.animationType)
      },
      monthsArray () {
        const { dateRange: range, today, departDate, arriveDate, selectedNote, descList } = this
        const param = { range, today, departDate, arriveDate, selectedNote, descList }
        return Format.generateDateCell(param)
      }
    },
    created () {
      // this.isIPhoneX = Utils.env.isIPhoneX();
      this.isIPhoneX = false
      this.showTitle = isWeb || this.showHeader
      this.detectShow()
    },
    mounted () {
      const { needDestroy } = this
      const hold = isWeb ? 700 : 100
      !needDestroy && setTimeout(() => {
        this.isShow = true
        this.scrollToDate()
      }, hold)
    },
    watch: {
      needDestroy (newVal, preVal) {
        console.log(222, newVal, preVal)
        if (!newVal && newVal !== preVal) {
          setTimeout(() => {
            this.isShow = true
          }, 200)
        }
      }
    },
    methods: {
      minibarLeftButtonClick () {
        setTimeout(() => {
          this.hide()
          this.$emit('wxcPageCalendarBackClicked', {})
        }, 100)
      },
      onClickDate (datConfig) {
        const self = this
        if (datConfig.disabled || datConfig.isEmpty) return
        if (self.reSelect) {
          self.departDate = ''
          self.arriveDate = ''
          self.reSelect = false
        }

        if (self.isRange) {
          if (self.departDate && Date.parse(self.departDate) <= Date.parse(datConfig.date)) {
            // 不触发show方法依旧可以重选出发日期
            self.reSelect = true
            self.arriveDate = datConfig.date
          } else {
            self.departDate = datConfig.date
          }
          if (self.departDate && self.arriveDate) {
            self.dispatchDateChange([self.departDate, self.arriveDate])
          }
        } else {
          self.departDate = datConfig.date
          self.dispatchDateChange([self.departDate])
        }
      },
      scrollToDate () {
        setTimeout(() => {
          if (this.departDate) {
            // const el = this.$refs.departDate[0]
            console.log('滑动到指定日期')
            // 交给dom做不同运行环境不同处理
            // el && dom.getComponentRect && dom.getComponentRect(el, (e) => {
            //   if (e && e.result) {
            //     const { bottom } = e.size;
            //     const { env } = weex.config;
            //     // 误差
            //     const height = env.deviceHeight / env.deviceWidth * 750 - 50;
            //     if (bottom > height || bottom === 0) {
            //       dom.scrollToElement(el, { offset: -146, animated: false });
            //     }
            //   }
            // })
          }
        }, 10)
      },
      dispatchDateChange (dateArr) {
        const duration = isWeb ? 400 : 600
        setTimeout(() => {
          this.hide()
        }, duration)
        this.$emit('wxcPageCalendarDateSelected', {
          date: dateArr
        })
      },
      detectShow () {
        if (this.isRange && this.selectedDate.length >= 2) {
          this.departDate = this.selectedDate[0]
          this.arriveDate = this.selectedDate[1]
        } else if (this.selectedDate.length >= 1) {
          this.departDate = this.selectedDate[0]
          this.arriveDate = ''
        }
      },
      _animate (status, callback = null) {
        // var ref = this.$refs.pageCalendar
        // 动画
        if (this.animationType === 'push') {
          // Utils.animation.pageTransitionAnimation(ref,`translateX(${status ? -750 : 750}px)`,status,callback)
        } else if (this.animationType === 'model') {
          // Utils.animation.pageTransitionAnimation(ref,`translateY(${status ? -Utils.env.getScreenHeight() : Utils.env.getScreenHeight()}px)`,status,callback)
        }
      },
      show () {
        const { needDestroy } = this
        needDestroy && (this.isShow = true)
        this.reSelect = true
        this.detectShow()
        this._animate(true)
        needDestroy && this.scrollToDate()
      },
      hide () {
        // console.log('隐藏日历')
        this.needDestroy && (this.isShow = false)
        // this.reSelect = false
        this._animate(false)
        this.$emit('wxcPageCalendarHide', {})
      }
    }
  }
</script>
<style scoped>
  .wxc-page-calendar {
    text-align: center;
    width: 375px;
    color: #333333;
    background-color: #ffffff;
  }

  .flex-item {
    flex: 1;
    text-align: center;
  }

  .calendar-weekday {
    display: flex;
    height: 30px;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-color: #e2e2e2;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .weekday-text {
    color: #000000;
    flex: 1;
    font-size: 12px;
    text-align: center;
  }

  .calendar-list {
    flex: 1;
  }

  .month-text {
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    width: 375px;
    text-align: center;
    align-items: center;
    background-color: #f2f3f4;
  }

  .calendar-row {
    display: flex;

    height: 70px;
    flex-direction: row;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-color: #f2f3f4;
    align-items: center;
    justify-content: space-between;
  }

  .row-item {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex: 1;
    height: 70px;
    padding-top: 5px;
    padding-bottom: 5px;
    justify-content: center;
    align-items: center;
  }

  .iphone-x {
    height: 34px;
  }

  .calendar-note {
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #000000;
    text-align: center;
  }

  .calendar-day {
    height: 24px;
    line-height: 24px;
    font-size: 13px;
    color: #000000;
    text-align: center;
  }

  .calendar-ext {
    height: 13px;
    line-height: 13px;
    color: #999999;
    text-align: center;
    font-size: 12px;
    text-overflow: ellipsis;
  }

  .calendar-holiday {
    color: #FF5000;
  }

  .calendar-work {
    color: black;
  }

  .calendar-rest {
    color: #FF5000;
  }

  .item-row-selected {
    color: #ffffff;
    background-color: #FFC900;
    text-align: center;
  }

  .item-text-selected {
    color: #3d3d3d;
    text-align: center;
  }

  .calendar-disabled {
    color: #CCCCCC;
  }

  .cell-disabled {
    background-color: #FBFBFB;
  }

  .calendar-day-include {
    background-color: #FFF7D6;
  }
</style>
