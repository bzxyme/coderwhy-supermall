<!-- 

组件说明:详情页轮播图

 -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
      <!-- <a :href="item.lin"></a> -->
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

//import x from ''
export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
