type ProtectedRoutes = {
    name: string,
    access: "unauth" | "auth"
}



export const protectedRoutes: ProtectedRoutes[]  = [
    {
        name: "Login",
        access: "unauth"
    },
    {
        name: "Profile",
        access: "auth"
    },
    {
        name: "Register",
        access: "unauth"
    }
]