<template>
  <div id="app">
    <h1>Youtube Cooking Timer</h1>
    <router-view/>
    <router-link to="/about">What is this?</router-link>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {
    videoLength: String
  },
  methods: {
    findVideo () {
      if (!this.videoLength) {
        return
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
