<template>
  <div class="register">
    <h3>注册</h3>
    <br/>
      <div class="input">
        手机  ：
        <input id="phoneNumber" v-model="phoneNumber"><br/>
        <br/>邮箱  ：
        <input id="email" v-model="email"><br/>
        <br/>验证码：
        <input id="identify" placeholder="请输入验证码" v-model="identify">
      </div>
    <br/>
      <button class="btn btn-primary" v-text="msg" v-on:click = "register"></button>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data(){
        return{
            msg: '注册',
            phoneNumber:'',
            email:'',
            identify:''
        }
    },
    methods:{
        register: function(){
              this.phoneNumber = '',
              this.email='',
              this.user='',
              this.password=''
              alert('提交成功！请确认手机验证码')
        }
    }
  }
</script>

<style>
  .register {
    position: absolute;
    left: 25%;
    top: 30%;
    text-align: left;
    font-weight: bold;
  }
</style>
