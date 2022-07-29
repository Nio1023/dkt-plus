<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({
    name: 'App'
  })
  function test() {
    alert('111')
  }
  const inputTest = ref('1')
</script>

<template>
  <dkt-input placeholder="请填写" v-model="inputTest" size="large" maxlength="10" show-word-limit></dkt-input>
  {{ inputTest }}
</template>
<style lang="less"></style>
