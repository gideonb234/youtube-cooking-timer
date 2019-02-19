<template>
  <div id="timer">
    <p>Select a time</p>
    <vue-timepicker v-model="timeToPass" format="mm:ss"></vue-timepicker>
    <button @click="findVideo">Go</button>

    <p>Video Goes Here</p>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
  </div>
</template>

<style>
  .time-picker .dropdown .select-list .hours {
    display: none;
  }
</style>

<script>
import VueTimepicker from 'vue2-timepicker'
import searchYoutube from 'youtube-api-v3-search'

export default {
  name: 'timer',
  components: { VueTimepicker },
  data () {
    return {
      timeToPass: {
        mm: '',
        ss: ''
      },
      videoLength: '',
      videoId: 'b1meYzG4lvc',
      options: {
        q: '',
        part: 'snippet',
        type: 'video'
      }
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
      this.options.q = this.videoLength
      let results = this.youtubeApiSearch()
      results.then((items) => {
        console.log({items: items})
        if (items.length > 0) {
          console.log(items[0].id.videoId)
          this.videoId = items[0].id.videoId
        }
      }, () => { return null })
      return null
    },
    playVideo () {
      this.player.playVideo()
    },
    playing () {
      console.log('video playing')
    },
    youtubeApiSearch () {
      const YOUTUBE_API_KEY = 'get your own damn key'
      return searchYoutube(YOUTUBE_API_KEY, this.options).then((result) => {
        console.log('success')
        return result.items
      }, (error, result) => {
        console.log('fail')
        console.log(error)
        console.log(result)
        return null
      })
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
}
</script>
