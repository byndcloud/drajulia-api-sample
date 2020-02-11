<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Beyond Cloud Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/beyond.png')"
          transition="scale-transition"
          width="40"
        />
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
  })
}
</script>
