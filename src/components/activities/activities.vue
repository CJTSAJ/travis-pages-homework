<template>
  <div class="activities">
    <h3>课余活动</h3>
    <category-activities></category-activities>
  </div>
</template>

<script>
  import CategoryActivities from 'components/categories/categoryActivities/categoryActivities'
  export default {
    name: 'activities',
    components: {
        CategoryActivities
    }
  }
</script>
