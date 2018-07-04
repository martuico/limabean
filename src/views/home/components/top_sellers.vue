<template>
    <div class="cell">
      <div class="grid-x text-center">
        <div class="cell">
          <div class="page-title-dash">
            <h3>SHOP OUR</h3>
          </div>
        </div>
        <div class="cell">
          <div class="page-title">
            <h3>top sellers</h3>
          </div>
        </div>
      </div>
      <div class="grid-x grid-padding-x">
        <div class="cell medium-3" v-for="(product, ind) in products" :key="ind">
          <product :product="product"></product>
        </div>
      </div>
    </div>
</template>

<script>
import Product from '@/components/Product/index'
export default {
  name: 'TopSellers',
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchTopSellers()
  },
  methods: {
    fetchTopSellers() {
      let self = this
      self.products = [
        {
          id: 1,
          image: require('@/assets/img/product1.jpg'),
          subtitle: 'SWEETS, NUTS & CHOCOLATE',
          title: 'Berry & Balsamic Bon Bons',
          link: '#',
          price: 33.50
        },
        {
          id: 2,
          image: require('@/assets/img/product2.jpg'),
          subtitle: 'PASTA SAUCES & CONDIMENTS',
          title: 'Sundried Tomatoes, Feta & Bell Peppers',
          link: '#',
          price: 21.50
        },
        {
          id: 3,
          image: require('@/assets/img/product3.jpg'),
          subtitle: 'SAVOURY SNACKS',
          title: 'Vegetable Crisps',
          link: '#',
          price: 5.50
        },
        {
          id: 4,
          image: require('@/assets/img/product4.jpg'),
          subtitle: 'HAMPERS',
          title: 'Melissa’s Family man',
          link: '#',
          price: 1.20
        }
      ]
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

.page-title {
  h3 {
    text-transform: uppercase;
    font-family: 'Average-Regular', Times, serif;
    font-size: 36px;
    color: #003578;
    letter-spacing: 0.38px;
    text-align: center;
  }
}
.page-title-dash {
  h3 {
    font-size: 16px;
    color: #ABABAB;
    display: inline-block;
    position: relative;
  }
  h3::before,
  h3::after, {
    content: "";
    position: absolute;
    height: 2px;
    border: 1px solid black;
    border-color: #ABABAB;
    top: 8px;
    width: 50%;
  }
  h3::before {
    right: 100%;
    margin-right: 15px;
  }

  h3::after {
    left: 100%;
    margin-left: 15px;
  }
}
</style>
