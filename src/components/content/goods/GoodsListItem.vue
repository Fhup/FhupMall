<template>
  <div class="goodsitem">
    <div>
      <img :src="goodsitem.img_url" alt="">
    </div>
    <div class="goodsinfo">
      <p>{{goodsitem.content}}</p>
      <span class="price">{{goodsitem.price | getfullp}}</span>
      <img src="~assets/img/common/collect.svg" alt="">
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',

  data() {
    return {
      
    };
  },

  props:{
    goodsitem:{
      type:Object,
      default:{}
    } 
  },

  filters:{
    getfullp(price){
      return " ￥"+price.toFixed(2)
    }
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .goodsitem{
    width: 45%;
    font-size: 13px;
    text-align: center;
  }
  .goodsitem p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goodsitem img{
    width: 100%;
    border-radius: 10px;
  }
  .goodsitem .price{
    color: var(--color-high-text);
  }
  .goodsitem .goodsinfo{
    margin-bottom: 10px;
  }
  .goodsitem .goodsinfo img{
    width: 13px;
    height: 13px;
    position: relative;
    top: 1px;
    z-index: -9;
    margin: 0 1px 0 4px;
  }
</style>