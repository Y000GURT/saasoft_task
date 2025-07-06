<script setup lang="ts">
import { useAccountStore } from '../stores/account.store';

const accountStore = useAccountStore()

function handleAddDefaultAccount() {
  accountStore.addDefaultAccount()
}
</script>

<template>
  <div class="flex gap-3">
    <h1 class="text-2xl font-medium">Учетные записи</h1>
    <ElButton
      size="large"
      class="!w-10"
      @click="handleAddDefaultAccount"
    >
      <ElIcon size="20">
        <Plus />
      </ElIcon>
    </ElButton>
  </div>
</template>