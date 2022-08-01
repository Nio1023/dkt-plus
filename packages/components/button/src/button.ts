import { useSizeProp } from '@dkt-plus/hooks'

export const buttonProps = {
  type: {
    type: String,
    values: ['default', 'primary', 'success', 'warning', 'info', 'danger'],
    default: 'default'
  },
  size: useSizeProp,
  loading: Boolean,
  disabled: Boolean
}
