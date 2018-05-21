<template>
  <div class="login">
    <h3>登录</h3>
    <br/>
    <div class="input">
      用户：
      <input id="id" placeholder="用户名/邮箱/已验证手机" v-model="id"><br/>
      <br/>密码：
      <input id="password" v-model="password"><br/>
    </div>
    <br/>
    <li><router-link tag="div" class="tab-item" to="/index">
      <button class="btn btn-primary" v-text= "msg" v-on:click = "login"></button>
    </router-link></li>
  </div>
</template>

<script>
  import Global from 'components/tools/global.js'
  export default {
    name: 'login',
    data() {
        return {
            id:'',
            password:'',
            msg: '登录',
        }
    },
    methods: {
        login: function(){
            this.id = ''
            this.password = ''
            Global.$emit('log')
            alert('登录成功')
        }
    }
  }
</script>

<style>
.login {
  position: absolute;
  left: 25%;
  top:  35%;
  text-align: left;
  font-weight: bold;
}
</style>
