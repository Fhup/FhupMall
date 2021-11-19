<template>
    <div id="home">
        <!-- home导航 -->
        <nav-bar class="nav-bar"><div slot="bar-center">购物迪</div></nav-bar>

        <!-- .native可以监听组件的原生事件 -->
        <back-top @click.native="backtopcli" v-show="flag"/>


        <div class="homecontent" ref="homecontent">
            <div>
              <!-- home轮播图 -->
              <swiper v-if="banners.length">
                  <swiper-item v-for="(item,index) in banners"  :key="index">
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
        </div>

    </div>
</template>

<script>
import HomeRecommend from './homechild/HomeRecommend'
import FashionView from './homechild/FashionView'


import Bscroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import BackTop from 'components/content/backTop/BackTop'

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
            goods:[],
            bs:null,
            flag:false
        };
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem,
      HomeRecommend,
      FashionView,
      TabControl,
      GoodsList,
      BackTop
    },
    created() {

      getbanner().then(res=>{
        //console.log(res);
        this.banners=res.data.banner.list,
        this.recommends=res.data.recommend.list
      },err=>{
        console.log(err);
      });

      this.goods.push(...newsList.newsList.newsList)
    },
    methods: {
      tabclick(index){
        //对["流行","精选","新款"]里面的数据通过index处理
        //console.log(this.titles[index]);
      },
      backtopcli(){
        this.bs && this.bs.scrollTo(0,0,1000)
      },

      //节流函数
      debounce(fn,delay){
        let timeout = null; // 创建一个标记用来存放定时器的返回值
        return function (...args) {
            clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
            timeout = setTimeout(() => {
                // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的
                // interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
                fn.apply(this,args);
            }, delay);
        };
      },

      refresh(){
          // console.log("-------");
          this.bs && this.bs.refresh()
      }
    },
    mounted() {
        this.bs = new Bscroll( this.$refs.homecontent, {
          probeType:3, //侦测: 2:手指滑动侦测(惯性不侦测) 3:所有滑动都侦测
          pullUpLoad: true,
          // click:true,
          observeDOM: true,//处理图片和dom
          observeImage: true
        })
        this.bs.on('scroll',position=>{
          this.flag=-position.y>1000
        })
        this.bs.on('pullingUp',()=>{
          // console.log(newsList.newsList.newsList.length);
          this.goods.push(...newsList.newsList.newsList)
          
          // console.log(this.goods.length)       
          // console.log("上拉加载更多");
          this.bs.finishPullUp()
        })

        const refresh=this.debounce(this.refresh,1000)
        //这个方法执行多次
        this.$bus.$on("itemimgclick",()=>{
          // this.bs && this.bs.refresh()
          refresh()
        }) 
    }, 
    
};
</script>

<style scoped>

  #home{
    padding-top: 44px;
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
  .homecontent{
    height:83vh;
    overflow: hidden;
  }
</style>