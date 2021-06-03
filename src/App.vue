<template>
  <router-view></router-view>
  <main-tab-bar />
  <!-- <h2>wode </h2> -->
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
