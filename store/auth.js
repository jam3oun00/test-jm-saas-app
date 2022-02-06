import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/firebase'

export const state = () => ({
   user: null,
})

export const mutations = {
   setUser(state, user) {
      state.user = user
   },
}

export const actions = {
   // REGISTRATION
   registerWithEmailAndPassword({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
         createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
               console.log(user)
               commit('setUser', user)
               resolve(user)
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
   registerWithGoogle() {
      // return new Promise((resolve, reject) => {
      //    auth.signInWithPopup(new auth.GoogleAuthProvider())
      //       .then(({ user }) => {
      //          console.log(user)
      //          // commit('setUser', user)
      //          resolve(user)
      //       })
      //       .catch((error) => {
      //          const errorCode = error.code
      //          const errorMessage = error.message
      //          console.warn(errorCode, errorMessage)
      //          reject(error)
      //       })
      // })
   },
   registerWithFacebook() {
      // return new Promise((resolve, reject) => {
      //    auth.signInWithPopup(new auth.FacebookAuthProvider())
      //       .then(({ user }) => {
      //          console.log(user)
      //          // commit('setUser', user)
      //          resolve(user)
      //       })
      //       .catch((error) => {
      //          const errorCode = error.code
      //          const errorMessage = error.message
      //          console.warn(errorCode, errorMessage)
      //          reject(error)
      //       })
      // })
   },
   registerWithGithub() {
      // return new Promise((resolve, reject) => {
      //    auth.signInWithPopup(new auth.GithubAuthProvider())
      //       .then(({ user }) => {
      //          console.log(user)
      //          // commit('setUser', user)
      //          resolve(user)
      //       })
      //       .catch((error) => {
      //          const errorCode = error.code
      //          const errorMessage = error.message
      //          console.warn(errorCode, errorMessage)
      //          reject(error)
      //       })
      // })
   },

   // LOGIN
   loginWithEmailAndPassword({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
         signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
               console.log(user)
               commit('setUser', user)
               resolve(user)
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
   loginWithGoogle() {
      return new Promise((resolve, reject) => {
         auth
            .signInWithPopup(new auth.GoogleAuthProvider())
            .then(({ user }) => {
               console.log(user)
               // commit('setUser', user)
               resolve(user)
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
   loginWithFacebook() {
      return new Promise((resolve, reject) => {
         auth
            .signInWithPopup(new auth.FacebookAuthProvider())
            .then(({ user }) => {
               console.log(user)
               // commit('setUser', user)
               resolve(user)
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
   loginWithGithub() {
      return new Promise((resolve, reject) => {
         auth
            .signInWithPopup(new auth.GithubAuthProvider())
            .then(({ user }) => {
               console.log(user)
               // commit('setUser', user)
               resolve(user)
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
   logout() {
      return new Promise((resolve, reject) => {
         auth
            .signOut()
            .then(() => {
               console.log('logout')
               resolve()
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               console.warn(errorCode, errorMessage)
               reject(error)
            })
      })
   },
}
