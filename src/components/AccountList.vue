<template>
    <div class="account-list">
        <div class="account-list__title">Метки</div>
        <div class="account-list__title">Тип записи</div>
        <div class="account-list__title">Логин</div>
        <div class="account-list__title">Пароль</div>

        <ListItem></ListItem>    
            
    </div>
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue'
</script>

<style lang="scss" scoped>
.account-list {
    margin-top: 2.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    column-gap: 10px;
    row-gap: 5px;

}
.account-list__title {
    font-size: 1.4rem;
    color: #585858;
}
</style>