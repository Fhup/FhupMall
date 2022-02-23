<template>
  <div class="bottom-bar">
    <div class="check-all">
      <!-- 给组件传值 给里面的date传值 而不是新建data重复绑定 -->
      <checkbutton class="checkbutton" :ischeck="selectall" @click.native="checkall"/>
      <div>全选</div> 
    </div>
    <div class="total">
      合计: {{totalprice}}
    </div>
    <div class="calc" @click="gocalc">
      去计算({{calculate}})
    </div>
  </div>
</template>

<script>
import checkbutton from './checkbutton';
export default {
  components: { checkbutton },
  name: 'CartBottomBar',

  data() {
    return {
    };
  },

  mounted() {
    
  },

  
  computed:{
    totalprice(){
      return "¥"+ this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((prev,item)=>{
        return prev+(item.iid*item.count)
      },0)
    },
    calculate(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).length
    },
    selectall(){
      // 二种 filter和find
      // if(this.$store.state.cartList.length==0) return false
      // return !(this.$store.state.cartList.filter(item=>!item.checked).length)
      if(this.$store.state.cartList.length==0) return false
      return !(this.$store.state.cartList.find(item=> !item.checked))
    }
  },
  methods: {
    checkall(){
      if(this.selectall){
        this.$store.state.cartList.forEach(item=>item.checked=false)
      }else{
        this.$store.state.cartList.forEach(item=>item.checked=true)
      }
    },
    gocalc(){
      if(!this.selectall){
        if(this.$store.state.cartList.length==0) return false
        this.$toast.show("请选择要购买的商品");
      }else{
        //====>购买界面，确认信息
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar{
  font-size: 15px;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  display: flex;
}
.check-all{
  display: flex;
  justify-content: left;
  width: 60px;
  margin-left: 10px;
}
.checkbutton{
  position: relative;
  top:2.5px;
  margin-right: 5px;
}
.total{
  margin-left: 10px;
  flex: 1;
  text-align: center;
}
.calc{
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  margin-right: 10px;
}
</style>