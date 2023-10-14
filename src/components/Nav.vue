<script setup lang="ts">
</script>

<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'Register' }">Register</router-link>
        <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    column-gap: 10px;
}
</style>
