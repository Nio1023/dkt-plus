<template>
  <button class="dkt-button" :class="classObject">
    <slot />
  </button>
</template>
<script setup lang="ts">
  import type { buttonTyps, buttonSizes } from './button'
  import type { TupleToUni } from '@dkt-plus/utils/types'
  import { computed } from 'vue'

  interface ButtonProps {
    type?: TupleToUni<buttonTyps>
    size?: TupleToUni<buttonSizes>
    loading?: boolean
    disabled?: boolean
  }

  defineOptions({
    name: 'DktButton'
  })

  const { type = 'default', size = 'default', loading = false, disabled = false } = defineProps<ButtonProps>()

  const classObject = computed(() => ({
    ['dkt-button--' + size]: size != 'default',
    ['dkt-button--' + type]: type != 'default',
    loading,
    disabled
  }))
</script>
<style lang="less" scoped>
  @import '../style/index.less';
</style>
