import type { User } from "firebase/auth";

export abstract class UserRepository {
    //? crear usuario
    abstract createUser(user: User): void

    //? obtener usuario
    abstract getUser(uid: string): Promise<User>    
    
}