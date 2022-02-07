<template>
   <v-app>
      <div class="page-loder display-2" v-show="pageLoader">Loading...</div>
      <slot />
   </v-app>
</template>

<script>
export default {
   computed: {
      pageLoader: {
         get: function () {
            return this.$store.state.utils.pageLoader
         },
         set: function (v) {
            this.$store.commit('setPageLoader', v)
         },
      },
   },
}
</script>

<style lang="scss">
#page-loder {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: coral;
   z-index: 9999;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
}
</style>
