<script setup lang="ts">
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore()

</script>

<template>
            <div>
                <h2>Profile</h2>
                <h3 v-if="userStore.isLoggedIn">{{ userStore.user?.email }} - {{ userStore.user?.id }}</h3>
            </div>
</template>

<style scoped>
</style>
