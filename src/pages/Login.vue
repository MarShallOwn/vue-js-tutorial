<script setup lang="ts">
import { reactive } from 'vue'
import { getUserAPI } from '../service/index';

type formDataType = {
    email: string,
    password: string,
}

const formData = reactive<formDataType>({
    email: "",
    password: "",
})

const submitForm = async () => {
    try {
        const getUser = (await getUserAPI()).data as any;
        const getLastUserId: number = getUsers[getUsers!.length - 1].id;

        if(result.status === 201) {
            route.push({name: "Home"})
        } else {
            console.log("Error happened")
        }
    } catch (err) {
        console.log("Something went wrong")
    }
}
</script>

<template>
        <form class="container" @submit.prevent="submitForm">
        <label>Email</label>
        <input type="text" v-model="formData.email" />

        <label>Password</label>
        <input type="password" v-model="formData.password" />

        <button type="submit">Login</button>
        </form>
</template>

<style scoped>
.container {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
}

</style>
