<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
    components:{
        Tab
    },
  name: 'app'
  /*data () {
    return {
      statNum: 0,
      sign: false,
    }
  },

  /*components:{
    content1,
  },

  methods:{
    Show(num){
      this.statNum = num;
    },

    Search(){
      alert("搜索了"+searchContent.value);
    },

    signIn(){
      alert("sign in");
      this.sign = true;
    },

    signUp(){
      alert("sign up");
    },

    signOut(){
      alert("sign out");
      this.sign = false;
    },

    GRKJ(){
      alert("个人空间，登录！");
    }

  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
