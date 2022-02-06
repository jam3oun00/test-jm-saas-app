import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCye1en8TIJ0_Wa7gEqKcMdPn6tq2ccVQ0',
   authDomain: 'jm-saas-app.firebaseapp.com',
   projectId: 'jm-saas-app',
   storageBucket: 'jm-saas-app.appspot.com',
   messagingSenderId: '648330865298',
   appId: '1:648330865298:web:89c3d1266fbf0fc2f6544b',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export {
   db,
   ////////
   // auth
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   /////////////
   // firestore
   collection,
   getDocs,
   getFirestore,
   orderBy,
}
