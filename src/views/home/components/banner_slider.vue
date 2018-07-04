<template>
  <div>
    <agile :prevArrow="sliderArrows.left" :nextArrow="sliderArrows.right">
      <div class="slide slide--1"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/headerImage.jpg') + ')' }">
        <div class="card">
          <div class="pb0 card-section muted-title">
            <h3>TREAT YOURSELF TO</h3>
          </div>
          <div class="pb0 pt0 card-section primary-title">
            <h3>LOCAL PANTRY FAVOURITES</h3>
          </div>
          <div class="pb0 pt0 card-section">
            <p>Buy two jams and get a third FREE.</p>
          </div>
          <div class="card-section" style="padding:1rem;">
            <a href="#features" class="button">Shop now</a>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
export default {
  name: 'BannerSlider',
  data() {
    return {
      sliderArrows: {
        left: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
        right: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>'
      }
    }
  }
}
</script>
style
<style lang="scss" scoped>
.slide {
    background: {
        position: center;
        size: cover;
    }
    height: 500px;

    &:before {
        background-color: rgba(#000, .2);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    &--1 {
        background-image: url(/img/headerImage.jpg);
    }

    .card {
      left: 50%;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      font-family: 'Montserrat-SemiBold', sans-serif;
      font-size: 16px;
      color: #202020;
      letter-spacing: 0.44px;
      text-align: center;
      line-height: 37px;
      padding: 20px 40px;

      .card-section {
        .button {
          font-size: 14px;
          color: #FFFFFF;
          letter-spacing: 1px;
          text-align: center;
          font-weight: bold;
          padding: 10px 30px;
          border-radius: 100px;
        }
      }

      .muted-title {
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
      .primary-title {
        h3 {
          font-size: 34px;
          font-family: 'Times New Roman', Times, serif, sans-serif;
          color: #003578;
          letter-spacing: 0.35px;
        }
      }
    }
}
</style>
