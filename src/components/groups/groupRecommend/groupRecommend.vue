<template>
  <div class="groupRecommend">
    <h3>团队信息-推荐团队</h3>
    <ol v-for="Group in actGroups">
      <ul>
        <div class="Content">
          <div class="Logo pull-left">
            <img v-bind:src="Group.img">
          </div>
          <div class="pull-right">
            <li class="list-group-item glyphicon glyphicon-star-empty"> 团队名称:{{Group.name}}</li>
            <li class="list-group-item glyphicon glyphicon-bookmark"> 活动项目:{{Group.competition}}</li>
            <li class="list-group-item glyphicon glyphicon-calendar"> 活动时间:{{Group.time}}</li>
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
    name: 'groupRecommend',
    data(){
      return{
        actGroups: [
          {
            img: '/static/img/拍照.png',
            name: ' 拍照去呀',
            competition: ' 自由探索快闪光影照',
            time: '2017/12/19 13:00',
            originator: ' 自恋狂魔',
            memberNum: ' 2/3',
            deadline: ' 2017/12/18',
            notEnough: true
           },
          {
            img: '/static/img/颁奖.png',
            name: ' 有素拓诶',
            competition: ' 全国大学生数学建模竞赛颁奖典礼',
            time: ' 2017/12/22 12:00',
            originator: ' ninini',
            memberNum: ' 6/-',
            deadline: ' 2017/12/20 15：30',
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
  width: 470px;
  height: 200px;
  text-align:left;
}
.Logo{
  margin: auto;
  position: relative;
  top: 20px;
  right: 10px;
  width: 100px;
  height: 140px;
}
.Logo img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
</style>
