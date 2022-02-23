<template>
  <div class="button">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{active:ischeck}">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',

  data() {
    return {
    };
  },

  props:{
    ischeck:{
      type:Boolean,
      default:false
    }
  },

  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>
img{
  border-radius: 50%;
  border: 1px solid #999;
}
.active{
  background-color: red;
}
</style>