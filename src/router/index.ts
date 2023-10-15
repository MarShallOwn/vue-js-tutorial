import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Register from "../pages/Register.vue"
import Login from "../pages/Login.vue"
import Jobs from "../pages/Jobs.vue"
import JobDetails from "../pages/JobDetails.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Register",
        path: "/register",
        component: Register
    },
    {
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        name: "Jobs",
        path: "/jobs",
        component: Jobs
    },
    {
        name: "JobDetails",
        path: "/jobs/:id",
        component: JobDetails
    },
          // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router