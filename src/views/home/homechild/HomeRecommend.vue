<template>
  <div class="recommend">
    <div class="rec-item" v-for="item in recommends">
      <a :href="item.link" target="_blank">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',

  data() {
    return {
      
    };
  },

  props:{
    recommends:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
  .rec-item{
    flex: 1;
    margin: 10px 0 10px;
  }
  .rec-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
</style>