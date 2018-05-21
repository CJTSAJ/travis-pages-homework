<template>
  <div class="tab" style="margin-top:-60px">
    <div class="header-m">
      <div class="nav-menu">
        <div class="nav-mask">
        </div>
        <div class="bili-wrapper clearfix">
          <div class="nav-con fl">
            <ul>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/index">
                  <span class="tab-link t">主页</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/startups">
                  <span class="tab-link t">创业团队</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/competition">
                  <span class="tab-link t">比赛团队</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/recruitment">
                  <span class="tab-link t">招聘信息</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/activities">
                  <span class="tab-link t">课余活动</span>
                </router-link>
              </li>
            <!-- </ul> -->
          <!-- </div> -->
          <!-- login logic -->
          <li style="margin-left:450px">
            <div class="reg" v-show="log">
              <li class="nav-item">
                <router-link tag="div" class="tab-item t" to="/register">
                  <span class="tab-link">注册</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item t" to="/login">
                  <span class="tab-link">登录</span>
                </router-link>
              </li>
            </div>
          </li>
          <li style="margin-left:60px">
            <div class="info" v-show="!log">
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/homepage">
                  <span class="tab-link t">个人主页</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="div" class="tab-item" to="/index">
                  <span class="tab-link t" v-on:click = "signOut">注销</span>
                </router-link>
              </li>
            </div>
          </li>
        </ul>
      </div>

          <!----><!---->
        </div>
      </div>

      <div id="banner_link" class="head-banner report-wrap-module report-scroll-module" :style="note">
        <div class="head-content bili-wrapper">
          <div class="search">
            <form class="searchform">
              <input id="keyword" type="text" value="" class="search-keyword" v-on:click="showclick">
              <button class="search-submit" v-on:click="searchclick"></button>
            </form>
            <a class="link-ranking"><span>搜索</span></a>
            <div v-show="show" style="position:relative;top:5px">
              <span class="label label-default"v-on:click="showclick_1">大学生数学建模</span>
              <span class="label label-primary"v-on:click="showclick_2">黑客马拉松</span>
              <span class="label label-success"style="position:relative;top:5px"v-on:click="showclick_3">大学生创业设计大赛</span>
              <span class="label label-info"style="position:relative;top:5px"v-on:click="showclick_4">ACM程序设计大赛</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- <li><router-link tag="div" class="tab-item" to="/index">
      <span class="tab-link">主页</span>
    </router-link></li>
    <li><router-link tag="div" class="tab-item" to="/startups">
      <span class="tab-link">创业团队</span>
    </router-link></li>
    <li><router-link tag="div" class="tab-item" to="/competition">
      <span class="tab-link">比赛团队</span>
    </router-link></li>
    <li><router-link tag="div" class="tab-item" to="/recruitment">
      <span class="tab-link">招聘信息</span>
    </router-link></li>
    <li><router-link tag="div" class="tab-item" to="/activities">
      <span class="tab-link">课余活动</span>
    </router-link></li>
    <li style="margin-left:60px"><div class="reg" v-show="log">
      <li><router-link tag="div" class="tab-item" to="/register">
        <span class="tab-link">注册</span>
      </router-link></li>
      <li><router-link tag="div" class="tab-item" to="/login">
        <span class="tab-link">登录</span>
      </router-link></li>
    </div></li>
    <li style="margin-left:60px"><div class="info" v-show="!log">
       <li><router-link tag="div" class="tab-item" to="/homepage">
        <span class="tab-link">个人主页</span>
       </router-link></li>
      <li><router-link tag="div" class="tab-item" to="/index">
        <span class="tab-link" v-on:click = "signOut">注销</span>
      </router-link></li> -->
    <!-- </div></li> -->
  </div>
</template>


<script>
  import Router from 'vue-router'
  import Global from 'components/tools/global.js'
export default {
      data () {
          return{
              log: true,
            show:false,
              note:{
                backgroundImage: "url(" + require("../../../static/backback.png") + ")",
              }
          }
      },
      created: function() {
          var self = this
          Global.$on('log',function() {
              self.log = false
          })
        this.log = self.log
      },
      methods:{
          signOut: function(){
              this.log = true
          },
          searchclick(){
            this.show=false,
            alert("search!content:"+keyword.value)
          },
        showclick(){
          this.show=true;

        },
        showclick_1(){
          keyword.value = "大学生数学建模"
        },
        showclick_2(){
          keyword.value = "黑客马拉松"
        },
        showclick_3(){
          keyword.value = "大学生创业设计大赛"
        },
        showclick_4(){
          keyword.value = "ACM程序设计大赛"
        }
      }
}

</script>

<style type="text/css" src="./tab.css">
  /* .tab-link{
    font-family:monospace;
    font-size:18px;
    color:darkgray;
    font-weight:bold;
  } */
</style>
