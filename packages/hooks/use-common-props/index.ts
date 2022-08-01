import { componentSizes } from '@dkt-plus/constants'

export const useSizeProp = {
  type: String,
  values: componentSizes,
  required: false,
  default: 'default'
} as const
