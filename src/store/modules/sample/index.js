import {
  getField,
  updateField
} from 'vuex-map-fields'

export const state = () => ({
  sampleData: []
})

export const getters = {
  getField
}

export const actions = {
  async list ({
    commit,
    dispatch,
    state,
    rootState
  }, path) {
    /**
     * Action func
     */
  }
}

export const mutations = {
  updateField,
  set (state, data) {
    /**
     * Mutation func
     */
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
