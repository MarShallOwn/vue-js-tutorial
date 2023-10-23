<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useUserStore } from "../stores/UserStore";
import { formatPagesData } from "../utils/formatPagesData.js";

const router = useRouter();

const pages = ref([
  {
    pageId: 1,
    pageName: "عن الهيئة",
    subpages: [
      {
        pageId: 2,
        pageName: "2 عن الهيئة",
      },
      {
        pageId: 3,
        pageName: "3 عن الهيئة",
      },
    ],
  },
  {
    pageId: 10,
    pageName: "اعرف اكثر",
    subpages: [
      {
        pageId: 23,
        pageName: "2 اعرف اكثر",
      },
      {
        pageId: 33,
        pageName: "3 اعرف اكثر",
      },
    ],
  },
]);

formatPagesData(pages.value);


const goToPage = (pageId: number) => {
    router.push({name: "blog", params: {id: pageId}})
}

const userStore = useUserStore();

const handleLogout = () => {
  userStore.logoutUser();
};

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
    <div id="select-pages">
        <el-tree-select @change="goToPage" :data="pages" :render-after-expand="false" />
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

#select-pages .el-input__inner {
    background-color: red !important;
    font-size: 100px;
}
</style>
