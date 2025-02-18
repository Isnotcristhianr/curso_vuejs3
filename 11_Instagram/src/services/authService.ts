import { AuthRepository } from '@/domain/repository/auth/auth.repository'
import { UserModel } from '@/database/user/user.model'

export class AuthService {
  //inyeccion de dependencias
  constructor(private readonly authRepository: AuthRepository) {}

  //? sign in with email and password
  public async signInEmailPassword(email: string, password: string) {
    console.log('signInEmailPassword', email, password)
    try {
      const user = await this.authRepository.signInEmailPassword(email, password)
      const userModel = new UserModel(user.user)
      await userModel.createUser(user.user)
      return user
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  //? register with email and password
  public async registerEmailPassword(email: string, password: string) {
    console.log('registerEmailPassword', email, password)
    try {
      const user = await this.authRepository.registerEmailPassword(email, password)
      const userModel = new UserModel(user.user)
      await userModel.createUser(user.user)
      return user
    } catch (error) {
      console.error('Error al registrar usuario:', error)
    }
  }

  //? sign out
  public signOut() {
    console.log('signOut')
    return this.authRepository.signOut()
  }

  //! sign in with google
  public async signInWithGoogle() {
    console.log('signInWithGoogle')
    try {
      const userCredential = await this.authRepository.signInWithGoogle()

      if (!userCredential.user) {
        throw new Error('No se encontró el usuario')
      }

      const userModel = new UserModel(userCredential.user)
      await userModel.createUser(userCredential.user)
      return userCredential
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error)
    }
  }
}
