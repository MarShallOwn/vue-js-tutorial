<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';


const pageData = ref();
const route = useRoute()


onMounted(async () => {
    try {
        const res = await axios.get(`http://localhost-backend:8000/pages/${route.params.id}`);

        if(res.status === 200) {
            pageData.value = res.data;
        }
    } catch(err) {

    }
})
</script>

<template>
This is blog Page {{ route.params.id }}
</template>

<style scoped>
</style>