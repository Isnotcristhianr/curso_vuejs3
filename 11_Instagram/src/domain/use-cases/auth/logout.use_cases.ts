import { AuthModel } from "@/database/auth/auth.model";
import { AuthService } from "@/services/authService";

export class LogoutUseCases {
    static async execute() {
        try{
            return await new AuthService(new AuthModel()).signOut()
        }catch(error){
            console.log(error)
        }
    }
}