<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, ref, watch, watchEffect } from 'vue'

type Section = {
      pageName: string,
      imageURL: string,
      section: {
        sectionTypesId: number,
        pageSectionSort: number,
        pageSectionName: string
      }
    }

    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const sections = ref<Section[]>([]);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect ran', search.value)
      console.log(names.value)
    })

    const sortedSections = computed(() => {
      return sections.value.sort((sec1, sec2) => sec1.section.pageSectionSort - sec2.section.pageSectionSort);
    })

    onMounted(async () => {
      try {
        const result = await axios.get("http://localhost:3000/sections");
      
      if(result.status === 200) {
        //sections.value = result.data.sort((sec1, sec2) => sec1.section.pageSectionSort - sec2.section.pageSectionSort);
        sections.value = result.data;
      }
      } catch(err) {
        console.log(err);
      }
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
    
    <div v-if="sections.length > 0">
      <div class="img-section" v-for="section in sortedSections">
        <img :src="section.imageURL" />
        <h2>{{ section.section.sectionTypesId }}</h2>
        <h2>{{ section.section.pageSectionName }}</h2>
        <h2>sort {{ section.section.pageSectionSort }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

.img-section img {
  width: 400px;
  height: 200px;
}
</style>
