<!-- 组件说明 -->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <template v-slot:item-img
        ><img src="~assets/img/tabbar/home.svg" alt=""
      /></template>
      <template v-slot:item-img-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <template v-slot:item-img
        ><img src="~assets/img/tabbar/category.svg" alt=""
      /></template>
      <template v-slot:item-img-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <template v-slot:item-img
        ><img src="~assets/img/tabbar/shopcart.svg" alt=""
      /></template>
      <template v-slot:item-img-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <template v-slot:item-img
        ><img src="~assets/img/tabbar/profile.svg" alt=""
      /></template>
      <template v-slot:item-img-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>
s
<script>
//import x from ''
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabTarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.tar-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
