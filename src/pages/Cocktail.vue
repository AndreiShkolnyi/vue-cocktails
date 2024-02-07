<template>
  <AppLayout :img-url="cocktail?.strDrinkThumb" :title="cocktail?.strDrink">
    <div class="list">
      <div class="list-item" v-for="(item, key) in ingredients" :key="key">
        {{ item.name }}
        <template v-if="item.measure">
          | {{ item.measure }}
        </template>
      </div>
    </div>
    <div class="instructions">
      {{ cocktail.strInstructions }}
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import axios from "axios";
import {COCKTAIL_BY_ID} from "@/constants/index.js";

const route = useRoute();
const cocktail = ref(null);
const cocktailId = computed(() => route.path.split('/').pop());


const ingredients = computed(() => {

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
      if(!cocktail.value[`strIngredient${i}`]) break;
    // ingredients.push(cocktail.value[`strIngredient${i}`]);
    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];
    ingredients.push(ingredient);
  }

  return ingredients;
})

  async function getCocktailById() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`)
  cocktail.value = data?.data?.drinks[0];
};

getCocktailById();


</script>

<style lang="sass" scoped>


.list
  width: 560px
  padding: 50px 0 80px 0
  text-align: left
  &-item
    position: relative
    margin-bottom: 20px
    padding-left: 30px

    &:last-child
      margin-bottom: 0

    &::before
      content: ''
      position: absolute
      top: 50%
      left: 0
      transform: translateY(-50%)
      width: 17px
      height: 17px
      background: url("/src/assets/img/heart.svg") no-repeat 50%

</style>
