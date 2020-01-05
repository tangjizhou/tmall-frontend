<template>
  <div class="login-panel">
    <el-form :model="login" label-width="80px">
      <el-form-item label="用户名" prop="username" required>
        <el-input type="text" v-model="login.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input type="password" v-model="login.password"/>
      </el-form-item>
      <el-button @click="doLogin()">登陆</el-button>
    </el-form>
  </div>


</template>

<script>
  import {loginApi} from "./api";

  export default {
    name: "Login",
    data() {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {

      doLogin() {
        let username = this.login.username;
        let password = this.login.password;
        let query = location.query;
        loginApi.login(username, password).then(() => {
          this.$message.success("登陆成功");
          if (query === undefined || query.redirect === undefined) {
            return;
          }
          this.$router.push(query.redirect);
        }).catch(error => {
          this.$message.error(error.message);
        })
      }

    }
  }
</script>

<style scoped>

</style>
