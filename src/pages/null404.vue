<template>
  <div class="noPermission">
    <div class="info">
        <p><router-link :to="{path:'/Index'}">去首页</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'noPermission',
  }
</script>

<style scoped>
    h1{
        margin: 0;
        padding: 0;
        color: #FFF;
    }
    .noPermission{
        height: 100%;
        background: url('../assets/images/404.jpg') no-repeat center center;
        background-size: 100% 100%;
        overflow: hidden;
        /* border: 1px solid red; */
        /* padding: 10px; */
    }
    .info{
        margin-top: 500px;
    }
    .info a{
        color: turquoise;
    }
</style>
