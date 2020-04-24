<template>
  <div class="Breadcrumb">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadcrumb" :key="item.name">{{item.name}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/Homestay">民宿</a></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Str' }">Str</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Breadcrumb' }">Breadcrumb</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
        return{
            routerData:[],
        }
    },
    computed:{
        breadcrumb(){
            return  this.$route.meta.breadcrumb;
        }
    },
    // methods:{
    //     fetchDate(data){
    //         console.log('data',data);
    //         this.routerData =  data.meta ? data.meta : '';
    //     }
    // },
    // watch:{
    //     "$route": "fetchDate"
    // },
    // mounted(){
    //     this.routerData =  this.$route.meta.breadcrumb ? this.$route.meta.breadcrumb : '';
    // }
  }
</script>

<style scoped>
    .Breadcrumb{
        border: 1px solid red;
        padding: 10px;
    }
</style>
