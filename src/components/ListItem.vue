<template>
        <textarea type="text" rows="1" class="account-list__marker"></textarea>
        <select class="account-list__type"> 
            <option value="">Локальный</option>
            <option value="">LCDP</option>
        </select>   
        <input type="text" class="account-list__login">
        <div class="account-list__pass-delete">
            <input type="password">
            <button>
                <img src="../img/delete.svg">
            </button>
        </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

%input {
    border: solid 1px rgb(106, 119, 130);
    border-radius: 3px;
    outline: none;
    padding: 2px 5px;
    height: 2rem;
}
.account-list__item {
    display: flex;
    justify-content: space-between;
}
.account-list__pass-delete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    >input {
        @extend %input;
    }
    >button {
        padding: 0.3rem;
        img {
            height: 1.6rem;
            &:hover {
                transform: scale(1.1);
            }
            &:active {
                transform: scale(1.2);
            }
        }
    }
}
.account-list__marker {
    resize: none;
    overflow: hidden;
    @extend %input;
}
.account-list__type {
    outline: none;
    @extend %input;
}
.account-list__login{
    @extend %input
}
</style>