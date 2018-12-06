<template>
  <div id="timer">
    <p>Select a time</p>
    <vue-timepicker v-model="timeToPass" format="mm:ss"></vue-timepicker>
    <button @click="findVideo">Go</button>
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
  name: 'timer',
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
    findVideo: function () {
      this.videoLength = this.timeToPass.mm + ':' + this.timeToPass.ss
      console.log(this.videoLength)
    }
  }
}
</script>
