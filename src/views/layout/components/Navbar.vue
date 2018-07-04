<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <div class="top-bar nav-bg">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li><a href="#0">Franchise</a></li>
              <li><a href="#0">Corporate Training</a></li>
              <li><a href="#0">Wholesale</a></li>
              <li><a href="#0">Contact</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><a href="#">Hi, Jane Brown</a></li>
              <li @click="showCarts = true"><a href="#"><font-awesome-icon icon="shopping-basket" style="color: #003578;" /> Basket {{countCart}}</a></li>
            </ul>
            <div class="dropdown-pane" v-if="showCarts && carts.length >0" v-click-outside="closeEvent">
              <div class="grid-container">
                <div class="grid-x panel-toolbar">
                  <div class="cell medium-6">
                    <h4 class="panel-title">My Cart</h4>
                  </div>
                  <div class="cell medium-6" style="text-align: right;">
                    <a href="" class="panel-title-action">View Cart</a>
                  </div>
                </div>
                <carts :carts="carts"></carts>
                <div class="grid-x">
                  <button class="button button-block">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import Carts from '@/components/Product/navCart.vue'
export default {
  name: 'Navbar',
  components: {
    Carts
  },
  data() {
    return {
      showCarts: false
    }
  },
  computed: {
    countCart() {
      let carts = (this.$store.state.app.carts.length < 1) ?'0':this.$store.state.app.carts.length
      return carts
    },
    carts() {
      let carts = this.$store.state.app.carts
      return carts
    }
  },
  methods: {
    closeEvent(){
      this.showCarts = false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-block{
  width: 100%;
}
.panel-toolbar {
  border-bottom: 1px solid #E7EAEF;
}
.panel-title {
  font-family: 'Montserrat-SemiBold', sans-serif;
  font-size: 14px;
  color: #505050;
  letter-spacing: 0;
  font-weight: bold;
}
.panel-title-action {
  font-family: 'Montserrat-SemiBold', sans-serif;
  font-size: 14px;
  color: #003578;
  letter-spacing: 0;
  text-transform: capitalize;
}

.product-title {
  font-family: 'Raleway-Bold',sans-serif;
  font-size: 11px;
  color: #2D2D37;
  letter-spacing: 0;
  line-height: 20px;
  font-weight: bold;
}

.dropdown-pane {
    position: absolute;
    z-index: 10;
    display: block;
    width: 375px;
    padding: 1rem;
    visibility: visible;
    border: 1px solid #cacaca;
    border-radius: 0;
    background-color: #fefefe;
    font-size: 1rem;
    right: 110px;
}
</style>
