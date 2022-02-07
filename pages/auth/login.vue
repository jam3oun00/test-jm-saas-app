<template>
   <div>
      <v-card width="500" class="mx-auto mt-16">
         <v-form ref="form" v-model="valid">
            <v-text-field type="email" label="email" :rules="rules.email" v-model="form.email"></v-text-field>
            <v-text-field type="password" label="password" :rules="rules.password" v-model="form.password"></v-text-field>
            <v-btn @click="loginWithEmailAndPassword"> login </v-btn> <br />
         </v-form>
         <div class="d-flex align-center justify-enter my-5 mb-2 mx-3">
            <hr style="width: 100%" />
            <div class="mx-5">OR</div>
            <hr style="width: 100%" />
         </div>
         <!-- <div class="text-center caption">login with</div>
         <v-btn @click="loginWithGoogle"> google </v-btn> <br />
         <v-btn @click="loginWithFacebook"> facebook </v-btn> <br />
         <v-btn @click="loginWithGithub"> github </v-btn> <br /> -->

         <v-btn nuxt to="/auth/register"> Already have an account? </v-btn>
      </v-card>
   </div>
</template>
<script>
export default {
   layout: 'auth',
   data() {
      return {
         valid: true,
         form: {
            email: '',
            password: '',
         },
         rules: {
            email: [(v) => !!v || 'Email is required', (v) => /.+@.+\..+/.test(v) || 'Email must be valid'],
            password: [(v) => !!v || 'Password is required', (v) => v.length >= 6 || 'Password must be at least 6 characters'],
         },
      }
   },
   methods: {
      loginWithEmailAndPassword() {
         this.$refs.form.validate()
         this.valid
            ? this.$store.dispatch('auth/loginWithEmailAndPassword', this.form).then(() => this.$router.push('/'))
            : alert('form is not valid, please make sure all fields are filled correctly')
      },
      loginWithGoogle() {
         this.$store.dispatch('auth/loginWithGoogle').then(() => this.$router.push('/'))
      },
      loginWithFacebook() {
         this.$store.dispatch('auth/loginWithFacebook').then(() => this.$router.push('/'))
      },
      loginWithGithub() {
         this.$store.dispatch('auth/loginWithGithub').then(() => this.$router.push('/'))
      },
   },
}
</script>
