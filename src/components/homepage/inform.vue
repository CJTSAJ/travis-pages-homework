<template>
  <div class="inform">
    <h3>我的通知</h3>
    <table class="table">
      <tbody>
        <tr v-for="inform in informs">
          <td width="1200" style="text-align:left">
            {{inform.inform}}
          </td>
          <td width="400">
            {{inform.date}}
          </td>
        </tr>
        <tr><td></td><td></td></tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  export default {
    name: 'inform',
    data () {
      return{
        informs:[
          {inform:"tongzhi111111111111111111111111111111111",date:"11-12"},
          {inform:"tongzhi222222221111111111111111111111111",date:"11-22"}
        ]
      }
    }
    
  }
</script>
