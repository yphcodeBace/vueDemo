<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item>
            登陆Login
        </el-form-item>
        <el-form-item prop="username">
            <el-input type="username" placeholder="用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
            <el-input type="password" placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
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
        //   if (this.ruleForm.checkPass !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
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
      }
    }
  }
</script>

<style scoped>
    .login{
        height: 100vh;
        background: url('../assets/images/bg.jpg') no-repeat center center;
        background-size: cover;
        padding-top: 1px;
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
