<template>
  <div class="slider">
    <el-scrollbar style="height: 100%;">
      <MenuNavs></MenuNavs>
    </el-scrollbar>
  </div>
</template>
<style scoped lang="scss">
.slider {
  width: 200px;
}
</style>
<script setup lang="ts">
import MenuNavs from './navs/MenuNavs.vue'
</script>
