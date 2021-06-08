<!-- 组件说明 -->
<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images='topImages' />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import { getDetail } from "network/detail";

//import x from ''
export default {
  name: "Detail",
  components: { DetailNavBar, DetailSwiper },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    //获取iid
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;

    //请求数据
    // console.log(getDetail(this.iid));
    getDetail(this.iid)
      .then(result => {
        console.log(result);
        console.log(result.result.itemInfo.topImages);
        this.topImages = result.result.itemInfo.topImages;
      })
      .catch(err => {});
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/*@import url('')*/
</style>
