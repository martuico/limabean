<template>
  <div>
    <banner-slider></banner-slider>
    <div class="grid-container">
      <div class="grid-x">
        <top-sellers></top-sellers>
      </div>
    </div>
    <div class="grid-container full">
      <div class="grid-x">
        <advert></advert>
      </div>
    </div>
  </div>
</template>
<script>
import { BannerSlider, TopSellers, Advert } from './components'

export default {
  name: 'Home',
  components: {
    BannerSlider,
    TopSellers,
    Advert
  }
}
</script>
