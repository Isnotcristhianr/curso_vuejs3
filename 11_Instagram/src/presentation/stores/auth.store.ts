//vue
import { defineStore } from "pinia";
import { reactive } from "vue";
//use cases
import { LoginEmailandPasswordUseCases } from "@/domain/use-cases/auth/loginEmailandPassword.use_cases";
import { LoginGoogleUseCases } from "@/domain/use-cases/auth/loginGoogle.use_cases";
import { LogoutUseCases } from "@/domain/use-cases/auth/logout.use_cases";
import { RegisterUseCases } from "@/domain/use-cases/auth/register.uses_cases";
//helpers
import { verifyPassword } from "@/helpers/verifyPassword";

const AuthFormInitialState = {
    email: '',
    password: '',
    confirmPassword: '',
}

export const useAuthStore = defineStore('auth', () => {
    //state
    const authForm = reactive(AuthFormInitialState)

   //reset 
   const resetAuthForm = () => {
    authForm.email = AuthFormInitialState.email
    authForm.password = AuthFormInitialState.password
    authForm.confirmPassword = AuthFormInitialState.confirmPassword
   }

   //? login email and password
   const LoginEmailandPassword = async () => {
    try{
       const user = await LoginEmailandPasswordUseCases.execute(authForm.email, authForm.password)
        resetAuthForm()
        if(!user){
            throw new Error('User not found')
        }
        return user

    }catch(error){
        console.log(error)
        resetAuthForm()
    }
   }

   //? login google
   const LoginGoogle = async () => {
    try{
        const user = await LoginGoogleUseCases.execute()
        resetAuthForm()
        if(!user){
            throw new Error('User not found')
        }
        return user
    }catch(error){
        console.log(error)
        resetAuthForm()
    }
   }

   //? logout
   const Logout = async () => {
    try{
        await LogoutUseCases.execute()
        
    }catch(error){
        console.log(error)
    }
   }

   //? register
   const Register = async () => {
    try{
        if(!verifyPassword(authForm.password, authForm.confirmPassword)){
            throw new Error('Passwords do not match')
        }

        const user = await RegisterUseCases.execute(authForm.email, authForm.password)
        resetAuthForm()

        if(!user){
            throw new Error('User not found')
        }
        return user
        
    }catch(error){
        console.log(error)
        resetAuthForm()
    }
   }

   return {
    authForm,
    resetAuthForm,
    LoginEmailandPassword,
    LoginGoogle,
    Logout,
    Register
   }
})












