<template>
  <button class="dkt-button" :class="classObject">
    <slot />
  </button>
</template>
<script setup lang="ts">
  import { buttonProps } from './button'
  import { computed } from 'vue'

  defineOptions({
    name: 'DktButton'
  })

  const props = defineProps(buttonProps)

  const classObject = computed(() => ({
    ['dkt-button--' + props.size]: props.size != 'default',
    ['dkt-button--' + props.type]: props.type != 'default',
    loading: props.loading,
    disabled: props.disabled
  }))
</script>
<style lang="less" scoped>
  @import '../style/index.less';
</style>
