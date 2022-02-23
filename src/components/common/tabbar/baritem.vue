<template>
  <div class="bar-item" @click="btnclick">
    <div>
      <!-- slot外层的div可以在替换时不影响其他的元素 -->
      <div v-if="!flag"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-hot"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baritem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    flag() {
      //判断那个处于活跃状态
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.flag ? { color: this.activecolor } : {};
    },
  },
  methods: {
    btnclick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
};
</script>

<style scoped>
.bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  cursor: pointer;
  z-index: 9;
}
.item-img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
