import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: {
            username: "marshmallow",
            firstname: "Marwan",
            lastname: "Samih",
            email: "marwan@gmail.com"
        },
        isLoggedIn: false
    })
})