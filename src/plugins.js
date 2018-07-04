import Vue from 'vue'

import VueAgile from 'vue-agile'
import Logo from './components/Logo'
import { library, dom } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingBasket, faSearch, faPhoneVolume, faEnvelope, faMapMarkerAlt, faStoreAlt, faTimes } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { fab  } from '../node_modules/@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'


library.add(faCoffee, faShoppingBasket, faSearch, fab, faPhoneVolume, faEnvelope, faMapMarkerAlt, faStoreAlt, faTimes )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('logo', Logo)
Vue.use(VueAgile)

dom.watch()


Vue.directive('click-outside', {
  bind: function (el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}'` }
      // console.log(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler

    // add Event Listeners
    document.addEventListener('click', handler)
  },

  unbind: function (el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null

  }
})