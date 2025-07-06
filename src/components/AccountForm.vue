<script setup lang="ts">
import { onMounted } from 'vue';
import { OPTIONS } from '../consts/account.consts';
import type { Account } from '../types/account.types';
import { formToStore, storeToForm } from '../mappers/account.mapper';
import { useAccountStore } from '../stores/account.store';
import type { AccountForm } from '../types/account-form.types';
import { ref } from 'vue';
import { useValidate } from '../composables/useValidate';

const props = defineProps<{
  account: Account
}>()

const accountStore = useAccountStore()
const { isRequired } = useValidate()

const formRef = ref()
const formRules = ref({
  login: [isRequired()],
  password: [isRequired()],
})
const form = ref<AccountForm>({
  tags: '',
  type: 'local',
  login: '',
  password: null
})

function handleRemoveAccount() {
  accountStore.removeAccount(props.account.id)
}

async function handleSaveAccount() {
  const isValid = await formRef.value.validate()

  if (!isValid)
    return

  if (form.value.type === 'ldap')
    form.value.password = null

  const account = formToStore(form.value)
  accountStore.saveAccount(account, props.account.id)
}

onMounted(() => {
  form.value = storeToForm(props.account)
})
</script>

<template>
  <ElForm
    ref="formRef"
    :model="form"
    :rules="formRules"
    class="grid grid-cols-[1fr_1fr_1fr_1fr_30px] gap-x-2"
  >
    <ElFormItem>
      <ElInput
        v-model="form.tags"
        maxlength="50"
        @blur="handleSaveAccount"
      />
    </ElFormItem>
    <ElFormItem>
      <ElSelect
        v-model="form.type"
        @change="handleSaveAccount"
      >
        <ElOption
          v-for="option in OPTIONS"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </ElSelect>
    </ElFormItem>
    <ElFormItem
      prop="login"
      :class="form.type === 'ldap' ? 'col-span-2' : ''">
      <ElInput
        v-model="form.login"
        maxlength="100"
        @blur="handleSaveAccount"
      />
    </ElFormItem>
    <ElFormItem v-if="form.type === 'local'" prop="password">
      <ElInput
        v-model="form.password"
        maxlength="100"
        type="password"
        @blur="handleSaveAccount"
      />
    </ElFormItem>

    <ElFormItem>
      <ElButton
        link
        @click="handleRemoveAccount"
      >
        <ElIcon size="28">
          <Delete />
        </ElIcon>
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>