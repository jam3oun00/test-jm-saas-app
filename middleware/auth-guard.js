import authGuard from '~/plugins/auth-guard'

export default function ({ redirect, store, route }) {
   console.error('middleware')
   authGuard({ redirect, store, route })
}
