<!-- 组件说明 -->
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
      <!-- <goods-list :goods='Recommend'/> -->
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";

import GoodsList from "../../components/content/goods/GoodsList.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";

//import x from ''
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      Recommend: []
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

        //获取详情展示图片
        this.detailInfo = data.detailInfo;

        //获取详情商品信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
        }
        getRecommend()
          .then(result => {
            this.Recommend = result.data.list;
            console.log(this.Recommend);
          })
          .catch(err => {});
      })
      .catch(err => {});
  },
  computed: {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    }
  }
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
