<template>
  <div>
    <span class="span" :style="{
      'left':item.x,'top':item.y,'width':item.width,'height':item.height,
      'color':item.color,'border':item.border,'text-align':item.textAlign,
      'line-height':item.lineHeight,'border-radius':item.borderRadius
    }" v-for="(item,index) in data" :key="index">{{responseData.user.username}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Label',
    props:{
      data:{
        type: Array,
        default: [],
      },
      responseData:{
        type: Object,
        default: {},
      },
      yph:{
        type: Object,
        default: function () {
          return {}
        },
      }

    },
    mounted () {
      console.log(this.responseData);
    }
  }
</script>

<style scoped>
  .span{
    position: absolute;
    width: 60px;
    height: 60px;
    color: red;
  }
</style>
