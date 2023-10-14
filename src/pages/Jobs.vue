<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getJobsAPI } from '../service/index';

type Job = {
    id: number,
    title: string,
    desc: string
}

type State = {
    jobs: Job[]
}

    const router = useRouter();
    
    const state = reactive<State>({jobs: []});


    onMounted(async () => {
        try {
            const result = await getJobsAPI<Job[]>();

            state.jobs = result.data;
        } catch(err) {
            console.log(err);
        }

    })

    const goToJob = (jobId: number) => {
        router.push({name: 'JobDetails', params: {id: jobId}});
    }

</script>

<template>
    <div>
        <h1>Jobs</h1>
        <div>
            <div v-for="job in state.jobs" :key="job.id">
                <h3>{{ job.title }}</h3>
                <router-link :to="{name: 'JobDetails', params: {id: job.id}}">Show Details</router-link>
                <button class="detail-btn" @click="goToJob(job.id)">Show Job Details</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detail-btn {
    display: block;
}
</style>
