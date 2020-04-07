<template>
    <div class="indexPage">
<!--      <Label :yph="responseData"></Label>-->
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
  import Label from '../components/Label'
  import Button from '../components/Button'
  import  axios from '@/http/axios'
  import  { getUserInfo } from '@/http/api'
  let labelJson = require('../json/label.json')
  console.log(labelJson);
  export default {
    name: 'Index',
    // components: {
    //   Label: Label,
    //   Button: Button,
    // },
    data(){
      return{
        // items:labelJson.item,
        componentData:[],
        responseData:{},
      }
    },
    // components:{
    //   Label:Label
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
        // let vm = this
        // axios.get('http://101.230.217.205:8082/customer/api/itsm/v1/itsmDicRel/getCurrentUserInfo')
        //   .then(function (response) {
        //     console.log(response);
        //     // vm.responseData=data;
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     // vm.answer = 'Error! Could not reach the API. ' + error
        //   })
      }
    },
    mounted(){
      console.log(this.componentData);
    },
  }
</script>

<style scoped>
  .indexPage{
    position: relative;
    /*border: 1px solid red;*/
  }
</style>
