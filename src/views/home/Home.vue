<template>
    <div id="home">
        <!-- home导航 -->
        <nav-bar class="nav-bar"><div slot="bar-center">购物迪</div></nav-bar>
        
        <!-- home轮播图 -->
        <swiper>
            <swiper-item v-for="item in banners"  :key="item.title">
              <a :href="item.link" target="_blank">
                  <img :src="item.image" alt="banner"></img>
              </a>
            </swiper-item>
        </swiper>

        <home-recommend :recommends="recommends"/>

        <fashion-view/>

        <tab-control :titles="titles" class="tab-control" @tabclick="tabclick"/>

        <goods-list :goods="goods"/>
    </div>
</template>

<script>
import HomeRecommend from './homechild/HomeRecommend'
import FashionView from './homechild/FashionView'

import {getbanner} from 'network/home'
import newsList from 'mock/index'

import NavBar from 'components/common/navbar/NavBar'
import {Swiper, SwiperItem} from 'components/common/swiper/index'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'




export default {
    name: 'Home',

    data() {
        return {
            banners:[],
            recommends:[],
            titles:["流行","精选","新款"],
            goods:newsList.newsList.newsList
        };
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem,
      HomeRecommend,
      FashionView,
      TabControl,
      GoodsList
    },
    created() {

      getbanner().then(res=>{
        // console.log(res);
        this.banners=res.data.banner.list,
        this.recommends=res.data.recommend.list
      },err=>{
        console.log(err);
      })
    },
    methods: {
      tabclick(index){
        console.log(this.titles[index]);
      }
    },
};
</script>

<style>

  #home{
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position:fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 43px;
    background-color: #fff;
  }
</style>