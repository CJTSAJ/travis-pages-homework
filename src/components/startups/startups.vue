<template>
  <div class="startups">
    <h3>创业团队</h3>
    <category-startups></category-startups>
  </div>
</template>


<script>
  import CategoryStartups from 'components/categories/categoryStartups/categoryStartups'
  export default {
    name: 'startups',
    components: {
        CategoryStartups
    }
  }
</script>
