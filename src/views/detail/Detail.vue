<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <div class="music">
      <div>
        <a :href="info.url" target="_blank">
          <img class="imgs" :src="info.picurl" alt="" />
        </a>
      </div>
      <div>
        <span>{{ info.name }}</span>
        <div>
          <audio ref="audio" :src="info.url" hidden></audio>
          <button class="btn1" @click="playbtn">播放</button>
          <button class="btn2" @click="pausebtn">暂停</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import { getDetailinfo, goods } from "network/detailinfo";
export default {
  name: "Detail",

  components: {
    DetailNavBar,
  },

  data() {
    return {
      iid: null,
      info: [],
      goods: null,
    };
  },

  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);

    getDetailinfo().then(
      (res) => {
        //console.log(res);
        this.info = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.goods = new goods("fhf", 18);
    //判断对象是否为空
    Object.keys(this.goods) == 0;
    console.log(Object.keys(this.goods) == 0);
  },

  mounted() {},

  destroyed() {
    this.$refs.audio && this.$refs.audio.pause();
  },

  methods: {
    playbtn() {
      this.$refs.audio.play();
    },
    pausebtn() {
      this.$refs.audio.pause();
    },
  },
};
</script>

<style scoped>
.detail {
  width: 100%;
  color: black;
}
.music {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 20px;
}
.music > div {
  flex: 1;
  padding: 20px;
}
.music .imgs {
  width: 100%;
  height: 100%;
}
.music span {
  display: block;
  margin: 20px 0 10px 0;
}
.music button {
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  margin: 0 5px;
}
</style>
