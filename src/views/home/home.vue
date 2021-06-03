<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

//import x from ''
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "home",
  components: {
    NavBar
    // NavBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color:#fff
}
</style>
