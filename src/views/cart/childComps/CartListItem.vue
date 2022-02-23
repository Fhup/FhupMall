<template>
  <div class="list-item">
    <div class="checkbutton">
      <checkbutton :ischeck='product.checked' @click.native="checkclick"/>
    </div>
    <div class="product-img">
      <img :src="product.img" alt="">
    </div>
    <div class="product-info">
      <div class="p-name">{{product.mname}}</div>
      <div>{{product.aname}}</div>
      <div class="p-price">{{product.iid}}✖{{product.count}}</div>
    </div>
  </div>
</template>

<script>
import checkbutton from './checkbutton.vue';
export default {
  components: { checkbutton },
  name: 'CartListItem',

  data() {
    return {
      
    };
  },

  props:{
    product:{
      type:Object,
      default:[] 
    }
  },

  mounted() {
    
  },

  methods: {
    checkclick(){
      this.product.checked=!this.product.checked
    }
  },
};
</script>

<style scoped>
  .list-item{
    font-size: 13px;
    height: 100px;
    border-bottom: 1px solid #999;
    display: flex;
  }
  .checkbutton{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-img{
    border-radius: 5px;
  }

  .product-img img{
    width: 80px;
    height: 100px;
    display: block;
    padding: 10px 0;
  }
  .product-info{
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    justify-content: space-evenly;
  }
  .p-name{
    color: black;
    font-weight: 700;
  }
  .p-price{
    text-align: right;
  }
</style>