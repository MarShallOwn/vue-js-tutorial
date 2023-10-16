import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const user = ref(null);
    const isLoggedIn = ref(false);

    const loginUser = (userInfo: any) => {
        user.value = userInfo;
        isLoggedIn.value = true;
    }
    const logoutUser = () => {
        user.value = null;
        isLoggedIn.value = false;
    }

    return {
        user,
        isLoggedIn,
        loginUser,
        logoutUser
    }
    },
    {
        persist: true
    }
)