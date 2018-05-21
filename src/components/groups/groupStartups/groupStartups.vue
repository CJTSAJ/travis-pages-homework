<template>
  <div class="groupStartups">
    <h3>团队信息-创业团队</h3>
    <ol v-for="Group in staGroups">
      <ul>
        <div class="Content">
          <div class="Logo pull-left">
            <img v-bind:src="Group.img">
          </div>
          <div class="pull-right">
            <li class="list-group-item glyphicon glyphicon-bookmark"> 创业项目:{{Group.competition}}</li>
            <li class="list-group-item glyphicon glyphicon-star-empty"> 招募需求:{{Group.name}}</li>
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
    name: 'groupStartups',
    data(){
      return{
        staGroups: [
          {
            img: '/static/img/水果.png',
            name: ' 前端工程师 | 联系人',
            competition: ' 鲜果学院',
            originator: ' mk大佬',
            memberNum: ' 4/-',
            deadline: ' 2017/5/5',
            notEnough: true
           },
          {
            img: '/static/img/约.png',
            name: ' 前端工程师 | 网页设计师',
            competition: ' “交大约约”校园平台',
            originator: ' yueyue',
            memberNum: ' 5/-',
            deadline: ' 2017/12/20',
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
  width: 130px;
  height: 160px;
}
.Logo img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
</style>
