import { auth, onAuthStateChanged } from '@/firebase'
const routeStartWith = (route, word) => route.matched[0].path.startsWith(word)
const match = (route, word) => route.matched[0].path === word

export default function ({ redirect, store, route }) {
   console.warn(route)
   onAuthStateChanged(auth, (user) => {
      console.log(routeStartWith(route, '/auth') ? 'you are in auth route' : 'you are not in auth route', '😊')
      console.log('AUTH STATE CHANGED', { ...user })

      if (user) {
         store.commit('auth/setUser', user)
         if (routeStartWith(route, '/auth')) redirect('/')
      } else {
         store.commit('auth/setUser', null)
         if (!routeStartWith(route, '/auth')) redirect('/auth/login')
      }
   })
}
