<template>
  <div>
      <p>p1111</p>
      <!-- <p>2222</p> -->
      <div class="div1">div</div>
      <div class="left">
          left
      </div>
      <div class="right">
          right
      </div>
  </div>
</template>

<script>
  export default {
    name: 'BFC',
    mounted(){

    },
    data(){
      return {
        msg:[{sex: '女', name: '美女'}],
        name:'',
        sex:'',
      }
    },
    methods: {
      add(){

      }
    },
    watch: {
      msg: {
        handler(newName,oldName){
          console.log(newName,oldName)
        }
      },
      immediate: true,//immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。
      deep: true,//当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听
    },
  }
</script>

<style scoped>
    p{
        margin: 30px;
        border: 1px solid red;
    }
    .div1{
        margin: 30px;
        border: 1px solid green;
    }
    .left{
        width: 200px;
        height: 300px;
        background: chartreuse;
        float: left;
        margin-right: 30px;
    }
    .right{
        overflow: hidden;
        height: 500px;
        background: cornflowerblue;
    }
</style>
