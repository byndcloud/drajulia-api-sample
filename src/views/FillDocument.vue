<template lang="pug">
  iframe(:src="embedLink" frameborder='0' style="overflow:hidden;" height="100%" width="100%")
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  created () {},
  computed: {
    ...mapFields('sample', ['embedLink'])
  }
}
</script>

<style>

</style>
