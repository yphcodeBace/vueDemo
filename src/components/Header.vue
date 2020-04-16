<template>
    <div class="head-wrap">
      <div class="left">个人信息管理平台</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div class="right">
        <el-dropdown>
            <span class="el-dropdown-link">
                切换<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
                <!-- <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
        </el-dropdown-menu>
        </el-dropdown>
        <img src="@/assets/logo.png">
        <span>欢迎燕培浩</span>
        <span>|</span>
        <span style="cursor: pointer"><i class="el-icon-circle-close"></i> 退出</span>
      </div>
    </div>
</template>

<script>

  export default {
    // ...
    data(){
        return{
            input:'',
        }
    },
    computed: {

    },
    mounted() {

    },
    methods:{

    },

  }

</script>

<style scoped>
    .head-wrap{
        /* border: 1px solid red; */
        height: 60px;
        /* line-height: 60px; */
        margin-bottom: 5px;
        background: #00B4FF;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }
    .head-wrap div{
        /* flex: 1; */
        /* border: 1px solid red; */
    }
    .left{
        font-size: 30px;
        color: #FFFFFF;
        font-weight: 500;
    }
    .right{
        color: #FFFFFF;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .right img{
        background: #FFFFFF;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .right span{
        margin-right: 20px;
    }
    /* 下拉菜单 */
    .el-dropdown{
        font-size: 18px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #FFF;
    }
    .el-icon-arrow-down {
        font-size: 16px;
        color: #FFFFFF;
    }
    /* 输入框 */
    .el-input{
        width: 15%;
        border-radius: 25px;
        overflow: hidden;
        height: 30px;
    }
    .el-input >>> .el-input__inner{
        height: 30px !important;
    }
</style>
