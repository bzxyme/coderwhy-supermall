<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="getScrollPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click="BackTopClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils.js";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      },
      currentType: "pop",
      isShow: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  //组件一创建完就请求数据 利用生命周期函数
  created() {
    //请求多个数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");

    this.getHomeGoods("new");

    this.getHomeGoods("sell");
  },
  mounted() {
    //监听事件总线
    const refresh = debounce(this.$refs.scroll.refresh);

    this.$bus.on("itemImgLoad", () => {
      // console.log("---------");
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
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
          // console.log(result);
          this.goods[type].page = result.data.page;
          this.goods[type].list.push(...result.data.list);
          // console.log(this.goods[type].list);

          this.$refs.scroll.finishPullUp();
          // this.$refs.scroll.refresh();
        })
        .catch(err => {});
    },

    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    BackTopClick() {
      // console.log();
      this.$refs.scroll.scrollTo(0, 0);
    },
    getScrollPosition(position) {
      // console.log(position);
      this.isShow = position.y <= -1000;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
    },
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
