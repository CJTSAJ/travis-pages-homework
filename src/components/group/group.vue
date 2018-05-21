<template>
  <div class="group">
    <h3>团队信息</h3>

    <h4>热门团队</h4>
    <ol v-for="Group in hotGroups">
      <ul>
        <div class="Content">
          <div class="Logo pull-left">
            <img v-bind:src="Group.img">
          </div>
          <div class="pull-right">
            <li class="list-group-item glyphicon glyphicon-star-empty"> 团队名称:{{Group.name}}</li>
            <li class="list-group-item glyphicon glyphicon-bookmark"> 参加项目:{{Group.competition}}</li>
            <li class="list-group-item glyphicon glyphicon-user"> 发起人:{{Group.originator}}</li>
            <li class="list-group-item glyphicon glyphicon-bullhorn"> 团队人数:{{Group.memberNum}}</li>
            <li class="list-group-item glyphicon glyphicon-bell" v-if="Group.notEnough"> 报名截止:{{Group.deadline}}</li>
          </div>
        </div>
      </ul>
    </ol>

    <h4>最新团队</h4>
    <router-link tag="div" class="groupInfo" to="/group001">
      <ol v-for="Group in newGroups">
        <ul>
         <div class="Content">
           <div class="Logo pull-left">
             <img v-bind:src="Group.img">
            </div>
            <div class="pull-right">
             <li class="list-group-item glyphicon glyphicon-star-empty"> 团队名称:{{Group.name}}</li>
             <li class="list-group-item glyphicon glyphicon-bookmark"> 参加项目:{{Group.competition}}</li>
             <li class="list-group-item glyphicon glyphicon-user"> 发起人:{{Group.originator}}</li>
             <li class="list-group-item glyphicon glyphicon-bullhorn"> 团队人数:{{Group.memberNum}}</li>
             <li class="list-group-item glyphicon glyphicon-bell" v-if="Group.notEnough"> 报名截止:{{Group.deadline}}</li>
           </div>
          </div>
       </ul>
       <hr>
     </ol>
    </router-link>
   <!--group-page></group-page-->
  </div>
</template>


<script>
//  import GroupPage from 'components/group/groupPage'
  export default {
    name: 'group',
  //  components: {
  //    GroupPage
  //  },
    data () {
      return {

        hotGroups: [
          {
            img: '/static/img/run.png',
            name: ' 长者说的都队',
            competition: ' 12.9冬季长跑节',
            originator: ' 浓密一号',
            memberNum: ' 4/4',
            deadline: ' 2017/12/9',
            notEnough: false
           },
          {
            img: '/static/img/水果.png',
            name: ' 前端工程师 | 联系人',
            competition: ' 鲜果学院',
            originator: ' mk大佬',
            memberNum: ' 4/-',
            deadline: ' 2017/5/5',
            notEnough: true
          }
        ],
        newGroups: [
          {
            img: '/static/img/信息竞赛.png',
            name: ' 虚拟化学实验室',
            competition: ' 第一届中国大学生VRAR开发大赛',
            time: '2017/12/25 13:00',
            originator: ' aoyuaWang',
            memberNum: ' 3/3',
            deadline: ' 2017/12/18',
            notEnough: false
           },
          {
            img: '/static/img/射箭1.png',
            name: ' 射箭小分队',
            competition: ' 北美猎弓体验课',
            time: '2017/12/21 14:00',
            originator: ' 胆大的萌新',
            memberNum: ' 3/20',
            deadline: ' 2017/12/20 23:00',
            notEnough: true
          }
        ],

      }
    }
  }
</script>

<style>
div{
  //text-align:left
}
.Content{
  margin:auto;
  bottom: 60px;
  right: 300px;
  width: 450px;
  height: 200px;
  text-align:left;
}
.Logo{
  margin: auto;
  position: relative;
  top: 20px;
  right:0px;
  width: 80px;
  height: 120px;
}
.Logo img{
  display:block;
  outline:none;
  border:10;
  height:100%;
  width:100%;
}
</style>
