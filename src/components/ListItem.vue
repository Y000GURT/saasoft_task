<template>
        <textarea type="text" rows="1" maxlength="50" class="account-list__marker" v-model.trim="marker" @blur="changeMarker"></textarea>
        <select class="account-list__type" v-model="type"> 
            <option value="local">Локальная</option>
            <option value="lcdp">LCDP</option>
        </select>   
        <input 
            type="text" 
            maxlength="100" 
            :class="['account-list__login', type === 'lcdp' ? 'account-list__login-long' : '', isRightLogin ? '' : 'account-list__login_red']" 
            @blur="changeLogin" 
            v-model.trim="login">
        <input 
            v-if="type === 'local'" 
            maxlength="100" 
            :class="['account-list__password', isRightPass ? '' : 'account-list__password_red']" 
            type="password" 
            @blur="changePassword" 
            v-model.trime="password">
        <button @click="deleteAccount" class="account-list__delete">
            <img src="../img/delete.svg">
        </button>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue'
import { useAccountStore } from '../stores/accounts.ts'

const accountStore = useAccountStore()

interface Marker {
    text: string
}
const props = defineProps<{
    id: number,
    marker: Marker[],
    type: string,
    login: string,
    password: string | null,
}>()
const type = ref(props.type)
const login = ref(props.login)
const password = ref(props.password)
const isRightLogin = ref(true)
const isRightPass = ref(true)

const resMarker = computed(() => {
    let res = ''
    for (let item of props.marker) {
        res += item.text + ';'
    }
    return res.slice(0, res.length - 1)
})
const marker = ref(resMarker.value)

const arrayMarker = computed(() => {
    return marker.value.split(';').map(item => ({ text: item }))
})
function deleteAccount() {
    accountStore.deleteAccount(props.id)
}
function changeMarker() {
    if (marker.value.includes(';')) {
        accountStore.changeMarker(props.id, arrayMarker.value)
    }
    else {
        accountStore.changeMarker(props.id, [{text: marker.value}])
    }
}
function changeLogin() {
    const regex = /[^a-zA-Z0-9]/g  // латинские символы и цифры
    if (login.value.length < 4) {
        isRightLogin.value = false
    }
    else if (regex.test(login.value)) {
        isRightLogin.value = false
    }
    else {
        isRightLogin.value = true
    }

    if (type.value === 'lcdp') {
        if (isRightLogin.value) {
            editAccount(null)
            return
        }
    }
    if (isRightPass.value && isRightLogin.value && password.value?.length){
        editAccount(password.value)

    }
}
function changePassword() {
    const regex = /[^a-zA-Z0-9]/g // латинские символы и цифры
    if (password.value) {
        if (password.value.length < 4) {
            isRightPass.value = false
        }
        else if (regex.test(password.value)) {
            isRightPass.value = false
        }
        else {
            isRightPass.value = true
        }

        if (isRightLogin.value && isRightPass.value && login.value.length){
            editAccount(password.value)
        }
    }
}

function editAccount(pass: string | null) {
    accountStore.editAccount(props.id, {
        id: props.id,
        marker: arrayMarker.value,
        type: type.value,
        login: login.value,
        password: pass,
    })
    console.log(accountStore.accounts)
}
watch(type, () => {
    accountStore.changeType(props.id, type.value)
})
</script>

<style lang="scss" scoped>

%input {
    border: solid 1px rgb(106, 119, 130);
    border-radius: 3px;
    outline: none;
    padding: 0.5rem 0.5rem;
    min-width: 0;
}
.account-list__marker {
    resize: none;
    overflow: hidden;
    @extend %input;
}
.account-list__type {
    @extend %input;
}
.account-list__login, .account-list__password{
    @extend %input
}
.account-list__login_red, .account-list__password_red {
    border: solid 1px red;
}
.account-list__login-long {
    grid-column: span 2;
}
.account-list__delete {
    padding: 0.3rem;

    justify-self: end;

    display: flex;
    justify-content: center;
    align-items: center;
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
</style>