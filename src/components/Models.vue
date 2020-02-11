<template lang="pug">
  v-container
    v-row.text-center()
      v-col()
        span.display-3 Modelos
    v-row(justify='center')
      v-col(cols='auto')
        template(v-for='model in models')
          v-card.mb-4(:key='model.id' outlined max-width='600')
            v-card-title {{ model.name }}
            v-card-text
              span(v-html="model.bodyDescription")
            v-card-actions
              v-spacer
              v-btn(@click='createDoc(model)' :loading='creatingDoc' outlined color='primary') Criar documento
</template>

<script>
import { firestore } from '../fire/index'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Models',
  data: () => ({
    models: [],
    creatingDoc: false
  }),
  async created () {
    const res = await firestore.collection('document_models').where('type', '==', 'Petição Inicial').get()
    res.docs.forEach(doc => {
      const docData = doc.data()
      docData.id = doc.id
      this.models.push(docData)
    })
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
          parentModelId: model.id,
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
