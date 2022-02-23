<template>
  <div class="goodslist">
      <goodsitem v-for="(item,index) in goods" :goodsitem="item" :key="index"/>
  </div>
</template>

<script>

import goodsitem from './GoodsListItem'

export default {
  name: 'GoodsList',

  components:{
    goodsitem
  },

  data() {
    return {
      
    };
  },

  props:{
    goods:{
      type:Array,
      default:[]
    } 
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .goodslist{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>