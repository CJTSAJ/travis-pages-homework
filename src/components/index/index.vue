<template>
  <div class="index">
    <h3>主页</h3>
    <carousel></carousel>
    <group></group>
  </div>
</template>


<script>
  import Carousel from 'components/carousel/carousel'
  import Group from 'components/group/group'
  export default {
    name: 'index',
    components: {
        Carousel,
        Group
    }
  }
</script>
