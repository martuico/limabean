<template>
  <div class="grid-container">
    <div class="grid-x header-container grid-margin-x footer-menu">
      <div class="cell medium-2">
        <div class="grid-x">
          <div class="cell">
            <logo></logo>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell">
            <ul class="menu footer-social">
              <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i>  </a></li>
              <li><a class="twitter" href="#"><i class="fab fa-twitter"></i>  </a></li>
              <li><a class="pinterest" href="#"><i class="fab fa-pinterest-p"></i>  </a></li>
              <li><a class="instagram" href="#"><i class="fab fa-instagram"></i>  </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cell medium-2 footer-link-wrapper">
        <div class="grid-x">
          <h1 class="footer-link-title">Company</h1>
        </div>
        <div class="grid-x">
          <ul class="no-bullet footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Cafe</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
      </div>
      <div class="cell medium-2 footer-link-wrapper">
        <div class="grid-x">
          <h1 class="footer-link-title">Wholesale</h1>
        </div>
        <div class="grid-x">
          <ul class="no-bullet footer-links">
            <li><a href="#">South Africa</a></li>
            <li><a href="#">International</a></li>
            <li><a href="#">Corporate Gifting</a></li>
            <li><a href="#">Hospitality</a></li>
          </ul>
        </div>
      </div>
      <div class="cell medium-2 footer-link-wrapper">
        <div class="grid-x">
          <h1 class="footer-link-title">Support</h1>
        </div>
        <div class="grid-x">
          <ul class="no-bullet footer-links">
            <li><a href="#">Our Stocklist</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">T's & C's</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>
      </div>
      <div class="cell medium-2 footer-link-wrapper">
        <div class="grid-x">
          <h1 class="footer-link-title">Contact</h1>
        </div>
        <div class="grid-x">
          <ul class="no-bullet footer-links">
            <li><a href="#"><font-awesome-icon icon="phone-volume" class="rotate-50"/> +27 21 888 2999</a></li>
            <li><a href="#"><font-awesome-icon icon="envelope"/>  info@bakery.co.za</a></li>
            <li><a href="#"><font-awesome-icon icon="map-marker-alt"/> Store Locator</a></li>
            <li><a href="#"><font-awesome-icon icon="store-alt"/> Franchise Enquiry</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid-x header-container grid-margin-x" style="border-top:1px solid #EBEBEB;">
      <div class="cell medium-6">
        <ul class="menu sub-footer-menu-links">
          <li><a href="">© Bakery - All rights reserved.</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="cell medium-6">
        <ul class="menu">
          <li><a href=""><img :src="require('@/assets/img/fastway.jpg')" style="width:100%;"></a></li>
          <li><a href=""><img :src="require('@/assets/img/payu.jpg')" style="width:100%;"></a></li>
          <li><a href=""><img :src="require('@/assets/img/visa.jpg')" style="width:100%;"></a></li>
          <li><a href=""><img :src="require('@/assets/img/mastercard.jpg')" style="width:100%;"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sub-footer-menu-links {
  li {
    a {
      font-family: 'Montserrat-Regular', sans-serif;
      font-size: 12px;
      color: #ABABAB;
      letter-spacing: 0;
      line-height: 24px;
      text-decoration: none;
    }
  }
}
.footer-menu {
  margin-top: 25px;
  margin-bottom: 25px;
}
.rotate-50 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(-50deg);
  transform: rotate(-50deg) !important;
}
.footer-link-wrapper {
  padding-top: 15px;
  padding-left: 18px;
  border-left: 1px solid #E4E4E4;
}
.footer-link-title {
  font-family: 'Average-Regular', sans-serif;
  font-size: 16px;
  color: #505050;
  letter-spacing: 0.5px;
  line-height: 30px;
  text-transform: uppercase;
}
.footer-links {
  li {
    a {
      font-family: 'Montserrat-Regular', sans-serif;
      font-size: 12px;
      color: #505050;
      letter-spacing: 0.5px;
      line-height: 30px;
      text-decoration: none;
    }
  }
}
</style>
