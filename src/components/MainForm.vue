<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAccountStore } from '../stores/account.store';
import { onMounted } from 'vue';

const accountStore = useAccountStore()
const { accounts } = storeToRefs(accountStore)

onMounted(() => {
  accounts.value = JSON.parse(localStorage.getItem('accounts') || '[]')

  if (accounts.value.length === 0) {
    accountStore.addDefaultAccount()
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-[1fr_1fr_1fr_1fr_30px] gap-x-2">
      <p>Метки</p>
      <p>Тип записи</p>
      <p>Логин</p>
      <p class="col-span-2">Пароль</p>
    </div>
    <AccountForm
      v-for="account in accounts"
      :key="account.id"
      :account="account"
    />
  </div>
</template>
