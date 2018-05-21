<template>
  <div class="recruitment">
    <h3>招聘信息</h3>
    <category-recruitment></category-recruitment>
  </div>
</template>


<script>
  import CategoryRecruitment from 'components/categories/categoryRecruitment/categoryRecruitment'
  export default {
    name: 'recruitment',
    components: {
        CategoryRecruitment
    }
  }
</script>
