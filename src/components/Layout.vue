<template>
  <div class="layout flex-box flex-column">
    <Header></Header>
    <div class="main flex-box flex1">
      <Slider v-if="showSide"></Slider>
      <router-view class="flex1" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  .main {
    height: 0;
  }
}
</style>
<script setup lang="ts">
import Header from './Header.vue'
import Slider from './Slider.vue'
import {useLayout} from '@/hooks/layout/useLayout'
const {showSide} = useLayout()
</script>
