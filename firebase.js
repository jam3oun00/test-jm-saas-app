// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyCye1en8TIJ0_Wa7gEqKcMdPn6tq2ccVQ0',
   authDomain: 'jm-saas-app.firebaseapp.com',
   projectId: 'jm-saas-app',
   storageBucket: 'jm-saas-app.appspot.com',
   messagingSenderId: '648330865298',
   appId: '1:648330865298:web:89c3d1266fbf0fc2f6544b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default {
   db,
   auth,
   createUserWithEmailAndPassword,
}
