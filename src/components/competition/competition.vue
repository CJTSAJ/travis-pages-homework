<template>
  <div class="competition">
    <h3>比赛</h3>
    <carousel-competition></carousel-competition>
    <category-competition></category-competition>
  </div>
</template>

<script>
  import CarouselCompetition from 'components/carouselCompetition/carouselCompetition'
  import CategoryCompetition from 'components/categories/categoryCompetition/categoryCompetition'
  export default {
    name: 'competition',
    components: {
        CarouselCompetition,
        CategoryCompetition
    }
  }
</script>
