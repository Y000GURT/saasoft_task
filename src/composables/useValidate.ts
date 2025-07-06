import type { FormItemRule } from "element-plus";

export function useValidate() {
  function isRequired(options?: { trigger?: 'blur' | 'change' }): FormItemRule {
    return {
      required: true,
      message: 'Поле обязательно для заполнения',
      trigger: options?.trigger || 'blur'
    }
  }

  return {
    isRequired
  }
}