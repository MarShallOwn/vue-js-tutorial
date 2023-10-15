import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
        isLoggedIn: false
    }),
    actions: {
        loginUser(userInfo: any) {
            this.user = userInfo;
            this.isLoggedIn = true;
        },
        logoutUser() {
            this.user = null;
            this.isLoggedIn = false;
        }
    }
})