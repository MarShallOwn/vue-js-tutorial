<script setup lang="ts">
import { reactive } from 'vue'
import { getUserByEmailAPI } from '../service/index';
import { useUserStore } from '../stores/UserStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore();

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
        const result = await getUserByEmailAPI(formData.email);

        if(result.status === 200) {
            const user = result.data as any;
            if(user[0].password === formData.password) {
                userStore.loginUser(formData);
                router.push("/");
            }
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
