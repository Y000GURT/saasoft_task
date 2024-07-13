<template>
    <div class="account-list">
        <div class="account-list__title">Метки</div>
        <div class="account-list__title">Тип записи</div>
        <div class='account-list__title'>Логин</div>
        <div class="account-list__title account-list__title-pass">Пароль</div>

        <ListItem 
            v-for="item in accountStore.accounts" 
            :key="item.id"
            :id="item.id"
            :marker="item.marker"
            :type="item.type"
            :login="item.login"
            :password="item.password"
        ></ListItem>    
            
    </div>
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue'
import { useAccountStore } from '../stores/accounts.ts'

const accountStore = useAccountStore()

</script>

<style lang="scss" scoped>
.account-list {
    margin-top: 2.5rem;

    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr 2rem;
    align-items: center;
    gap: 5px 10px;

}
.account-list__title {
    font-size: 1.4rem;
    color: #585858;
}
.account-list__title-pass {
    grid-column: span 2;
}
.account-list__title-login {
    grid-column: span 2;
}
</style>