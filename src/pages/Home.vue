<template>
  <div ref="chartRef" style="width: calc(100% - 16px); height: 500px"></div>
</template>
<script setup lang="ts">
import { useHome } from "@/hooks/home/useHome";
const { chartRef } = useHome();
</script>
