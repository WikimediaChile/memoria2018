<template>
<div id="app">
  <app-menu></app-menu>
  <app-header></app-header>
  <router-view/>
  <app-footer></app-footer>
</div>
</template>

<script>
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    AppMenu: Menu,
    AppHeader: Header,
    AppFooter: Footer
  }
}
</script>

<style>
a[target=_blank] {
  font-style: oblique;
  font-weight: lighter;
}

a[target=_blank]::after {
  content: '\f08e';
  font-family: FontAwesome;
  text-decoration: none;
  margin: 0;
  padding-left: 4px;
  font-style: normal;
  font-size: 0.8em;
}
</style>
