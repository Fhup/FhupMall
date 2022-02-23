<template>
  <div class="nav-bar">
    <div class="bar-left"><slot name="bar-left"></slot></div>
    <div class="bar-center"><slot name="bar-center"></slot></div>
    <div class="bar-right"><slot name="bar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .bar-left,.bar-right{
    width: 60px;
  }
  .bar-center{
    flex: 1;
    text-align: center;
  }
</style>