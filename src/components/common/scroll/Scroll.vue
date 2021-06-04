<!-- 组件说明 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  components: {},
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
      click: true,
      mouseWheel: true,
      observeDOM: true
    });
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/*@import url('')*/
</style>
