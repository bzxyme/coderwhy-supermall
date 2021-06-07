<!-- 组件说明 -->
<template>
  <div class="detail">
    <h2>{{ iid }}</h2>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "Detail",
  components: {},
  data() {
    return {
      iid: null
    };
  },
  created() {
    console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/*@import url('')*/
</style>
