<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer />
      <v-btn text class="headline text-none font-weight-light" @click="goHome">Doutora Júlia</v-btn>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
