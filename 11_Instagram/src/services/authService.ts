import { AuthRepository } from "@/domain/repository/auth/auth.repository";

export class AuthService {

//inyeccion de dependencias
constructor(private readonly authRepository: AuthRepository){}

//? sign in with email and password
public signInEmailPassword(email: string, password: string){
    console.log('signInEmailPassword', email, password)
    return this.authRepository.signInEmailPassword(email, password)
}

//? register with email and password
public registerEmailPassword(email: string, password: string){
    console.log('registerEmailPassword', email, password)
    return this.authRepository.registerEmailPassword(email, password)
}

//? sign out
public signOut(){
    console.log('signOut')
    return this.authRepository.signOut()
}

//! sign in with google
public signInWithGoogle(){
    console.log('signInWithGoogle')
    return this.authRepository.signInWithGoogle()
}



}