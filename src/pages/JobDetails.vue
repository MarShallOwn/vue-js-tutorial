<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useRoute } from 'vue-router'
import { getJobAPI } from '../service';

type Job = {
    id: number,
    title: string,
    desc: string
}

type State = {
    job: Job
}

const state= reactive<State>({
    job: {}
})
const route = useRoute();  
const jobId = route.params.id as string; // read parameter id (it is reactive) 


onMounted(async () => {
        try {
            const result = await getJobAPI<Job>(parseInt(jobId));

            state.job = result.data;
        } catch(err) {
            console.log(err);
        }

    })
</script>

<template>
            <div>
                <h3>{{ state.job.title }} - {{ state.job.id }}</h3>
                <p>{{ state.job.desc }}</p>
            </div>
</template>

<style scoped>
</style>
