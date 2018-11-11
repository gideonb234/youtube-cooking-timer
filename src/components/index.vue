<template>
  <div id="timer">
    <p>Select a time</p>
    <vue-timepicker v-model="timeToPass" @change="findVideo" format="mm:ss"></vue-timepicker>
  </div>
</template>

<style>
  .time-picker .dropdown .select-list .hours {
    display: none;
  }
</style>

<script>
import VueTimepicker from 'vue2-timepicker'

export default {
  name: 'index',
  components: { VueTimepicker },
  data () {
    return {
      timeToPass: {
        mm: '',
        ss: ''
      }
    }
  },
  methods: {
    findVideo: function (eventData) {
      let minutes = '00'
      let seconds = '00'
      if (eventData.data.ss) {
        seconds = eventData.data.ss
      }
      if (eventData.data.mm) {
        minutes = eventData.data.mm
      }
      let time = minutes + seconds
      console.log(time)
    }
  }
}
</script>
