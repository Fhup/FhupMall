<template>
  <div>
    <cart-list-item v-for="(item,index) in getCart" :product='item' :key="index"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem';

export default {
  components: { CartListItem },
  name: 'CartList',

  data() {
    return {
      
    };
  },

  computed: {
    ...mapGetters(['getCart'])
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
</style>