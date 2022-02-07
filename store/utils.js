export const state = () => ({
   pageLoader: true,
})

export const mutations = {
   setPageLoader(state, payload) {
      state.pageLoader = payload
   },
}
