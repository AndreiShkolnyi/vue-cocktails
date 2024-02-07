<template>
  <div class="mainLayout" v-if="imgUrl && title">
  <div :style="`background-image: url(${imgUrl}); filter: drop-shadow(0 0 0.75rem #240090); opacity: 50%)`" class="img"></div>
    <div class="main">
      <el-button v-if="isBackButton" class="back-btn" :icon="Back" circle @click="goBack"/>
      <el-button class="btn" @click="goWithRandom">Get random cocktail</el-button>
      <div class="wrapper">
        <div class="info">
          <h1 class="title">{{ title }}</h1>
          <span class="line"/>
    <slot>
    </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Back
} from '@element-plus/icons-vue';
import { useRoute, useRouter } from 'vue-router'
import {computed} from "vue";
import {ROUTER_PATHS} from "@/constants/index.js";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function
  },

  isBackButton: {
    type: Boolean,
    default: true
  }
})

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name)

function goWithRandom() {
  router.push(ROUTER_PATHS.COCKTAIL_RANDOM)
  if(routeName.value === ROUTER_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}

function goBack() {
 props.backFunc ? props.backFunc() :  router.go(-1);
}


</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.mainLayout
  display: flex
  background-color: $background
  min-height: 100vh

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 50%
  padding: 32px 40px

.btn
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  font-family: "Raleway", "Arial", sans-serif
  border: none
  padding: 16px 8px
  color: $text
  font-size: 16px
  font-weight: 400
  cursor: pointer

  &:hover
    opacity: 0.8
  &:active
    opacity: 0.5

.wrapper
  display: flex
  align-items: center
  justify-content: center

.info
  padding: 80px 0
  text-align: center

.back-btn
  background-color: $background
  color: $text
  width: 53px
  height: 53px
  &:hover
    border-color: $accent

</style>
