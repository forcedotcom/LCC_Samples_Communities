import Vue from 'vue'
import Vuex from 'vuex'
import recordsAPI from './api/records'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    accounts: null
  },
  getters: {
    getAccount: (state, { dispatch }) => id => {
      return state.accounts ? state.accounts.find(account => account.id === id) : {}
    }
  },
  mutations: {
    setAccounts: (state, payload) => { state.accounts = payload }
  },
  actions: {
    getAllAccounts: ({ commit }) => {
      recordsAPI.getAccounts(accounts => {
        commit('setAccounts', accounts)
      })
    }
  }
})
