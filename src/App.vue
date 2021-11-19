<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabbar/maintabbar'

export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style scoped>
@import 'assets/css/base.css';
#app{
  width: 100%;
}
</style>