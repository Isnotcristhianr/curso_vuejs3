import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import { UserModel } from '../../database/user/user.model';
import { updateProfile } from 'firebase/auth'

interface UserState{
    currentUser: User | null
    isLoading: boolean
}

export const useUserStore = defineStore('user', {

    state: ():UserState => ({
        currentUser: null,
        isLoading: false
    }),

    getters: {
        getCurrentUser: (state) => {
            console.log('Current user:', state.currentUser)
            return state.currentUser
        },
        getUserPhotoURL: (state) => {
            console.log('User photo URL:', state.currentUser?.photoURL)
            return state.currentUser?.photoURL
        },
        getUserDisplayName: (state) => {
            console.log('User display name:', state.currentUser?.displayName)
            return state.currentUser?.displayName
        },
        getUserEmail: (state) => {
            console.log('User email:', state.currentUser?.email)
            return state.currentUser?.email
        },
        getUserUid: (state) => {
            console.log('User UID:', state.currentUser?.uid)
            return state.currentUser?.uid
        },
        getIsLoading: (state) => {
            console.log('Is loading:', state.isLoading)
            return state.isLoading
        }
    },

    actions: {
        async setUser(user: User){
            console.log('Setting user:', user)
            this.isLoading = true
            try{
                this.currentUser = user
                this.isLoading = false

                const userModel = new UserModel(user)
                await userModel.createUser(user)
                this.currentUser = {...user}
                console.log('User set successfully')
            }catch(error){
                console.log('Error setting user:', error)
                this.isLoading = false
            }
        },
        clearUser(){
            this.currentUser = null
            this.isLoading = false
        },
        async updateUserProfile(displayName?: string, photoURL?: string){
            if(!this.currentUser){
                console.log('No user to update')
                return
            }

            console.log('Updating user profile:', displayName, photoURL)
            this.isLoading = true
            try{
                await updateProfile(this.currentUser, {
                    displayName,
                    photoURL
                })
                console.log('User profile updated successfully')
            }catch(error){
                console.log('Error updating user profile:', error)
                this.isLoading = false
            }finally{
                this.isLoading = false
            }
        }
        
    }
})
