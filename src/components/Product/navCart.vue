<template>
  <div>
    <div class="grid-x product-list-dropdown" v-for="(cart, cartIndex) in carts" :key="cart.id">
      <div class="cell medium-3">
        <img :src="cart.image" style="width:100%;height:75px;">
      </div>
      <div class="cell medium-6">
        <h4 class="product-title">{{cart.title}}</h4>
        <p class="product-qty">Qty {{cart.qty}}</p>
      </div>
      <div class="cell medium-3 pricing-wrap">
        <a @click="deleteItem(cart, cartIndex)" class="close"><font-awesome-icon icon="times"/></a>
        <p class="product-qty">R{{itemQtyPrice(cart)}}</p>
      </div>
    </div>
    <div class="grid-x">
      <div class="cell medium-9">
        <h4 class="product-title">Subtitle <small>({{carts.length}} item)</small></h4>
      </div>
      <div class="cell medium-3 pricing-wrap">
        <p class="product-qty">R{{totalPrice}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'navCart',
  props: {
    carts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // totalPrice: '0.00'
    }
  },
  methods: {
    itemQtyPrice(item){
      return parseFloat(item.qty * item.price, 2)
    },
    deleteItem(cart, cartIndex){
      console.log(cartIndex)
      this.$store.dispatch('deleteCart', cartIndex)
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.carts.forEach((item) => {
        total += parseFloat(item.price * item.qty)
      })
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list-dropdown {
  div {
    padding: 5px;
  }
  border-bottom: 1px solid #E7EAEF;
}
.product-title {
  font-family: 'Raleway-Bold',sans-serif;
  font-size: 11px;
  color: #2D2D37;
  letter-spacing: 0;
  line-height: 20px;
  font-weight: bold;
}
.product-qty {
  font-family: 'Raleway-Bold',sans-serif;
  font-size: 11px;
}


.pricing-wrap {
  text-align: right;
}
.close {
  color:  #C5C5C5;
}
</style>
