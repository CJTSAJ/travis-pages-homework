<template>
  <div class="groupCompetition">
    <h3>团队信息-比赛</h3>
    <ol v-for="Group in compGroups">
      <ul>
        <div class="Content">
          <div class="Logo pull-left">
            <img v-bind:src="Group.img">
          </div>
          <div class="pull-right">
            <li class="list-group-item glyphicon glyphicon-star-empty"> 团队名称:{{Group.name}}</li>
            <li class="list-group-item glyphicon glyphicon-bookmark"> 参加赛事:{{Group.competition}}</li>
            <li class="list-group-item glyphicon glyphicon-calendar"> 比赛时间:{{Group.time}}</li>
            <li class="list-group-item glyphicon glyphicon-user"> 发起人:{{Group.originator}}</li>
            <li class="list-group-item glyphicon glyphicon-bullhorn"> 团队人数:{{Group.memberNum}}</li>
            <li class="list-group-item glyphicon glyphicon-bell" v-if="Group.notEnough"> 报名截止:{{Group.deadline}}</li>
          </div>
        </div>
      </ul>
    </ol>
  </div>
</template>


<script>
  export default {
    name: 'groupCompetition',
    data(){
      return{
        compGroups: [
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
            img: '/static/img/游戏.png',
            name: ' 组队吃鸡',
            competition: ' 微软ID@Xbox梦想校园行游戏开发大赛',
            time: ' 2017/12/8 18:00',
            originator: ' 大佬',
            memberNum: ' 2/4',
            deadline: ' 2017/11/20',
            notEnough: true
          }
        ]
      }
    }
  }
</script>
<style>

.Content{
  margin:auto;
  bottom: 60px;
  right: 300px;
  width: 500px;
  height: 200px;
  text-align:left;
}
.Logo{
  margin: auto;
  position: relative;
  top: 20px;
  right: 10px;
  width: 100px;
  height: 120px;
}
.Logo img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
</style>
