<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
global.jQuery = require('jquery');

var $ = global.jQuery;
window.$ = $;

export default {
  name: 'app',
  mounted() {
    $(document).foundation();
  }
}
</script>

<!--style rel="stylesheet/scss" lang="scss">
@import "~foundation-sites/scss/foundation.scss";
</style-->

<style lang="scss">
  @import './styles/app';
</style>