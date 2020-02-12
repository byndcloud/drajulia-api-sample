<template lang="pug">
  v-container
    v-row.text-center()
      v-col()
        span.display-3 Modelos
    v-row(justify='center')
      v-col.d-flex.justify-center()
        v-fade-transition(group hide-on-leave)
          v-skeleton-loader.mb-4(v-if='loadingModels' v-for='i in 3' type='card' min-width='600' max-width='600' :key='i' elevation='1')
          template(v-if='!loadingModels' v-for='model in models')
            v-card.mb-4(:key='model.uid' outlined max-width='600')
              v-card-title {{ model.name }}
              v-card-text
                span(v-html="model.bodyDescription")
              v-card-actions
                v-spacer
                v-btn(@click='createDoc(model)' :loading='creatingDoc' outlined color='primary') Criar documento
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Models',
  data: () => ({
    models: [],
    loadingModels: true,
    creatingDoc: false
  }),
  async created () {
    const response = await this.$axios.get('/public/documentmodels')
    console.log(response.data)
    this.models = response.data
    this.loadingModels = false
    console.log(this.models)
  },
  computed: {
    ...mapFields('sample', ['embedLink'])
  },
  methods: {
    async createDoc (model) {
      this.creatingDoc = true
      const response = await this.$axios.post(
        '/embedding/createdoc',
        {
          creationToken: 'Created by drajulia-api-sample',
          newDocName: 'apiSample',
          parentModelId: model.uid,
          onFilesGeneratedCallbackUrl: ''
        }
      )

      console.log(response.data)

      if (response.data.embedLink) {
        this.embedLink = response.data.embedLink
        this.$router.push('doc')
      }
      this.creatingDoc = false
    }
  }
}
</script>
