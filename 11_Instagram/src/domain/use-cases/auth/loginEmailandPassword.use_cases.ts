import { AuthModel } from "@/database/auth/auth.model";
import { AuthService } from "@/services/authService";
import type { UserCredential } from "firebase/auth";

export class LoginEmailandPasswordUseCases {
    constructor(private readonly authService: AuthService){}

   static execute(email: string, password: string): Promise<UserCredential> {
    return new AuthService(new AuthModel()).signInEmailPassword(email, password)
   }
}