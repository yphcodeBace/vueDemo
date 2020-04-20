<template>
  <div>
    <button class="button" :style="{
      'left':item.x,'top':item.y,'width':item.width,'height':item.height,'background-color':item.backgroundColor,
      'color':item.color,'border':item.border,'text-align':item.textAlign,
      'line-height':item.lineHeight,'border-radius':item.borderRadius
    }" v-for="(item,index) in data" :key="index">{{responseData.user.username}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      data:{
        type: Array,
        default: [],
      },
      responseData:{
        type: Object,
        default: {},
      }
    },
    // data(){
    //   return{
    //     yphData:[],
    //   }
    // },
    // watch: {
    //   yphData(){
    //     console.log(this.responseData);
    //   }
    // },
    mounted () {
      console.log(this.responseData);
    }
  }
</script>

<style scoped>
  .button{
    width: 60px;
    height: 32px;
    position: absolute;
  }
</style>
