import { defineStore } from "pinia"
import type { Account } from "../types/account.types"
import { ref } from "vue"

export const useAccountStore = defineStore('account-store', () => {
  const accounts = ref<Account[]>([])

  function addDefaultAccount() {
    accounts.value.push({
      id: Date.now(),
      tags: [],
      type: 'local',
      login: '',
      password: ''
    })
  }

  function removeAccount(id: number) {
    accounts.value = accounts.value.filter((account) => account.id !== id)
    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  function saveAccount(account: Account, id: number) {
    accounts.value = accounts.value.map((acc) => acc.id === id ? account : acc)
    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  return {
    accounts,
    addDefaultAccount,
    removeAccount,
    saveAccount,
  }
})