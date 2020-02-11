import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseInitializedApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  clientId: process.env.VUE_APP_FIREBASE_CLIENT_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
})

export default firebaseInitializedApp

export const firestore = firebaseInitializedApp.firestore()

export const storage = firebaseInitializedApp.storage()
