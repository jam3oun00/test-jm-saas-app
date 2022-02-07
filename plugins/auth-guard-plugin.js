import { auth, onAuthStateChanged } from '@/firebase'
const routeStartWith = (route, word) => route.matched[0].path.startsWith(word)
// const match = (route, word) => route.matched[0].path === word

export default function ({ redirect, store, route }) {
   store.commit('utils/setPageLoader', true)
   onAuthStateChanged(auth, (user) => {
      console.log(routeStartWith(route, '/auth') ? 'you are in auth route' : 'you are not in auth route', '😊')
      console.log('AUTH STATE CHANGED', user)

      store.commit('utils/setPageLoader', false)
      if (user) {
         store.commit('auth/setUser', user)
         if (routeStartWith(route, '/auth')) redirect('/')
      } else {
         store.commit('auth/setUser', null)
         if (!routeStartWith(route, '/auth')) redirect('/auth/login')
      }
   })
}
