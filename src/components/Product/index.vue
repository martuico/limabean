<template>
  <div class="card product-card">
    <img :src="product.image" class="product-image">
    <div class="card-section">
      <p class="product-subtitle mb0">{{product.subtitle}}</p>
      <p class="product-title">{{product.title}}</p>
      <button class="hollow button" @click="addtocart($event, product)">ADD TO CART</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addtocart(event, product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  background-color: #c7c7c7;
  border: none;
  .card-section{
    background: #fff;
    .product-subtitle {
      font-family: Montserrat-SemiBold;
      font-size: 12px;
      color: #ABABAB;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .product-title {
      font-family: Raleway-Bold;
      font-size: 14px;
      color: #262626;
      letter-spacing: 0.5px;
      line-height: 18px;
    }
    .button {
      border-radius: 80px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

}
</style>
