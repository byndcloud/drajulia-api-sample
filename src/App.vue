<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn icon>
          <v-img
            alt="Beyond Cloud Logo"
            contain
            :src="require('./assets/beyond.png')"
            transition="scale-transition"
            width="48"
            @click="goHome"
          />
        </v-btn>
      </div>
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
