<template>
  <div class="bottom-bar" @click="buyclick">加入购物车</div>
</template>

<script>
export default {
  name: 'DetailBottomBar',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    buyclick(){
      this.$emit('addcart');
    }
  },
};
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  background-color: #f1c40f;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -3px 1px rgb(100,100,100,.2);
  line-height: 49px;
  text-align: center;

}
</style>