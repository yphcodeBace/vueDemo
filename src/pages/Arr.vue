<template>
  <div class="arrPage">
    <Breadcrumb />
    name:<input v-model="name"></input>
    sex:<input v-model="sex"></input>
    <button @click="add">添加</button>
    <p v-for="(item,index) in msg" :key="index">
      <span>{{item.name}}</span>
      <span>{{item.sex}}</span>
    </p>
  </div>
</template>

<script>
  import Breadcrumb from '@/pages/Breadcrumb';
  export default {
    name: 'Arr',
    mounted(){
      let lang = ["php","c","javascript"];
      let removed = lang.splice(1,1);
      console.log(lang); //返回 ：["php","javascript"] 改变了原来的数组
      console.log(removed); //,返回：["java"]  //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目.

      let insert = lang.splice(0,0,"asp"); //从第0个位置开始插入
      console.log(insert); //返回空数组
      console.log(lang); //[“asp”，”php”,”javascript” ]

      let replace = lang.splice(1,1,"c#","ruby"); //删除一项，插入两项
      console.log(lang); //[“asp”,”c#”,”ruby”,"javascript"]
      console.log(replace); //返回 :["php"] 删除项

      // 不会改变原始数组的方法
      let arr1 = ["y","a","n"];
      let arr2 = arr1.slice(1,3);
      let arr3 = arr1.concat(arr2);
      console.log(arr1);
      console.log(arr2);
      console.log(arr1.concat(arr2));
      console.log(arr3);

      let fruits = [
        {name:'Banana',alias:'香蕉'},
        {name:'Orange',alias:'橘子'},
        {name:'Apple',alias:'苹果'},
        // "Banana", "Orange", "Apple", "Mango"
      ];
      fruits.push({name:'pear',alias:"梨"})
      console.log(fruits.valueOf());
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
        this.msg.push({name:this.name,sex:this.sex})
        this.name=''
        this.sex=''
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
    components:{
      Breadcrumb:Breadcrumb,
    }
  }
</script>

<style scoped>
  .arrPage{
    text-align: left;
  }

</style>
