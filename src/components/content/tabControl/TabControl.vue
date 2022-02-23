<template>
  <div class="tabcontrol">
    <div class="tc-item" v-for="(item, index) in titles">
      <span :class="{ active: index == cindex }" @click="itemclick(index)">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",

  data() {
    return {
      cindex: 0,
    };
  },

  props: {
    titles: {
      type: Array,
      default: [],
    },
  },

  mounted() {},

  methods: {
    itemclick(index) {
      this.cindex = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 13px;
}
.tc-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.tc-item span {
  padding: 3px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
