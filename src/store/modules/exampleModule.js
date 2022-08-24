import { getField, updateField } from 'vuex-map-fields'

/**
 *
 *
 * This store will be used only to save current post editing or viewing on localstorage...
 *
 *
 */
export const state = () => ({
  exampleData: {},
  cardTitle: 'Tela de Preenchimento de Dados'
})

export const getters = {
  getField
}

export const actions = {
  actionExample({ commit }, exampleData) {
    commit('mutationExample', exampleData)
  },
  changeText({ commit }, text) {
    commit('CHANGE_TEXT', text)
  }
}

export const mutations = {
  updateField,
  mutationExample(state, api) {
    state.exampleData = api
  },
  CHANGE_TEXT(state, text) {
    state.cardTitle = text
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
