import { defineStore } from 'pinia'
import axios from 'axios'
import {COCKTAIL_BY_ID, COCKTAILS_BY_INGREDIENT_URL, INGREDIENTS_URL} from "@/constants/index.js";

export const useRootStore = defineStore('root', {
  state: () => ({
      ingredients: [],
      ingredient: null,
      cocktails: [],
  }),
  actions: {
       async getIngredients() {
              const data = await axios.get(INGREDIENTS_URL)
                this.ingredients = data?.data.drinks;
        },
      async getCocktails(ingredient) {
          const data = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`)
          this.cocktails = data?.data.drinks;
      },
      setIngredient(ingredient) {
           this.ingredients = ingredient;
      },
  }
})
