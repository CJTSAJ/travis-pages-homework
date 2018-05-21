<template>
  <div class="groupActivities">
    <h3>团队信息-课外活动</h3>
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
    name: 'groupActivities',
    data (){
      return{
        actGroups: [
          {
            img: '/static/img/射箭1.png',
            name: ' 射箭小分队',
            competition: ' 北美猎弓体验课',
            time: '2017/12/21 14:00',
            originator: ' 胆大的萌新',
            memberNum: ' 3/20',
            deadline: ' 2017/12/20 23:00',
            notEnough: true
           },
          {
            img: '/static/img/枫叶.png',
            name: ' 去赏枫叶吧',
            competition: ' 天平山探银杏赏红枫',
            time: ' 2017/12/23 7:00',
            originator: ' 丁小花',
            memberNum: ' 65/100',
            deadline: ' 2017/12/23 00：50',
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
  width: 390px;
  height: 200px;
  text-align:left;
}
.Logo{
  margin: auto;
  position: relative;
  top: 20px;
  right: 10px;
  width: 90px;
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
