<template>
  <el-sub-menu v-if="menu.children.length" :index="menu.index">
    <template #title>
      <span>{{ menu.label }}</span>
    </template>
    <template v-for="(child, i) in menu.children">
      <MenuTree :menu="child"></MenuTree>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.index">
    {{ menu.label }}
  </el-menu-item>
</template>
<script setup lang="ts">
import {IMenuItem} from '@/interface'
defineProps<{
  menu: IMenuItem
}>()
</script>
