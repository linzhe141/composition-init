<template>
  <el-menu
    class="sider-navs"
    router
    unique-opened
    :default-active="defaultActivePath"
  >
    <template v-for="(menu, i) in navs">
      <MenuTree :menu="menu"></MenuTree>
    </template>
  </el-menu>
</template>
<style lang="scss" scoped>
.sider-navs {
  background-color: transparent !important;
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
import {useMenuNavs} from '@/hooks/layout/useMenuNavs'
const {navs, defaultActivePath} = useMenuNavs()
</script>
