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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      mouseWheel: true,
      observeDOM: true
    });
    // console.log(scroll);
    // this.scroll.scrollTo(0, 0);
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scrollPosition", position);
    });
  },
  computed: {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped>
/*@import url('')*/
</style>
