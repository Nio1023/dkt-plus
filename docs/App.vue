<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({
    name: 'App'
  })
  function test() {
    alert('111')
  }
  const inputTest = ref('1')
  const isShowLimit = ref(false)
</script>

<template>
  <dkt-input
    placeholder="请填写"
    v-model="inputTest"
    size="large"
    maxlength="10"
    :show-word-limit="isShowLimit"
  ></dkt-input>
  {{ inputTest }}
  <dkt-button @click="isShowLimit = !isShowLimit">切换</dkt-button>
</template>
<style lang="less"></style>
