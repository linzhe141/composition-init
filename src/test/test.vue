<template>
  {{current}}
  <div></div>
  <button @click="add(1)">+1</button>
  <button @click="dec(1)">-1</button>
  <button @click="reset">重置</button>
</template>
<script setup lang="ts">
import { useCount } from './useCount';
const {current, add, dec, set, reset } = useCount(0)
</script>