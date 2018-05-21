<template>
  <div class="grouppage">
    <h1>团队页面</h1>
    <div class="container-fluid ">
      <div class="row-fluid">
        <div class="col-md-7">
          <h2>{{info.name}} - {{info.competition}}</h2>
          <img v-bind:src="info.img2" width="300px" height="220px">
          <p align="left">
            <br>
            箭术作为一门古老的技艺于《周礼》中与礼、乐、御、书、数合称六艺，
            于千年中虽丧失了其实用性却不失为一门修炼身心的运动。<br><br>
            空放堂弓箭俱乐部想把射箭这项平日里不多见的运动带入大家生活中，
            在将射箭这门技艺传播的同时也希望从运动中为大家创造一个射箭文化，让更多人了解箭术。<br><br>
            本次活动主要介绍北美猎弓的起源和玩法，理论介绍为辅，实战射击体验为主，每人免费体验2小时，
            天赋高者有机会成为俱乐部会员，定期参加培训和比赛。<br><br>
            培训教练有全国射箭大师联赛Top5成员、上海市射箭市民联赛最高纪录保持者。<br><br>
            活动信息：<br>
            时间：周三下午2：00-10：00<br>
            地点：剑川路646号空放堂，交大北二门斜对面。<br>
            主办：上海交通大学射箭俱乐部<br>
            更多信息咨询微信：zhoushukai002<br>
          </p>
        </div>
        <div class="col-md-4 pull-right" align="left">
          <h2>基本信息</h2>
          <ul>
            <li> 活动时间:{{info.time}}</li><br>
            <li> 报名截止:{{info.deadline}}</li><br>
            <li> 发起人:{{info.originator}}</li><br>
            <li> 团队人数:{{info.memberNum}}</li><br>
            <li> 活动地点：{{info.place}}</li>
          </ul>
          <button class="btn" v-bind:class="{'btn-primary':notJoin, 'btn-default':join}" v-on:click="joinTeam">{{joinMsg}}</button>
          <button class="btn" v-bind:class="{'btn-success':notFollow, 'btn-default':follow}" v-on:click="Follow">{{followMsg}}</button>
        </div>
      </div>
      <div class="row-fluid">
        <div class="col-md-7">
          <h2>留言板</h2>
          <div v-for="com in Comments">
            <p class="list-group-item" align="left">{{com}}</p>
          </div>
          <div class="input-group">
              <input type="text" class="form-control" placeholder="我的留言……" v-model="msg">
              <span class="input-group-btn">
                 <button class="btn btn-info" type="button" v-on:click="leaveMsg">留言</button>
              </span>
          </div>
        </div>
        <div class="col-md-4 pull-right">
          <group-recommend></group-recommend>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import GroupRecommend from 'components/groups/groupRecommend/groupRecommend'
  export default {
    name: 'grouppage',
    components: {
        GroupRecommend
    },
    data(){
      return{
        info: {
          img: '/static/img/射箭1.png',
          img2: '/static/img/射箭.jpg',
          name: ' 射箭小分队',
          competition: ' 北美猎弓体验课',
          time: '2017/12/21 14:00',
          originator: ' 胆大的萌新',
          memberNum: ' 3/20',
          deadline: ' 2017/12/20 23:00',
          place: ' 剑川路848号空放堂',
          intro: ''
        },
        Comments:["看起来还可以诶","emmmm有课去不了QAQ"],
        msg:'',
        join: false,
        notJoin: true,
        follow: false,
        notFollow: true,
        joinMsg: '申请加入',
        followMsg: '关注'
      }
    },
    methods: {
      joinTeam: function(){
        this.join = !this.join
        this.notJoin = !this.notJoin
        if(this.join){
          this.joinMsg = '取消申请'
        }
        else{
          this.joinMsg = '申请加入'
        }
      },
      Follow: function(){
          this.follow = !this.follow
          this.notFollow = !this.notFollow
          if(this.follow){
            this.followMsg = '取消关注'
          }
          else{
            this.followMsg = '关注'
          }
      },
      leaveMsg: function(){
        if(this.msg != ''){
          this.Comments.push(this.msg)
        }
        this.msg=''
      }

    }

  }
</script>
