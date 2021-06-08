<template>
  <!-- <keep-alive>
    <router-view />
  </keep-alive> -->

<router-view v-slot="{ Component }">
  <keep-alive exclude="Detail">
    <component :is="Component" />
  </keep-alive>
</router-view>

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
