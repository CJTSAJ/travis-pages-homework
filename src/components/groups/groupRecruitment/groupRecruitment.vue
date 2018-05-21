<template>
  <div class="groupRecruitment">
    <h3>团队信息-招聘团队</h3>
    <ol v-for="Group in recGroups">
      <ul>
        <div class="Content">
          <div class="Logo pull-left">
            <img v-bind:src="Group.img">
          </div>
          <div class="pull-right">
            <li class="list-group-item glyphicon glyphicon-bookmark"> 招聘项目:{{Group.competition}}</li>
            <li class="list-group-item glyphicon glyphicon-star-empty"> 招聘职位:{{Group.name}}</li>
            <li class="list-group-item glyphicon glyphicon-user"> 招聘企业:{{Group.originator}}</li>
            <li class="list-group-item glyphicon glyphicon-calendar"> 招聘时间:{{Group.time}}</li>
            <li class="list-group-item glyphicon glyphicon-bullhorn"> 报名人数:{{Group.memberNum}}</li>
            <li class="list-group-item glyphicon glyphicon-bell" v-if="Group.notEnough"> 报名截止:{{Group.deadline}}</li>
          </div>
        </div>
      </ul>
    </ol>
  </div>
</template>


<script>
  export default {
    name: 'groupRecruitment',
    data(){
      return{
        recGroups: [
          {
            img: '/static/img/证券.png',
            name: ' -',
            competition: ' 中原证券2018校园招聘宣讲会',
            time: ' 2017/12/23',
            originator: ' 中原证券研究所',
            memberNum: ' 34/-',
            deadline: ' -',
            notEnough: false
           },
          {
            img: '/static/img/微软.png',
            name: ' ad-hoc PM Intern',
            competition: ' 【实习】微软上海招聘',
            time: ' 2017/12/27',
            originator: ' 微软上海IM China组',
            memberNum: ' -/3',
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
  width: 500px;
  height: 200px;
  text-align:left;
}
.Logo{
  margin: auto;
  position: relative;
  top: 20px;
  right: 10px;
  width: 110px;
  height: 130px;
}
.Logo img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
</style>
