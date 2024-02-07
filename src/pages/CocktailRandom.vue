<template>
  <AppLayout :img-url="cocktail?.strDrinkThumb" :title="cocktail?.strDrink">
   <div class="slider">
     <swiper
         :slides-per-view="3"
         :space-between="50"
         @swiper="onSwiper"
         @slideChange="onSlideChange"
         class="swiper"
     >
       <swiper-slide
           class="swiper-item"
            v-for="(ingredient, key) in ingredients" :key="key">
         <img :src="`${COCKTAIL_THUMB_BY_NAME}${ingredient}-Small.png`" alt="">
         <p class="name">{{ ingredient }}</p>
       </swiper-slide>
     </swiper>
   </div>
    <div class="instructions">
      {{ cocktail.strInstructions }}
    </div>
  </AppLayout>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import AppLayout from "@/components/AppLayout.vue";
import {computed, ref} from "vue";
import axios from "axios";
import {COCKTAIL_BY_RANDOM, COCKTAIL_THUMB_BY_NAME} from "@/constants/index.js";

const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if(!cocktail.value[`strIngredient${i}`]) break;
    const ingredient = cocktail.value[`strIngredient${i}`];
    ingredients.push(ingredient);
  }
  return ingredients;
})
async function getRandomCocktail() {
  const data = await axios.get(COCKTAIL_BY_RANDOM);
  cocktail.value = data?.data?.drinks[0];
};
getRandomCocktail();


</script>

<style lang="sass" scoped>

.slider
  padding: 50px 0

.swiper
  max-width: 568px

  &-item
    display: flex
    flex-direction: column
    gap: 20px



</style>

