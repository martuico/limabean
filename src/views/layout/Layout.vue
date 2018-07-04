<template>
  <div class="grid-container full">
    <div class="grid-x">
      <div class="cell nav-bg">
        <navbar></navbar>
      </div>
    </div>
    <div class="grid-x">
      <div class="cell">
        <header-app></header-app>
      </div>
    </div>
    <app-main></app-main>
    <div class="grid-x">
      <div class="cell">
        <footer-app></footer-app>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, HeaderApp, AppMain, FooterApp } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    HeaderApp,
    AppMain,
    FooterApp
  }
}
</script>

