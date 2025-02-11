import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from 'firebase/auth'
import { AuthRepository } from '../../domain/repository/auth/auth.repository'
import { auth, googleProvider } from '../../config/firebaseBase'

export class AuthModel implements AuthRepository {
  //patron repositorio

  //? sign in with email and password
  public signInEmailPassword(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //? sign in with google
  public signInWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(auth, googleProvider)
  }

  //? sign out
  public signOut(): Promise<void> {
    return signOut(auth)
  }
  
  //? crear usuario con email y password
  public registerEmailPassword(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

}