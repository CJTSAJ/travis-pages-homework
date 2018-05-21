<template>
  <div class="homepage">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <h2>
            个人主页
          </h2>
        </div>
      </div>
      <div class="row clearfix" style="margin-top:100px">
        <div class="col-md-2 column">
          <ul class="nav nav-stacked nav-pills">
            <!-- tab标签名称 -->
            <li class="active"><a href="#information" data-toggle="tab">我的信息</a></li>
            <li><a href="#jTeam" data-toggle="tab">我加入的团队</a></li>
            <li><a href="#cTeam" data-toggle="tab">我创建的团队</a></li>
            <li><a href="#follows" data-toggle="tab">我的关注</a></li>
            <li><a href="#inform" data-toggle="tab">我的通知</a></li>
            <li><a href="#setting" data-toggle="tab">个人设置</a></li>
          </ul>
        </div>
        <div class="col-md-10 column">
          <!-- tab标签内容 -->
          <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="information">
              <information></information>
            </div>
            <div class="tab-pane fade" id="jTeam">
              <j-team></j-team>
            </div>
            <div class="tab-pane fade" id="cTeam">
              <c-team></c-team>
            </div>
            <div class="tab-pane fade" id="follows">
              <follows></follows>
            </div>
            <div class="tab-pane fade" id="inform">
              <inform></inform>
            </div>
            <div class="tab-pane fade" id="setting">
              <setting></setting>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- <div class="h-tab">
    <h3 class="tab" v-on:click = "Cinformation">我的信息</h3>
    <h3 class="tab" v-on:click = "CjTeam">我加入的团队</h3>
    <h3 class="tab" v-on:click = "CcTeam">我创建的团队</h3>
    <h3 class="tab" v-on:click = "Cfollows">我的关注</h3>
    <h3 class="tab" v-on:click = "Cinform">我的通知</h3>
    <h3 class="tab" v-on:click = "Csetting">个人设置</h3>
    </div>
    <div class="content">
      <div class="information" v-show="information">
        <information></information>
      </div>
      <div class="j-team" v-show="jTeam">
        <j-team></j-team>
      </div>
      <div class="c-team" v-show="cTeam">
        <c-team></c-team>
      </div>
      <div class="follows" v-show="follows">
        <follows></follows>
      </div>
      <div class="inform" v-show="inform">
        <inform></inform>
      </div>
      <div class="setting" v-show="setting">
        <setting></setting>
      </div>
    </div> -->
  </div>
</template>


<script>
  import Information from 'components/homepage/information'
  import JTeam from 'components/homepage/jTeam'
  import CTeam from 'components/homepage/cTeam'
  import Follows from 'components/homepage/follows'
  import Inform from 'components/homepage/inform'
  import Setting from 'components/homepage/setting'

  export default {
    name: 'homepage',
    data(){
        return{
            information: true,
            jTeam: false,
            cTeam: false,
            follows: false,
            inform: false,
            setting: false
        }
    },
    components:{
        Information,
        JTeam,
        CTeam,
        Follows,
        Inform,
        Setting
    }
  }
</script>
