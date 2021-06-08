<!-- 组件说明 -->

<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            :class="{ active: currentIndex === index }"
            @click="titleItemCLick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

//import x from ''
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  computed: {},
  methods: {
    /**
     * 监听点击事件
     */
    titleItemCLick(index) {
      this.currentIndex = index;
    },

    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.back img {
  margin-top: 11px;
}
.active {
  color: var(--color-high-text);
}
</style>
