<script setup>
import { RouterLink } from 'vue-router';
import { useAuthFire } from '../stores/auth';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
const authFire = useAuthFire();
const logout = () => {
    authFire.logout();
}
const user = computed(() => authFire.user);
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <p>Selamat Datang {{user?.email}}</p>
    <p>
      <RouterLink to="/about">About</RouterLink>
    </p>
    <button @click="logout">LogOut</button>
  </main>
</template>
