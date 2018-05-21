<template>
  <div class="follows">
    <h3>我的关注</h3>
    <div class="fellow" v-for="fw in fws" >
        <div class="col-md-2 column" style="border:5px solid #abc;margin:15px">
            <img class="head" :src="fw.addr" height="80"/>
            {{fw.username}}<br/>
            fans：{{fw.fans}}
        </div>

    </div>
  </div>
</template>


<script>
  export default {
    name: 'follows',
    data () {
      return{
        fws:[
          {addr:"/static/img/head1.jpg",username:"username1",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username2",fans:"14"},
          {addr:"/static/img/head1.jpg",username:"username3",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username4",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username5",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username6",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username7",fans:"13"},
          {addr:"/static/img/head1.jpg",username:"username8",fans:"13"}
          
        ]
      }
    }
  }
</script>

<style>
.head{
  border-radius: 80px
}
</style>