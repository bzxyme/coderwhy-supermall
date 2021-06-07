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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      mouseWheel: true,
      observeDOM: true,
      pullUpLoad: this.pullUpLoad
    });
    // console.log(scroll);
    // this.scroll.scrollTo(0, 0);

    /**
     * 监听滚动事件
     */
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scrollPosition", position);
      });
    }
    /**
     * 监听上啦事件
     */
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("上啦加载更多");
        this.$emit("pullingUp");
      });
    }
  },
  computed: {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("------");
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
/*@import url('')*/
</style>
