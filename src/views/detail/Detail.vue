<!-- 组件说明 -->
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-content">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetail, Goods, Shop } from "network/detail";

//import x from ''
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
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
        // console.log(data.shopInfo.services);
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        //获取店铺信息
        this.shop = new Shop(data.shopInfo);
      })
      .catch(err => {});
  },
  computed: {},
  methods: {}
};
</script>

<style>
/*@import url('')*/
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-nav {
  z-index: 9;
  position: relative;
  background-color: #fff;
}
.detail-content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
</style>
