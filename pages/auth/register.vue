<template>
   <div>
      <v-card width="500" class="mx-auto mt-16">
         <v-form ref="form" v-model="valid">
            <v-text-field type="email" label="email" :rules="rules.email" v-model="form.email"></v-text-field>
            <v-text-field type="password" label="password" :rules="rules.password" v-model="form.password"></v-text-field>
            <v-text-field type="password" label="password" :rules="rules.passwordConfirmation" v-model="form.passwordConfirmation"></v-text-field>
            <v-btn @click="registerWithEmailAndPassword"> register </v-btn> <br />
         </v-form>
         <div class="d-flex align-center justify-enter my-5 mb-2 mx-3">
            <hr style="width: 100%" />
            <div class="mx-5">OR</div>
            <hr style="width: 100%" />
         </div>
         <div class="text-center caption">register with</div>
         <v-btn @click="registerWithGoogle"> google </v-btn> <br />
         <v-btn @click="registerWithFacebook"> facebook </v-btn> <br />
         <v-btn @click="registerWithGithub"> github </v-btn> <br />

         <v-btn nuxt to="/auth/login"> Already have an account? </v-btn>
         <nuxt-link to="/auth/login">sdfsdfsdfsdf</nuxt-link>
      </v-card>
   </div>
</template>
<script>
export default {
   data() {
      return {
         valid: true,
         form: {
            email: '',
            password: '',
            passwordConfirmation: '',
         },
         rules: {
            email: [(v) => !!v || 'Email is required', (v) => /.+@.+\..+/.test(v) || 'Email must be valid'],
            password: [(v) => !!v || 'Password is required', (v) => v.length >= 6 || 'Password must be at least 6 characters'],
            passwordConfirmation: [
               (v) => !!v || 'Password confirmation is required',
               (v) => v === this.form.password || 'Password confirmation must be same as password',
            ],
         },
      }
   },
   methods: {
      registerWithEmailAndPassword() {
         this.$refs.form.validate()
         this.valid
            ? this.$store.dispatch('auth/registerWithEmailAndPassword', this.form).then(() => this.$router.push('/'))
            : alert('form is not valid, please make sure all fields are filled correctly')
      },
      registerWithGoogle() {
         this.$store.dispatch('auth/registerWithGoogle').then(() => this.$router.push('/'))
      },
      registerWithFacebook() {
         this.$store.dispatch('auth/registerWithFacebook').then(() => this.$router.push('/'))
      },
      registerWithGithub() {
         this.$store.dispatch('auth/registerWithGithub').then(() => this.$router.push('/'))
      },
   },
}
</script>
