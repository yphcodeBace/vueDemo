<template>
  <div class="Homestay">
      <div class="left">
        <i @click="arrowClick('right')" v-if="arrowShow" class="el-icon-arrow-right arrow"></i>
        <i @click="arrowClick('left')" v-if="!arrowShow" class="el-icon-arrow-left arrow"></i>
        <p class="title-p">房间状态</p>
        <!-- 跑马灯 -->
        <el-carousel :autoplay="false" height='50px' indicator-position="none" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="dateDiv">
                    <div>周一</div>
                    <div class="dateActive">周二</div>
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
                <div class="rz">入住8间</div>
                <div class="yd">预定8间</div>
                <div class="kf">空房8间</div>
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
            <div v-for="(item,index) in roomListData" :key="index" :class="{ 'yellow-Div': item.key=='yellow', 'blue-Div': item.key=='blue', 'gray-Div': item.key=='gray' }">
                <div class="round">101</div>
                <div>标准间</div>
                <div>
                    <i v-if="item.key!='gray'" class="el-icon-user"></i>
                    <span v-if="item.key!='gray'">{{item.key=='yellow'?'a,b 两人':'已预订'}}</span>
                    <span v-if="item.key=='gray'">空房</span>
                </div>
                <div class="btns">
                    <div v-if="item.key!='gray'">{{item.key=='yellow'?'入住详情':'预定详情'}}</div>
                    <div v-if="item.key!='gray'">房间详情</div>
                </div>
            </div>
        </div>
      </div>
      <div v-if="showRight" class="right">
          
      </div>
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
                value: '',
                input:'',
                roomListData:[
                    {key:"yellow"},{key:"blue"},{key:"yellow"},{key:"yellow"},{key:"gray"},{key:"blue"},{key:"yellow"},{key:"blue"},
                    {key:"blue"},{key:"gray"},{key:"gray"},{key:"yellow"},{key:"blue"},{key:"gray"},{key:"yellow"},{key:"gray"},
                    {key:"yellow"},{key:"blue"},{key:"blue"},{key:"gray"},{key:"yellow"},{key:"yellow"},{key:"blue"},{key:"yellow"},
                ]
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
    @import "../assets/css/Homestay.css";
    
</style>
