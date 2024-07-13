<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">Учетные записи</h1>
      <button class="header__plus" @click="addAccount">
        <img src="./img/plus.svg">
      </button>
    </header>

    <div class="warning">
      <img src="./img/warning.svg">
      <p>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>

    <AccountList></AccountList>
  </div>
</template>

<script setup lang="ts">
import AccountList from '../src/components/AccountList.vue'
import { useAccountStore } from './stores/accounts.ts'
import { onBeforeMount } from 'vue'

const accountStore = useAccountStore()

onBeforeMount(() => {
  const accs = localStorage.getItem('accounts')
  if (accs) {
    accountStore.changeAccounts(JSON.parse(accs))
  }
})

function addAccount() {
  accountStore.addAccount({
    id: Date.now(),
    marker: [{text: ''}],
    type: 'local',
    login: '',
    password: '',
  })
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  max-width: 1000px;
  padding: 50px 100px;
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
.header__plus {
  padding: 0.3rem;
  border: solid 1px grey;
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1.1);
  }
  >img {
    height: 2rem;
  }
}
.warning {
  background-color: rgb(194, 226, 254);
  padding: 0.3rem;
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  column-gap: 1rem;
  >img {
    height: 2rem;
  }
  >p {
    font-size: 1.4rem;
  }
}
</style>
