<template lang="pug">
  v-container
    v-row.text-center()
      v-col()
        span.display-3 Modelos
    
</template>

<script>
import { firestore } from '../fire/index'

export default {
  name: 'Models',
  data: () => ({

  }),
  created () {
    console.log('ajf')
  }
}
</script>
