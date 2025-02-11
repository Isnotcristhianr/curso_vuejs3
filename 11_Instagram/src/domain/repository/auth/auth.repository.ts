import type { UserCredential } from "firebase/auth";

export abstract class AuthRepository {
    abstract signInEmailPassword(email: string, password: string): Promise<UserCredential>
    abstract signInWithGoogle(): Promise<UserCredential>
    //cerrar sesion
    abstract signOut(): Promise<void>
    //registrar con email y password
    abstract registerEmailPassword(email: string, password: string): Promise<UserCredential>
}