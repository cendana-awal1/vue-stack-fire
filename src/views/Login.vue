<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import { useAuthFire} from "../stores/auth";

const authFire = useAuthFire();
const router = useRouter();

const username = ref('')
const password = ref('')
const setUser = (user) => {
    authFire.setUser(user);
    router.push('/');
}

const login = ()=>{
    authFire.login(username.value, password.value)
}

// const login = ()=>{
//     signInWithEmailAndPassword(auth, username.value, password.value)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user)
//         router.push('/')

//     })
//     .catch((error) => { 
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//     });
// }


</script>