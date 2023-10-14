<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

type formDataType = {
    email: string,
    password: string,
    gender: string,
    technologies: string[],
    position: string,
    skills: string[],
}

const currentSkill = ref<string>("")

const formData = reactive<formDataType>({
    email: "",
    password: "",
    gender: "male",
    technologies: [],
    position: "",
    skills: [],
})


watch(formData, () => {
    console.log(formData);
})

const handleAddingSkills = (e: Event) => {
    if((e as KeyboardEvent).key === 'Enter') {
        formData.skills.push(currentSkill.value);
        currentSkill.value = "";
    }
}

const removeSkill = (removedSkill: string) => {
    formData.skills = formData.skills.filter((skill: string) => skill !== removedSkill);
}
</script>

<template>
    <div class="container">
        <label>Email</label>
        <input type="text" v-model="formData.email" />

        <label>Password</label>
        <input type="password" v-model="formData.password" />

        <div>
            <input type="radio" v-model="formData.gender" value="male" label="male" />
            <label>Male</label>
            <input type="radio" v-model="formData.gender" value="female" label="female" />
            <label>Female</label>
        </div>


        <div>
        <input v-model="formData.technologies" type="checkbox" id="tech1" name="technology" value="ASP.NET">
        <label for="tech1"> ASP.NET</label><br>
        <input v-model="formData.technologies" type="checkbox" id="tech2" name="technology" value="NodeJS">
        <label for="tech2"> NodeJS</label><br>
        <input v-model="formData.technologies" type="checkbox" id="tech3" name="technology" value="Flask">
        <label for="tech3"> Flask</label><br>
        </div>

        <select v-model="formData.position" name="position" id="position">
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="ui/ux">UI/UX</option>
        <option value="embedded">Embedded</option>
        </select>

        <label>Skills</label>
        <input type="text" v-model="currentSkill" @keypress="handleAddingSkills" />

        <div class="skills-container">
            <span  v-for="skill in formData.skills" :key="skill" class="skill-tag" @click="removeSkill(skill)">{{ skill }}</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 5px;
}

.skill-tag {
    padding: 10px 20px;
    background-color: lightgray;
    border-radius: 1000px;
}
</style>
