import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createMutationsSharer({
    predicate: (mutation) => {
      const predicate = ['mutation1', 'mutation2']

      // Conditionally trigger other plugins subscription event here to
      // have them called only once (in the tab where the commit happened)
      // ie. save certain values to localStorage
      // pluginStateChanged(mutation, state)
      createPersistedState()
      return predicate.indexOf(mutation.type) >= 0
    }
  })],
  modules: {
    app
  },
  getters
})

export default store
