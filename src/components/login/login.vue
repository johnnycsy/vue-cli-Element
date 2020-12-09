<template>
  <div class="login">
    <div class="login-form padding">
      <div class="align-center"><h1>LOGIN</h1></div>
      <el-form label-position="top" class="login-input">
        <el-form-item label="">
          <el-input v-model="username" placeholder="登入账号/工号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="password" placeholder="登入密码" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item class="align-center">
          <el-button class="login-but" type="success" @click="onLogin">确认登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import login from './login'
export default login
</script>

<style scoped>
@import "login.css";
</style>
