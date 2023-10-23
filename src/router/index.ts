import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Register from "../pages/Register.vue"
import Login from "../pages/Login.vue"
import Jobs from "../pages/Jobs.vue"
import Profile from "../pages/Profile.vue"
import JobDetails from "../pages/JobDetails.vue"
import Blog from "../pages/Blog.vue"
import NotFound from "../components/NotFound.vue"
import { protectedRoutes } from "../constant/protectedRoutes"
import { useUserStore } from "../stores/UserStore"

const systemRoutes = [
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
    {
        name: "blog",
        path: "/blogs/:id",
        component: Blog
    },
    {
        name: "Profile",
        path: "/profile",
        component: Profile
    },
          // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes: systemRoutes
})


router.beforeEach((to, from) => {
    const userStore = useUserStore();
    const protectedRoute = protectedRoutes.find(route => route.name === to.name);

    if(protectedRoute && protectedRoute.access === "auth" && !userStore.isLoggedIn.value) return { name: "Login" }

    if(protectedRoute && protectedRoute.access === "unauth" && userStore.isLoggedIn.value) return { name: "Home" }
});

export default router