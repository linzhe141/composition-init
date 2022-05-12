<template>
  <el-menu
    v-if="HEADER"
    router
    class="head-navs"
    mode="horizontal"
    unique-opened
    :default-active="defaultActivePath"
    @select="handleSelect"
  >
    <template v-for="(menu, i) in headerMenuData">
      <MenuTree :menu="menu"></MenuTree>
    </template>
  </el-menu>
</template>
<style lang="scss">
.head-navs {
  background-color: transparent !important;
  &.el-menu--horizontal {
    border-bottom: none;
  }
  &.el-menu,
  .el-menu {
    --el-menu-item-height: 40px;
    background-color: transparent !important;
  }
  .el-sub-menu__title {
    height: 40px;
    background-color: transparent !important;
  }
  .el-sub-menu .el-menu-item {
    height: 40px;
    line-height: 40px;
    background-color: transparent !important;
  }
}
</style>
<script lang="ts" setup>
import MenuTree from './MenuTree.vue'
import {HEADER} from '@/config/global'
import {useHeadNavs} from '@/hooks/layout/useHeadNavs'
const {headerMenuData, defaultActivePath, handleSelect} = useHeadNavs()
</script>
