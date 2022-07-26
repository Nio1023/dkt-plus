import { computed, getCurrentInstance } from 'vue'
import { fromPairs } from '@dkt-plus/utils'

import type { ComputedRef } from 'vue'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: Array<string>
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export const useAttrs = (params: Params = {}): ComputedRef<Record<string, unknown>> => {
  const { excludeKeys = [], excludeListeners = false } = params
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  const instance = getCurrentInstance()
  console.log(Object.entries(instance?.proxy?.$attrs!))
  if (!instance) {
    console.warn(
      '[use-attrs]: getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function'
    )
    return computed(() => ({}))
  }
  return computed(() =>
    fromPairs(
      Object.entries(instance.proxy?.$attrs!).filter(
        ([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))
      )
    )
  )
}
