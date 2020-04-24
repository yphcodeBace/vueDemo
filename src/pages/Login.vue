<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item>
            登录Login
        </el-form-item>
        <el-form-item prop="username">
            <el-input type="username" placeholder="用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
            <el-input type="password" placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
        <el-form-item>
            <!-- <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button> -->
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else{
            if (this.ruleForm.username != 'yanpeihao') {
                callback(new Error('用户名不存在'));
            }
            callback();
        }
        setTimeout(() => {
            if (value.length < 6) {
                callback(new Error('用户名不能小于六位'));
            } else {
                callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.pass != 'nishengri') {
            callback(new Error('用户名或密码错误'));
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // console.log(this.ruleForm);
                this.$cookieStore.setCookie( 'userName', this.ruleForm.username, 15*60);//存入用户名，设置有效时间15分钟
                this.$cookieStore.setCookie( 'pass', this.ruleForm.pass, 15*60);//存入用户名，设置有效时间15分钟
                // alert('submit!');
                this.$router.push({
                    path:'/Index'
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // //设置cookie
        // setCookie(c_name, c_pwd, exdays) {
        //     var exdate = new Date(); //获取时间
        //     exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //     //字符串拼接cookie
        //     window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        //     window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        // },
        // //读取cookie
        // getCookie() {
        //     console.log(document.cookie);
        //     if (document.cookie.length > 0) {
        //         // var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        //         // for (var i = 0; i < arr.length; i++) {
        //         //     var arr2 = arr[i].split('='); //再次切割
        //         //     //判断查找相对应的值
        //         //     if (arr2[0] == 'userName') {
        //         //         this.ruleForm.username = arr2[1]; //保存到保存数据的地方
        //         //     } else if (arr2[0] == 'userPwd') {
        //         //         this.ruleForm.password = arr2[1];
        //         //     }
        //         // }
        //     }
        // },
        // //清除cookie
        // clearCookie() {
        //     this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        // }

    }
  }
</script>

<style scoped>
    .login{
        height: 100vh;
        background: url('../assets/images/bg.jpg') no-repeat center center;
        background-size: cover;
        overflow: hidden;
    }
    .login >>> .el-form{
        /* border: 1px solid red; */
        width: 360px;
        margin: auto;
        margin-top: 20%;
    }
    .login >>> .el-form-item__label{
        color: #FFF;
    }
    .login >>> .el-button{
        width: 100%;
    }
    .login >>> .el-form-item__content{
        color: #FFF;
        font-size: 32px;
    }
    .login >>> .el-input__inner{
        color: #FFF;
        background-color: transparent;
    }
</style>
