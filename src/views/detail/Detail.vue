<template>
  <div class="detail">
    <detail-nav-bar @barcheck="barcheck"></detail-nav-bar>
    <div v-show="isshow" class="music">
      <div>
        <a :href="info.url" target="_blank">
          <img
            class="imgs"
            v-lazy="info.picurl"
            alt=""
            onerror="this.src = '~assets/img/common/placeholder.png'"
          />
        </a>
      </div>
      <div>
        <span>{{ info.name }}</span>
        <span>{{ info.artistsname }}</span>
        <div>
          <audio ref="audio" :src="info.url" hidden></audio>
          <button class="btn1" @click="playbtn">播放</button>
          <button class="btn2" @click="pausebtn">暂停</button>
        </div>
      </div>
    </div>
    <div class="paper" v-show="!isshow">
      <p>{{paper}}</p>
    </div>
    <detail-bottom-bar @addcart='addcart1'/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar";
import { getDetailinfo, goods, getDetailpaper } from "network/detailinfo";
import { textmixin } from "common/mixin";

//vuex的Actions属性 直接在methods使用
import {mapActions} from 'vuex'


export default {
  name: "Detail",

  components: {
    DetailNavBar,
    DetailBottomBar
  },



  data() {
    return {
      iid: null,
      info: [],
      goods: {},
      paper:null,
      isshow:true,
    };
  },
  mixins: [textmixin],
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.iid);

    getDetailinfo().then(
      (res) => {
        //console.log(res);
        this.info = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );

    getDetailpaper().then( 
      (res) => {
        this.paper = res.data.content;
      },
      (err) => {
        console.log(err);
      }
    );

    // this.goods = new goods("fhf", 18);
    //判断对象是否为空
    //Object.keys(this.goods) == 0;
    // console.log(Object.keys(this.goods) == 0);

    // this.$nextTick(()=>{
    //   console.log("nexttick");//大约20ms
    // })
  },


  mounted() {},

  destroyed() {
    this.$refs.audio && this.$refs.audio.pause();
  },

  methods: {
    ...mapActions(['addcart']),

    playbtn() {
      this.$refs.audio.play();
    },
    pausebtn() {
      this.$refs.audio.pause();
    },
    addcart1(){
      var product={}
      product.img=this.info.picurl
      product.iid=this.iid
      product.mname=this.info.name
      product.aname=this.info.artistsname

      // this.$store.commit('addcart', product);//mutations调用
      // this.$store.dispatch('addcart', product)//将一个复杂的mutations(添加和自增) 分发为 二个mutations

      //正常的调用
      this.$store.dispatch('addcart', product).then(res=>{
        console.log(res);
        this.$toast.show(res);
      })

      //mapActions的调用 直接调用methos的方法
      // this.addcart(product).then(res=>{
      //   console.log(res);
      // })
    },
    barcheck(index){
      if(index==0){
        this.isshow=true
      }else{
        this.isshow=false
      }
    }
  },
};
</script>

<style scoped>
.detail {
  width: 100%;
  color: black;
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.music {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 20px;
  height: 180px;
}
.music > div {
  flex: 1;
  padding: 20px;
  width: 50%;
}
.music .imgs {
  width: 100%;
  height: 100%;
}
.music span {
  display: block;
  margin: 10px 0 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.music button {
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  margin: 0 5px;
}
p{
  text-indent: 2em;
}
.paper{
  width: 100%;
  margin-top: 20px;
}
</style>
