<template>
  <div id="timer">
    <p>Select a time</p>
    <vue-timepicker v-model="timeToPass" format="mm:ss"></vue-timepicker>
    <button @click="findVideo">Go</button>

    <p>Video Goes Here</p>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
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
  components: { VueTimepicker, VueYoutube },
  data () {
    return {
      timeToPass: {
        mm: '',
        ss: ''
      },
      videoLength: '',
      videoId: 'lG0Ys-2d4MA',
    }
  },
  methods: {
    setVideoLength () {
      this.videoLength = this.timeToPass.mm + ':' + this.timeToPass.ss
    },
    findVideo () {
      this.setVideoLength()
      if (!this.videoLength) {
        console.log('empty')
      }
    },
    playVideo () {
      this.player.playVideo()
    },
    playing () {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
}
</script>
