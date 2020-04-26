<template>
    <div class="indexPage">
      <!-- <Breadcrumb /> -->
      <component v-for="(item,index) in componentData"
                 :key="index"
                 :is="item.component"
                 :responseData="responseData"
                 :data="item.itemData"
                 v-if="JSON.stringify(responseData)!='{}'">
      </component>
    </div>
</template>

<script>
  // import Breadcrumb from '@/pages/Breadcrumb'
  import  axios from '@/http/axios'
  import  { getUserInfo } from '@/http/api'
  let labelJson = require('../json/label.json')
  console.log(labelJson);
  export default {
    name: 'Index',
    data(){
      return{
        // items:labelJson.item,
        componentData:[],
        responseData:{},
      }
    },
    // components:{
    //   Breadcrumb:Breadcrumb
    // },
    created(){
      let vm = this
      //调接口
      getUserInfo().then(data=>{
        console.log(data);
        vm.responseData=data;
        // vm.responseData=JSON.parse(JSON.stringify(vm.responseData))
        console.log(vm.responseData);
      })
      for (let i = 0; i <labelJson.item.length ; i++) {
        // let type = labelJson.item[i].type == 'Label' ?'Label':'Button';
        this.componentData.push({
          // type:type,
          itemData:labelJson.item[i].data,
          component: ()=>import(`../components/${labelJson.item[i].type}`)
        })
      }
    },
    watch:{
      responseData(){
        console.log(this.responseData);
      }
    },
    methods:  {
      getData(){

      }
    },
  }
</script>

<style scoped>
  .indexPage{
    position: relative;
    /*border: 1px solid red;*/
  }
</style>
