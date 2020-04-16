<template>
  <div class="Homestay">
      <div class="left">
        <i @click="arrowClick('right')" v-if="arrowShow" class="el-icon-arrow-right arrow"></i>
        <i @click="arrowClick('left')" v-if="!arrowShow" class="el-icon-arrow-left arrow"></i>
        <p class="title-p">房间状态</p>
        <!-- 跑马灯 -->
        <el-carousel :autoplay="false" height='50px' indicator-position="none" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <!-- <h3>{{ item }}</h3> -->
                <div class="dateDiv">
                    <div>周一</div>
                    <div>周二</div>
                    <div>周三</div>
                    <div>周四</div>
                    <div>周五</div>
                    <div>周六</div>
                    <div>周日</div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <!-- 搜索条件 -->
        <div class="fliter">
            <div class="fliter-l">
                <div>入住8间</div>
                <div>预定8间</div>
                <div>空房8间</div>
                <div>房间异常6间</div>
            </div>
            <div class="fliter-r">
                <el-input v-model="input" placeholder="输入房间号搜索"></el-input>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <!-- 房间列表 -->
        <div class="roomList">
            <div>
                <div class="round">101</div>
                <div>标准间</div>
                <div><i class="el-icon-user"></i><span>A,B 2人</span></div>
                <div class="btns">
                    <div>入住详情</div>
                    <div>房间详情</div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div v-if="showRight" class="right">
          
      </div>
    <!-- <p
        v-for="(item,index) in pData" 
        :key="index"
        @click="pClick(item)"
    >
        {{item.name}}
    </p> -->
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
                arrowShow:true,
                showRight:true,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods:{
            pClick(item){
                console.log(item)
            },
            arrowClick(a){
                console.log(a)
                if(a=='right'){
                    this.arrowShow=false
                    this.showRight=false
                }else{
                    this.arrowShow=true
                    this.showRight=true
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Homestay{
        /* border: 1px solid red; */
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .left,.right{
        height: 90vh;
    }
    .left{
        padding: 10px;
        border: 1px solid red;
        position: relative;
        flex: 4;
        margin-right: 25px;
    }
    .right{
        flex: 1;
        border: 1px solid green;
    }
    .arrow{
        position: absolute;
        right: -2.5%;
        top: 49%;
        font-size: 30px;
        cursor: pointer;
    }
    /* 箭头 */
    /* .right::before{
        content: '';
        position: absolute;
        top: 0;
        left: -10px;
        height: 0;
        width: 0;
        border: 10px solid transparent;
        border-left: 10px solid red;
    } */
    .title-p{
        padding: 0;
        font-size: 20px;
        font-weight: 500;
        text-align: left;
        margin: 0 0 10px 0;
    }
    /* 跑马灯 */
    .left >>> .el-carousel__container{
        /* height: 60px; */
        /* border: 1px solid red; */
    }
    .el-carousel__item:nth-child(2n) {
        /* height: 60px; */
        /* background-color: #99a9bf; */
    }
    .el-carousel__item:nth-child(2n+1) {
        /* background-color: #d3dce6; */
        /* height: 60px; */
    }
    /* 日期 */
    .dateDiv{
        border: 1px solid grey;
        border-right: none;
        border-left: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 3px 10%;
    }
    .dateDiv div{
        border: 1px solid grey;
        border-top: none;
        border-bottom: none;
        flex: 1;
        /* width: 200px; */
        height: 40px;
        line-height: 40px;
        cursor: pointer;
    }
    .active{
        background: #92DCFF;
        color: #FFF;
    }
    /* 搜索条件 */
    .fliter{
        /* border: 1px solid red; */
        margin: 30px 0;
        display: flex;
        flex-direction: row;
    }
    .fliter > div{
        flex: 1;
        /* border: 1px solid green; */
    }
    .fliter-l{
        margin-right: 10%;
        display: flex;
        align-items: center;
    }
    .fliter-l div{
        flex: 1;
        border: 1px solid red;
        margin-right: 30px;
        height: 30px;
        line-height: 30px;
    }
    .fliter-r{
        display: flex;
        /* border: 1px solid black; */
        justify-content:flex-end;
    }
    /* 输入框 */
    .el-input{
        width: 50%;
        margin-right: 30px;
    }
    /* 房间列表 */
    .roomList{
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .roomList > div{
        position: relative;
        overflow: hidden;
        border: 1px solid red;
        width: 160px;
        height: 160px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        background: #FFE497;
        justify-content: center;
        /* align-items: center; */
    }
    .round{
        position: absolute;
        box-sizing: border-box;
        left: -10px;
        top: -10px;
        width: 50px;
        height: 50px;
        padding-right: 10px;
        background: #FF9C00;
        border-radius: 50%;
        text-align: right;;
        line-height: 55px;
        color: #FFF;
    }
    .roomList > div > div{
        border: 1px solid red;
        flex: 1;
        /* align-items: center; */
    }
    .btns{
        /* border: 1px solid red; */
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .btns>div{
        border: 1px solid green;
        width: 45px;
        height: 45px;
        margin-left: 10px;
    }
</style>
