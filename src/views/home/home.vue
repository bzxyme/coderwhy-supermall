<!-- 组件说明 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home";

//import x from ''
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "home",
  components: {
    NavBar
    // NavBar
  },
  data() {
    return {
      banner: [],
      recommend: []
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
        this.banner = result.data.banner.list;
        this.recommend = result.data.recommend.list;
      })
      .catch(err => {});
  },
  methods: {}
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
