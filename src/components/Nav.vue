<script setup lang="ts">
import { useUserStore } from "../stores/UserStore";


const userStore = useUserStore();

const handleLogout = () => {
    userStore.logoutUser()
}

</script>

<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'Register' }">Register</router-link>
        <router-link :to="{ name: 'Login' }">Login</router-link>
        <router-link :to="{ name: 'Jobs' }">Jobs</router-link>


        <div v-if="userStore.isLoggedIn">
           <p>hello {{ userStore.user && userStore.user.email }}</p> 
           <button @click="handleLogout">logout</button>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    column-gap: 10px;
}
</style>
