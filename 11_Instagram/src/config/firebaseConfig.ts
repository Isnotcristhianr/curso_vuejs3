import { initializeApp } from 'firebase/app'
//auth
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
//firestore
import { getFirestore } from 'firebase/firestore'
//storage
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBD88KCWHhVFg3BWrRX5M38clppuzBmFUM',
  authDomain: 'instafire-2402e.firebaseapp.com',
  projectId: 'instafire-2402e',
  storageBucket: 'instafire-2402e.firebasestorage.app',
  messagingSenderId: '688047316378',
  appId: '1:688047316378:web:e29f0f4b0447cb91122e23',
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
