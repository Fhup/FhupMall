<template>
    <div id="home">
        <!-- home导航 -->
        <nav-bar class="nav-bar"><div slot="bar-center">购物迪</div></nav-bar>

        <tab-control :titles="titles" @tabclick="tabclick" v-show="isfixed" ref="tabcontrol1" :class="{toptab:isfixed}" />

        <!-- .native可以监听组件的原生事件 -->
        <back-top @click.native="backtopcli" v-show="flag"/>

        <div class="homecontent" ref="homecontent">
            <div>
              <!-- home轮播图 -->
              <swiper v-if="banners.length">
                  <swiper-item v-for="(item,index) in banners"  :key="index">
                    <a :href="item.link" target="_blank">
                        <img :src="item.image" alt="banner" @load="bannerimgload"></img>
                    </a>
                  </swiper-item>
              </swiper>

              <home-recommend :recommends="recommends"/>

              <fashion-view/>

              <tab-control :titles="titles" @tabclick="tabclick" ref="tabcontrol2"/>

              <goods-list :goods="goods"/>

            </div>
        </div>

    </div>
</template>

<script>
import HomeRecommend from './homechild/HomeRecommend'
import FashionView from './homechild/FashionView'
import {debounce} from 'common/utils'


import Bscroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import BackTop from 'components/content/backTop/BackTop'

import {getbanner} from 'network/home'
import newsList from 'mock/index'

import NavBar from 'components/common/navbar/NavBar'
import {Swiper, SwiperItem} from 'components/common/swiper/index'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import { textmixin } from "common/mixin";


export default {
    name: 'Home',

    data() {
        return {
            banners:[],
            recommends:[],
            titles:["流行","精选","新款"],
            goods:[],
            bs:null,
            flag:false,
            taboffsetTop:0,
            taboffsetTop_flag:true,
            isfixed:false,
            saveY:0
        };
    },
    mixins:[textmixin],
    activated() {
      this.bs && this.bs.refresh()
      this.bs && this.bs.scrollTo(0,this.saveY,0)
      
      // console.log("得到"+this.saveY);
    },
    deactivated() {
      this.saveY=this.bs.y

      // console.log("失去"+this.saveY);
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
        this.$refs.tabcontrol1.cindex=index;
        this.$refs.tabcontrol2.cindex=index;
      },
      backtopcli(){
        this.bs && this.bs.scrollTo(0,0,1000)
      },
      refresh(){
          // console.log("-------");
          this.bs && this.bs.refresh()
      },
      //获取tabcontrol的高度实现吸顶
      bannerimgload(){
        if(this.taboffsetTop_flag){
          //$el 获取组件中的元素
          this.taboffsetTop=this.$refs.tabcontrol2.$el.offsetTop
          this.taboffsetTop_flag=false
        }
        
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
           this.isfixed =-position.y>this.taboffsetTop
        })
        this.bs.on('pullingUp',()=>{
          // console.log(newsList.newsList.newsList.length);
          this.goods.push(...newsList.newsList.newsList)
          
          // console.log(this.goods.length)       
          // console.log("上拉加载更多");
          this.bs.finishPullUp()
        })

        const refresh=debounce(this.refresh,1000)
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
    width: 100%;
  }
  .nav-bar{
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .homecontent{
    height:83vh;
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
  }
  .toptab{
    position: relative;
    width: 100%;
    z-index: 9;
    background-color: #fff;
  }
</style>