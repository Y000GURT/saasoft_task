import { defineStore } from 'pinia'

interface Marker {
    text: string
}
interface Account {
    id: number,
    marker: Marker[],
    type: string,
    login: string,
    password: string | null,
}
interface State {
    accounts: Account[]
}

export const useAccountStore = defineStore('accountStore', {
    state: (): State => ({
        accounts: [{
            id: 1,
            marker: [{text: 'крутой'}],
            type: 'local',
            login: 'almaz',
            password: '123456'
        }]
    }),
    actions: {
        addAccount(account: Account) {
            this.accounts.push(account)
        },
        deleteAccount(id: number) {
            this.accounts = this.accounts.filter(item => item.id !== id)
            localStorage.setItem('accounts', JSON.stringify(this.accounts.filter(item => item.login)))
        },
        changeType(id: number, type: string) {
            const idx = this.accounts.findIndex(item => item.id === id)
            this.accounts[idx].type = type
            if(type === 'lcdp') {
                this.accounts[idx].password = null
            }
            
            localStorage.setItem('accounts', JSON.stringify(this.accounts.filter(item => item.login)))
        },
        changeMarker(id: number, marker: Marker[]) {
            const idx = this.accounts.findIndex(item => item.id === id)
            this.accounts[idx].marker = marker

            localStorage.setItem('accounts', JSON.stringify(this.accounts.filter(item => item.login)))
        },
        editAccount(id: number, account: Account) {
            const idx = this.accounts.findIndex(item => item.id === id)
            this.accounts[idx] = account

            localStorage.setItem('accounts', JSON.stringify(this.accounts.filter(item => item.login)))
        },
        changeAccounts(accs: Account[]) {
            this.accounts = accs
        }
    }
})
