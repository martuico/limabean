<template>
  <div class="grid-container">
    <div class="grid-x header-container grid-margin-x">
      <div class="cell medium-2">
        <logo></logo>
      </div>
       <div class="medium-4 cell">
        <label class="middle search-box">
          <font-awesome-icon icon="search" class="search-icon-style"/>
          <input type="text" placeholder="Search" style="background-image:">
        </label>
      </div>
      <div class="medium-3 cell">
        <div class="grid-x middle">
          <div class="cell medium-2 float-left">
            <img :src="require('@/assets/img/delivery.svg')" alt="" style="width:100%;">
          </div>
          <div class="cell medium-9" style="text-align:center;">
            <h3 class="super-title">free  delivery</h3>
            <h6 class="super-subtitle">On orders over R500</h6>
          </div>
        </div>
      </div>
      <div class="medium-3 cell">
        <div class="grid-x middle">
          <div class="cell medium-2 float-left">
            <img :src="require('@/assets/img/call.svg')" alt="" style="width:80%;">
          </div>
          <div class="cell medium-9" style="text-align:center;">
            <h3 class="super-title">021 886 6179</h3>
            <h6 class="super-subtitle">Mon - Fri, 8am - 4pm</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderApp'
}
</script>

