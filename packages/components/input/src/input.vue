<template>
  <div
    v-if="type != 'textarea'"
    class="dkt-input"
    :class="[
      {
        ['dkt-input--' + size]: size != 'default',
        'dkt-input--prepend': $slots.prepend,
        'dkt-input--append': $slots.append
      }
    ]"
  >
    <div v-if="$slots.prepend" class="dkt-input__prepend">
      <slot name="prepend" />
    </div>
    <div class="dkt-input__wrapper">
      <div v-if="$slots.prefix" class="dkt-input__prefix">
        <slot name="prefix" />
      </div>
      <input v-bind="$attrs" class="dkt-input__inner" @input="handleInput" :type="type" />
      <div v-if="$slots.suffix" class="dkt-input__suffix">
        <slot name="suffix" />
      </div>
    </div>
    <div v-if="$slots.append" class="dkt-input__append">
      <slot name="append" />
    </div>
  </div>
  <div v-else>
    <textarea name="" id="" cols="30" rows="10" v-bind="$attrs"></textarea>
  </div>
</template>
<script setup lang="ts">
  import type { inputSizes } from './input'
  import type { TupleToUni } from '@dkt-plus/utils/types'

  defineOptions({
    name: 'DktInput'
  })

  interface InputPorps {
    type?: string
    size?: TupleToUni<inputSizes>
  }

  interface InputEmits {
    (e: 'input', value: string): void
  }

  const { type = 'text', size = 'default' } = defineProps<InputPorps>()
  const emit = defineEmits<InputEmits>()

  const handleInput = (event: Event) => {
    let { value } = <HTMLInputElement>event.target
    emit('input', value)
  }
</script>
<style lang="less" scoped>
  @import '../style/index.less';
</style>
