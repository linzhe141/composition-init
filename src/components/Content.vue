<template>
  <div class="content flex-box flex-column">
    <div class="flex1 page-wrap">
      <el-scrollbar style="height: 100%">
        <component class="page" :is="componentName"></component>
      </el-scrollbar>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  background: #cdcdcd;
  overflow: auto;
  .page-wrap {
    height: 0;
    margin: 8px;
    .page {
      padding: 8px;
      background: #fff;
      border-radius: 4px;
    }
  }
}
</style>
<script setup lang="ts">
import { useContent } from "@/hooks/layout/useContent";
const { componentName } = useContent();
</script>
