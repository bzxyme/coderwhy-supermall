<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";

// import Home from ''

import { getHomeMultidata, getHomeGoods } from "network/home";

//import x from ''
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
    // NavBar
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  computed: {},
  //组件一创建完就请求数据 利用生命周期函数
  created() {
    //请求多个数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");

    this.getHomeGoods("new");

    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata()
        .then(result => {
          // console.log(result);
          // this.result = result;
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
        .catch(err => {});
    },

    getHomeGoods(type) {
      // console.log(this.goods[type]);
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(result => {
          console.log(result);
          this.goods[type].page = result.data.page;
          this.goods[type].list.push(...result.data.list);
          console.log(this.goods[type].list);
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
