<template>
    <div class="head-wrap">
      <div class="left">个人信息管理平台</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div class="right">
        <el-dropdown>
            <span class="el-dropdown-link">
                {{selected}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                 v-for="(item,index) in selectData" 
                 :key="index"
                 @click.native="menuClick(item)"
                >
                    {{item.name}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <img src="@/assets/logo.png">
        <span>欢迎 燕培浩</span>
        <span>|</span>
        <!-- <span style="cursor: pointer"></span> -->
        <el-button type="text" @click="open"><i class="el-icon-circle-close"></i> 退出</el-button>
      </div>
    </div>
</template>

<script>

  export default {
    // ...
    data(){
        return{
            input:'',
            selected:'上海',
            selectData:[
                {name:'上海',id:'1'},
                {name:'北京',id:'2'},
                {name:'广州',id:'3'},
            ]
        }
    },
    computed: {

    },
    mounted() {

    },
    methods:{
        menuClick(item){
            // console.log(item)
            this.selected = item.name
        },
        open() {
            this.$confirm('此操作将退出当前登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        }
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
    .el-button--text{
        color: #FFFFFF;
        font-size: 16px;
    }
</style>
