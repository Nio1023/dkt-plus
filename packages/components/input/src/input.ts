import { useSizeProp } from '@dkt-plus/hooks'

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  size: useSizeProp,
  disabled: Boolean,
  placeholder: String,
  modelValue: {
    type: [String, Number, Object],
    default: ''
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  }
}
