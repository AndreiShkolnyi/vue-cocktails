<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :title="titleValue" :is-back-button="!!ingredient">
    <template v-if="!ingredient || !cocktails">
      <div class="select-wrapper">
        <el-select
            v-model="ingredient"
            class="select"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            @change="getCocktails"
        >
          <el-option
              v-for="ingredient in ingredients"
              :key="ingredient?.strIngredient1"
              :label="ingredient?.strIngredient1"
              :value="ingredient?.strIngredient1"
          />
        </el-select>
      </div>
      <div class="text">
        <p>Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.</p>
      </div>
      <img src="/src/assets/img/cocktails.png" alt="Image with cocktails" class="img">
    </template>
    <template v-else>
      <div class="cocktails">
        <CocktailItem v-for="cocktail in cocktails" :cocktail="cocktail" :key="cocktail.idDrink"/>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue";
import {useRootStore} from "@/stores/index.js";
import { storeToRefs } from 'pinia';
import CocktailItem from "@/components/CocktailItem.vue";
import {computed} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

const titleValue = computed(() => {
  if (rootStore.ingredient) {
    return `COCKTAILS WITH ${rootStore.ingredient}`;
  }
  return  'Choose your drink';
})

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null);
  router.go();
}

function setIngredient() {
  rootStore.setIngredient(ingredient)
}

</script>

<style lang="sass" scoped>
@import '../assets/styles/main'


.select-wrapper
  padding-top: 50px

.select
  width: 220px
  outline: none

.text
  padding-top: 50px
  margin: 0 auto
  color: $secondary-text
  font-weight: 400
  font-size: 16px
  line-height: 2em
  letter-spacing: 0.1em
  max-width: 516px

.img
  padding-top: 60px
  max-width: 345px

.cocktails
  max-height: 400px
  overflow-y: auto
  margin-top: 60px
  display: flex
  flex-wrap: wrap
  align-items: center


</style>
