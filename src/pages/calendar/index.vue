<template>
  <div>
    <div class="btn" @click="showCalendar">
      <div class="btn-txt">单程日历</div>
    </div>

    <div class="btn btn-margin yellow" @click="showReturnCalendar">
      <div class="btn-txt">往返日历</div>
    </div>

    <div class="panel">
      <div v-if="currentDate" class="text">当前日期: {{currentDate}}</div>
    </div>
    <calendar
      :date-range="dateRange"
      :selected-date="selectedDate"
      :selected-note="selectedNote"
      :is-range="isRange"
      :minibar-cfg="minibarCfg"
      :desc-list="descList"
      @wxcPageCalendarBackClicked="wxcPageCalendarBackClicked"
      @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
      ref="wxcPageCalendar"
    ></calendar>
  </div>
</template>
<script>
  import Calendar from '../../components/calendar/index'

  export default {
    name: 'landing-page',
    data: () => ({
      currentDate: '',
      selectedDate: ['2018-10-23', '2018-10-30'],
      isRange: true,
      dateRange: ['2018-09-10', '2019-09-10'],
      selectedNote: ['出发', '到达', '往返'],
      minibarCfg: {
        title: 'hello日期选择'
      },
      descList: [
        { date: '2018-10-06', value: '￥300' },
        { date: '2018-10-23', value: '￥200' },
        { date: '2018-10-24', value: '￥200' },
        { date: '2018-10-25', value: '￥200' },
        { date: '2018-10-26', value: '￥200' },
        { date: '2018-10-27', value: '￥222' },
        { date: '2018-10-28', value: '￥341' },
        { date: '2018-10-29', value: '￥230' },
        { date: '2018-10-30', value: '￥2000' }
      ]
    }),
    methods: {
      wxcPageCalendarDateSelected (e) {
        this.selectedDate = e.date
        this.currentDate = e.date
      },
      wxcPageCalendarBackClicked () {
      },
      showCalendar () {
        this.isRange = false
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show()
        }, 10)
      },
      showReturnCalendar () {
        this.isRange = true
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show()
        }, 10)
      }
    },
    mounted () {
    },
    components: {Calendar}
  }
</script>
