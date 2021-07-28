import { calcSum } from '@/api/calculator.js'

const state = {
  loading: true,
  sum: 0,
  validate: {},
}

// getters
const getters = {}

// actions
const actions = {
  async calcSum({commit}, req) {
    commit('UPDATE_LOADING', true)
    try {
      const {data} = await calcSum(req)
      commit('UPDATE_SUM', data)
      commit('UPDATE_VALIDATE_ERRORS', {})
    } catch ({response}) {
      commit('UPDATE_VALIDATE_ERRORS', response.data.errors)
    } finally {
      commit('UPDATE_LOADING', false)
    }
  },
}

// mutations

const mutations = {
  UPDATE_SUM(state, sum) {
    state.sum = sum
  },
  UPDATE_LOADING(state, status){
    state.loading = status
  },
  UPDATE_VALIDATE_ERRORS(state, errors){
    state.validate = errors
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}