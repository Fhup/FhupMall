<template>
  <div>
    <tabbar>
      <baritem path="/home" activecolor="blue">
        <img slot="item-img" class="item-img" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-img-hot"
          class="item-img"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </baritem>
      <baritem path="/category" activecolor="deeppink">
        <img slot="item-img" class="item-img" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-img-hot"
          class="item-img"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </baritem>
      <baritem path="/cart" activecolor="pink">
        <img slot="item-img" class="item-img" src="~assets/img/tabbar/cart.svg" alt="" />
        <img
          slot="item-img-hot"
          class="item-img"
          src="~assets/img/tabbar/cart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </baritem>
      <baritem path="/profile" activecolor="green">
        <img slot="item-img" class="item-img" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-img-hot"
          class="item-img"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </baritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import baritem from "components/common/tabbar/baritem.vue";
export default {
  name: "Maintabbar",

  data() {
    return {};
  },
  components: {
    tabbar,
    baritem,
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
