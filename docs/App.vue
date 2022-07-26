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
  <dkt-input placeholder="请填写" v-model="inputTest" size="large" maxlength="10">
    <template #prepend> Https:// </template>
    <!-- <template #prefix>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-calendar"></use>
      </svg>
    </template> -->
    <!-- <template #suffix>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-calendar"></use>
      </svg>
    </template> -->
    <template #append> .com </template>
  </dkt-input>
  {{ inputTest }}
</template>
<style lang="less"></style>
