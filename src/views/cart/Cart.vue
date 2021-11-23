<template>
    <div class="cart">
        <!--导航 -->
        <nav-bar class="navbar"><div slot="bar-center">购物车({{getCartlenght}})</div></nav-bar>
        <!-- 列表 -->
        <div class="cartlist">
        <cart-list/>
        </div>
        <!-- 汇总 -->
        <cart-bottom-bar class="bottom-bar"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'

//vuex的getters属性 直接在computed使用
import {mapGetters} from 'vuex'
import CartBottomBar from './childComps/CartBottomBar.vue';

export default {
    name: 'Cart',

    components:{
      NavBar,
      CartList,
      CartBottomBar
    },

    data() {
        return {
          
        };
    },

    mounted() {
        
    },

    computed:{
      //二种方法
      ...mapGetters([
        'getCartlenght'
      ]),
      // ...mapGetters({
      //   lenght:'getCartlenght'
      // })
    },
    

    methods: {
        
    },
};
</script>

<style scoped>

  .cart{
    overflow: hidden;
  }
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: fixed;
  }
  .cartlist{
    margin-top: 44px;
    margin-bottom: 87px;
  }
  .bottom-bar{
    position: fixed;
    bottom: 47px;
    left: 0;
    right: 0;
  }
</style>