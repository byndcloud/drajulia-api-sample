<template lang="pug">
  v-container
    v-row.text-center()
      v-col()
        span.display-1 Modelos
    v-row(justify='center')
      v-col.d-flex.justify-center()
        v-fade-transition(group hide-on-leave)
          v-skeleton-loader.mb-4(v-if='loadingModels' v-for='i in 3' type='list-item, actions' min-width='200' width='90vw' :key='i' elevation='1')
          template(v-if='!loadingModels' v-for='(model, index) in models')
            v-card.mb-4(:key='model.uid')
              v-card-text
                v-icon(left) far fa-file
                span.body-2 {{ model.name }}
              //- v-card-text
              //-   span(v-html="model.bodyDescription")
              v-card-actions
                v-spacer
                v-btn(@click='createDoc(model, index)' :disabled='creatingDoc && !btnLoadingStates[index]' :loading='btnLoadingStates[index]' color='primary' small) Criar documento
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Models',
  data: () => ({
    models: [],
    loadingModels: true,
    creatingDoc: false,
    btnLoadingStates: []
  }),
  async created () {
    const response = await this.$axios.get('/public/documentmodels')
    this.models = response.data
    this.models.forEach(m => this.btnLoadingStates.push(false))
    this.loadingModels = false
  },
  computed: {
    ...mapFields('sample', ['embedLink'])
  },
  methods: {
    async createDoc (model, index) {
      this.creatingDoc = true
      this.btnLoadingStates[index] = true
      this.$forceUpdate()
      const response = await this.$axios.post(
        '/embedding/createdoc',
        {
          creationToken: 'Created by drajulia-api-sample',
          newDocName: 'apiSample',
          parentModelId: model.uid,
          onFilesGeneratedCallbackUrl: ''
        }
      )

      if (response.data.embedLink) {
        this.embedLink = response.data.embedLink
        this.$router.push('doc')
      }
      this.btnLoadingStates[index] = false
      this.creatingDoc = false
      this.$forceUpdate()
    }
  }
}
</script>
