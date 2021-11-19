<template>
  <div>
    <nav-bar>
      <div slot="bar-left" @click="barleftclick">
        <img src="~assets/img/common/back.svg" alt="" class="barimg" />
      </div>
      <div class="title" slot="bar-center">
        <div
          v-for="(item, index) in titles"
          class="t-item"
          :class="{ active: index == currindex }"
          @click="tclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currindex: 0,
    };
  },
  components: {
    NavBar,
  },

  methods: {
    tclick(index) {
      this.currindex = index;
    },
    barleftclick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title .t-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.barimg {
  width: 18px;
  height: 18px;
  margin: auto;
  margin-left: 40%;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
