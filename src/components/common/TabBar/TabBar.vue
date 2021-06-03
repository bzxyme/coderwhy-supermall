<!-- 组件说明 -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "TabBar",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
#tab-bar {
  display: flex;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: #f2f2f2;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
}
</style>
