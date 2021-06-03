<!-- 组件说明 -->
<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommends-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>
          {{ item.title }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "RecommendView",
  components: {},
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {}
};
</script>

<style>
.recommends {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;

  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  /* width: 65px; */
  width: 70%;
  /* height: 65px; */
  margin-bottom: 5px;
}
</style>
