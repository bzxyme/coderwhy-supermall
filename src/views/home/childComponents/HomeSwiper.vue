<!-- 组件说明 -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
//import x from ''
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: true
    };
  },
  computed: {},
  methods: {
    imageLoad() {
      // console.log("--------");
      if (this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = !this.isLoad;
      }
    }
  }
};
</script>

<style></style>
