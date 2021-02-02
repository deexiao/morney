<template>
  <div id="app">
    <!-- 切换路径看不同内容 -->
    <!-- https://router.vuejs.org/api/#router-view -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
body {
  // 苹果系统上的
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  //行高
  line-height: 1.5;
}
</style>
