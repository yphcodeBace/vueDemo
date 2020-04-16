<template>
  <div class="Homestay">
    <p
        v-for="(item,index) in pData" 
        :key="index"
        @click="pClick(item)"
    >
        {{item.name}}
    </p>
  </div>
</template>

<script>
    export default {
        name: 'Homestay',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                pData:[
                    {name:'黄金糕3',id:'1'},
                    {name:'狮子头3',id:'2'},
                    {name:'螺蛳粉3',id:'3'},
                ],
            }
        },
        methods:{
            pClick(item){
                console.log(item)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Homestay{
        border: 1px solid red;
        margin: 10px;
    }
</style>
