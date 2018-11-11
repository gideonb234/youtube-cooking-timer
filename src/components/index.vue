<template>
  <div id="timer">
    <p>Select a time</p>
    <vue-timepicker v-on="findVideo" v-model="timeToPass" format="mm:ss"></vue-timepicker>
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
        mm: '10',
        ss: '00'
      }
    }
  },
  findVideo: function (time) {
    console.log(time)
  }
}
</script>
