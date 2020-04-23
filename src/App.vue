<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <vheader @click.native="headerClick" /> 
      <router-view/>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'App',
    components: {
      'vheader': Header
    },
    methods:{
      headerClick(){
        console.log('headerCLick')
      }
    }
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
    overflow-x: hidden;
    height: 100vh;
  }
</style>
