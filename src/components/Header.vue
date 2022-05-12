<template>
  <div class="header flex-box align-center space-between">
    <div class="logo-wrap">logo</div>
    <HeadNavs class="flex1"></HeadNavs>
    <el-button @click="logoutHandle">logout</el-button>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  text-align: center;
  background: #ecedf1;
  .logo-wrap {
    width: 400px;
  }
  .head-menu-wrap {
    margin-left: 400px;
    max-width: 800px;
    .head-menu {
      width: 100%;
      background: transparent;
    }
  }
}
</style>
<script setup lang="ts">
import HeadNavs from './navs/HeadNavs.vue'
import {useHeader} from '@/hooks/layout/useHeader'
const {logoutHandle} = useHeader()
</script>
