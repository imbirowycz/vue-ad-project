import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
  
}
export default {
  store: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {

    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }




    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
