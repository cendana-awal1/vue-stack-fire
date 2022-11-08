<script setup>

import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useAuthFire } from "./stores/auth";

const authFire = useAuthFire();

onBeforeMount(() => {
  authFire.fecthUser();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
