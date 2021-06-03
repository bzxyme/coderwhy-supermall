<!-- 组件说明 -->
<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isShow">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
//import x from ''


export default {
  name: "TabTarItem",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isShow: true
    };
  },
  computed: {
    isShow() {
      // return this.$route.path.includes(this.path);
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isShow ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      try {
        this.$router.replace(this.path);
      } catch (error) {}
    }
  }
};
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tar-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
