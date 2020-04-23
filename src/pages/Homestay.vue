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
                <el-input v-model="input" @input="inpChange" placeholder="输入房间号搜索"></el-input>
                <el-select v-model="value" @change="selectChange" placeholder="请选择">
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
            <div v-for="(item,index) in filterRoomListData" :key="index" :class="{ 'yellow-Div': item.key=='yellow', 'blue-Div': item.key=='blue', 'gray-Div': item.key=='gray' }">
                <div class="round">{{item.num}}</div>
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
        <div class="r-top">
            <div :class="{'selected-y':this.selectText=='入住'}" @click="selected('入住')">入住</div>
            <div :class="{'selected-y':this.selectText=='预定'}" @click="selected('预定')">预定</div>
            <div :class="{'selected-y':this.selectText=='退房/续租'}" @click="selected('退房/续租')">退房/续租</div>
        </div>
        <div class="detailsTitle">
            {{this.detailsTitle}}
        </div>
        <div style="overflow-y:scroll;height:700px">
            <div class="r-list" v-for="(item,index) in rightListData" :key="index">
                <div class="img-div">
                    <img v-if="item.type=='标准间'" src="@/assets/images/bzj.jpg" alt="">
                    <img v-if="item.type=='大床房'" src="@/assets/images/dcf.jpg" alt="">
                    <img v-if="item.type=='套房'" src="@/assets/images/tf.jpg" alt="">
                </div>
                <div class="r-list-right">
                    <div><span>{{item.num}}</span><span class="ml20">{{item.type}}</span></div>
                    <div>{{item.details}}</div>
                    <div><button class="xz">续住</button><button class="tf">退房</button></div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'Homestay',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                selectText:'退房/续租',
                detailsTitle:'已入住房间',
                arrowShow:true,
                showRight:true,
                options: [{
                    value: '1',
                    label: '标准间'
                }, {
                    value: '2',
                    label: '大床房'
                }, {
                    value: '3',
                    label: '套房'
                }],
                value: '',
                input:'',
                roomListData:[
                    {key:"yellow",num:"203"},{key:"blue",num:"102"},{key:"yellow",num:"302"},{key:"yellow",num:"102"},{key:"gray",num:"501"},
                    {key:"blue",num:"102"},{key:"yellow",num:"302"},{key:"blue",num:"102"},
                    {key:"blue",num:"308"},{key:"gray",num:"783"},{key:"gray",num:"138"},{key:"yellow",num:"509"},{key:"blue",num:"102"},
                    {key:"gray",num:"039"},{key:"yellow",num:"603"},{key:"gray",num:"102"},
                    {key:"yellow",num:"102"},{key:"blue",num:"102"},{key:"blue",num:"609"},{key:"gray",num:"302"},{key:"yellow",num:"102"},
                    {key:"yellow",num:"109"},{key:"blue",num:"452"},{key:"yellow",num:"209"},
                ],
                filterRoomListData:[
                    {key:"yellow",num:"203"},{key:"blue",num:"102"},{key:"yellow",num:"302"},{key:"yellow",num:"102"},{key:"gray",num:"501"},
                    {key:"blue",num:"102"},{key:"yellow",num:"302"},{key:"blue",num:"102"},
                    {key:"blue",num:"308"},{key:"gray",num:"783"},{key:"gray",num:"138"},{key:"yellow",num:"509"},{key:"blue",num:"102"},
                    {key:"gray",num:"039"},{key:"yellow",num:"603"},{key:"gray",num:"102"},
                    {key:"yellow",num:"102"},{key:"blue",num:"102"},{key:"blue",num:"609"},{key:"gray",num:"302"},{key:"yellow",num:"102"},
                    {key:"yellow",num:"109"},{key:"blue",num:"452"},{key:"yellow",num:"209"},
                ],
                rightListData:[
                    {type:'标准间',num:'301',details:'A,B两人',status:'退房/续住'},
                    {type:'套房',num:'203',details:'C,D两人',status:'退房/续住'},
                    {type:'大床房',num:'105',details:'AD,D两人',status:'退房/续住'},
                    {type:'套房',num:'104',details:'SC,V两人',status:'退房/续住'},
                    {type:'标准间',num:'103',details:'ADC两人',status:'退房/续住'},
                    {type:'大床房',num:'301',details:'A王两人',status:'退房/续住'},
                    {type:'标准间',num:'201',details:'C王两人',status:'退房/续住'},
                    {type:'套房',num:'101',details:'B3两人',status:'退房/续住'},
                    {type:'标准间',num:'202',details:'RF王两人',status:'退房/续住'},
                ],
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
            },
            selected(text){
                if(text=='入住'){
                    this.selectText = '入住';
                    this.detailsTitle = '已入住房间';
                }else if(text=='预定'){
                    this.selectText = '预定';
                    this.detailsTitle = '已预定房间';
                }else{
                    this.selectText = '退房/续租';
                    this.detailsTitle = '已入住房间';
                }
            },
            // 房间号搜索
            inpChange(){
                // console.log(this.input);
                this.filterRoomListData = this.roomListData.filter((item)=>{
                    return (item.num.indexOf(this.input) != -1)
                })
            },
            //下拉菜单
            selectChange(value){
                console.log(value)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/Homestay.css";
    
</style>
