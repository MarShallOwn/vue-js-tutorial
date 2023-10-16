<script setup lang="ts">
import { useUserStore } from "../stores/UserStore";


const userStore = useUserStore();

const handleLogout = () => {
    userStore.logoutUser()
}

</script>

<template>
    <div class="nav">
        <div v-if="userStore.isLoggedIn">
           <p>hello {{ userStore.user && userStore.user.email }}</p> 
           <router-link :to="{ name: 'Profile' }">Profile</router-link>
           <button @click="handleLogout">logout</button>
        </div>
        <div v-else>
            <router-link to="/">Home</router-link>
            <router-link :to="{ name: 'Register' }">Register</router-link>
            <router-link :to="{ name: 'Login' }">Login</router-link>
            <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    column-gap: 10px;
}

.nav div {
    display: flex;
    column-gap: 10px;
}
</style>
