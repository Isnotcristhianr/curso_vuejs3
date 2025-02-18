import type { User } from 'firebase/auth'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { firestore } from '@/config/firebaseBase'

export class UserModel {
  private readonly COLLECTION_NAME = 'users'

  constructor(private readonly user: User) {}

  //? crear usuario
  public async createUser(user: User): Promise<void> {
    try {
      const userCollection = collection(firestore, this.COLLECTION_NAME)

      // crear el documento del usuario
      const userRef = doc(userCollection, user.uid)

      const userData = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        provider: user.providerData[0]?.providerId || 'email',
        isActive: true,
      }

      //merge para no sobrescribir datos existentes
      await setDoc(userRef, userData, { merge: true })

      console.log('Usuario creado/actualizado en Firestore:', this.user.uid)
    } catch (error) {
      console.error('Error al crear/actualizar usuario en Firestore:', error)
      throw error
    }
  }

  //? obtener usuario
  public async getUser() {
    try {
        const userRef = doc(firestore, this.COLLECTION_NAME, this.user.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
            return userDoc.data() as User
        } else {
            console.log('No se encontró el usuario en Firestore:', this.user.uid)
            return null
        }
    } catch (error) {
      console.error('Error al obtener usuario en Firestore:', error)
      throw error
    }
  }
}
