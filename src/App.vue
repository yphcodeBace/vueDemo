<template>
  <div id="app">
    <vheader /> 
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'App',
    components: {
      'vheader': Header
    },
  }
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>
