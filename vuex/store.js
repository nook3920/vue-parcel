import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  getCount (state) {
    return state.count
  }
}

const actions = {
  increment (context) {
    context.commit('INCREMENT')
  },
  decrement (context) {
    context.commit('DECREMENT')
  }
}

const mutations = {
  INCREMENT (state) {
    state.count += 1
  },
  DECREMENT (state) {
    state.count -= 1
  }
}

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})