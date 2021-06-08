<!-- 组件说明 -->
<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import { getDetail, Goods } from "network/detail";

//import x from ''
export default {
  name: "Detail",
  components: { DetailNavBar, DetailSwiper },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null
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
        //获取详情页轮播图
        // console.log(result);
        const data = result.result;
        // console.log(data);
        // console.log(data.result.itemInfo.topImages);
        this.topImages = data.itemInfo.topImages;

        //获取商品信息
        // console.log(data.itemInfo);
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
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
