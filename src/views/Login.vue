<template>
  <div>login</div>
  <div>
    <el-button @click="loginHandle">login</el-button>
  </div>
</template>
<style scoped lang="scss"></style>
<script setup lang="ts">
import {useLogin} from '@/hooks/login/useLogin'
const {loginHandle} = useLogin()
</script>
