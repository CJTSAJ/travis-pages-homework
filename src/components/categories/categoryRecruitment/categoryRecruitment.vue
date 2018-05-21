<template>
  <div class="category">
    <h3>招聘团队分类</h3>
    <div class="panel panel-default" style="width: 50% ;margin:auto;">
      <div class="panel-body">
        <ol v-for="group in category">
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">{{group.time}}</a>
              </div>
              <div>
                <ul class="nav navbar-nav">
                  <li v-bind:class="{ active: isActive_1 }"><a href="#" v-on:click="show">{{group.name1}}</a></li>
                  <li v-bind:class="{ active: isActive_2 }" ><a href="#" v-on:click="show_2">{{group.name2}}<span class="badge" >hot</span></a></li>
                  <li v-bind:class="{ active: isActive_3 }"><a href="#" v-on:click="show_3">{{group.name3}}<span class="badge" >hot</span></a></li>
                  <li v-bind:class="{ active: isActive_4 }" ><a href="#" v-on:click="show_4">{{group.name4}}</a></li>
                </ul>
              </div>
            </div>
          </nav>

        </ol>
        <ol v-for="group in category2">
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">{{group.time}}</a>
              </div>
              <div>
                <ul class="nav navbar-nav">
                  <li v-bind:class="{ active: isActive_5 }"><a href="#" v-on:click="show_5">{{group.name1}}</a></li>
                  <li v-bind:class="{ active: isActive_6 }" ><a href="#" v-on:click="show_6">{{group.name2}}</a></li>
                  <li v-bind:class="{ active: isActive_7 }"><a href="#" v-on:click="show_7">{{group.name3}}</a></li>
                  <li v-bind:class="{ active: isActive_8 }" ><a href="#" v-on:click="show_8">{{group.name4}}</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </ol>
        <div class="progress" style="width:50% ;float:left">
          <div class="progress-bar" role="progressbar" aria-valuenow="60"
               aria-valuemin="0" aria-valuemax="100" style="width:70%">
            <span>已参加70%</span>
          </div>
        </div>
        <span>
        <ol v-for="group in labell">
          <span class="label label-primary">点击量:{{cclick}}</span>
          <span class="label label-success">关注数:{{cstar}}</span>
          <span class="label label-info">更新时间:{{group.time}}</span>
        </ol>
        </span>
      </div>
    </div>
    <div class="cshow" v-show="cshow">
    <GroupRecruitment></GroupRecruitment>
    </div>
    <div class="cshow1" v-show="cshow1">
      <br>
      <h3> 暂时没有相关条目</h3>
    </div>
  </div>
</template>

<script>
  import GroupRecruitment from 'components/groups/groupRecruitment/groupRecruitment'
  export default {
    name: 'categoryRecruitment',
    components: {
      GroupRecruitment
    },
    data(){
        return {
          cshow:true,
          cshow1:false,
          isActive_1:true,
          isActive_2:false,
          isActive_3:false,
          isActive_4:false,
          isActive_5:false,
          isActive_6:false,
          isActive_7:false,
          isActive_8:false,
          cclick:0,
          cstar:0,
          category: [
            {
              name1: '全部',
              name2: '电子技术      ',
              name3: '机械类',
              name4: '主持与演讲',
              time: '招聘',
              jindu: "70%",
              n_jindu: "已参加70%"
            }
          ],
          category2: [
            {
              name1: '按热度',
              name2: '按时间',
              name3: '按人数',
              name4: '按点击量',
              time: '排序',
              jindu: '50%',
              n_jindu: "已参加50%"
            }
          ],
          labell: [
            {
              sort: '升序',
              click: '233',
              star: '233',
              time: '2017/11/11',
              people: '233'
            }
          ],
        }
    },
    methods: {
      show: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = true;
        this .cshow1 = false;
        this.isActive_1 = true;
        this.isActive_2 = false;
        this.isActive_3 = false;
        this.isActive_4 = false;
      },
      show_2: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = false;
        this .cshow1 = true;
        this.isActive_1 = false;
        this.isActive_2 = true;
        this.isActive_3 = false;
        this.isActive_4 = false;
      },
      show_3: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = false;
        this .cshow1 = true;
        this.isActive_1 = false;
        this.isActive_2 = false;
        this.isActive_3 = true;
        this.isActive_4 = false;
      },
      show_4: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = false;
        this .cshow1 = true;
        this.isActive_1 = false;
        this.isActive_2 = false;
        this.isActive_3 = false;
        this.isActive_4 = true;
      },
      show_5: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = true;
        this .cshow1 = false;
        this.isActive_5 = true;
        this.isActive_6 = false;
        this.isActive_7 = false;
        this.isActive_8 = false;
      },
      show_6: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = true;
        this .cshow1 = false;
        this.isActive_5 = false;
        this.isActive_6 = true;
        this.isActive_7 = false;
        this.isActive_8 = false;
      },
      show_7: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = true;
        this .cshow1 = false;
        this.isActive_5 = false;
        this.isActive_6 = false;
        this.isActive_7 = true;
        this.isActive_8 = false;
      },
      show_8: function () {
        // `this` 在方法里指当前 Vue 实例

        // `event` 是原生 DOM 事件
        this.cclick = this.cclick+1;
        this.cstar= this.cstar+1;
        this .cshow = true;
        this .cshow1 = false;
        this.isActive_5 = false;
        this.isActive_6 = false;
        this.isActive_7 = false;
        this.isActive_8 = true;
      },
    }
  }
</script>
