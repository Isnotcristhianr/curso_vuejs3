import { initializeApp } from 'firebase/app'
//auth
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
//firestore
import { getFirestore } from 'firebase/firestore'
//storage
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

//initialize firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(FirebaseApp)

//providers
export const googleProvider = new GoogleAuthProvider()

//storage
export const storage = getStorage(FirebaseApp)

//firestore
export const firestore = getFirestore(FirebaseApp)

// here we can export reusable database references
export const storageRef = getStorage(FirebaseApp)
