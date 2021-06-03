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
    <ul>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
      <li class="11">11</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";

// import Home from ''

import { getHomeMultidata } from "network/home";

//import x from ''
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
    // NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  computed: {},
  //组件一创建完就请求数据 利用生命周期函数
  created() {
    //请求多个数据
    getHomeMultidata()
      .then(result => {
        console.log(result);
        // this.result = result;
        this.banners = result.data.banner.list;
        this.recommends = result.data.recommend.list;
      })
      .catch(err => {});
  },
  methods: {}
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
