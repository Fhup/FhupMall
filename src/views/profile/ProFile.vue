<template>
    <div>
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
        <van-rate v-model="value" icon="like" void-icon="like-o" />
    </div>
</template>

<script>
export default {
    name: 'Profile',

    data() {
    return {
      date: '',
      show: false,
      value: 3,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style  scoped>

</style>