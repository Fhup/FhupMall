<template>
  <div>
    <h2 class="title">个人主页</h2>
    <div class="userinfo">
      <van-image
        width="100"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        fit="scale-down"
      />
      <div>
        <div
          style="
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 15px;
            text-indent: 1rem;
          "
        >
          Fhup
        </div>
        <div style="text-indent: 2rem">此用户没有留下什么</div>
      </div>
    </div>

    <div style="position: fixed; bottom: 50px; left: 0; right: 0">
      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        size="large"
      >
        退出登录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 10px;
  color: red;
}
.userinfo {
  padding: 0 10px;
  display: flex;
  align-items: center;
}
</style>
