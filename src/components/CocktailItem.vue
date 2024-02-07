<template>
  <div class="cocktail-item">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <img :src="cocktail.strDrinkThumb" alt="Cocktail's image" class="img">
    </RouterLink>
    <p class="text">{{ cocktail.strDrink }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.cocktail-item
  width: calc((100% - 76px )/3)
  margin-right: 38px
  &:nth-child(3n + 3)
    margin-right: 0
.img
  width: 120px
  height: 120px

.text
  width: 100%
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  color: $text
  font-weight: 400
  font-size: 16px
  letter-spacing: 0.1em



</style>
