<template>
  <div id="app">
    <router-view />
  </div>
  <!--      <router-link to="/">Home</router-link> |-->
  <!--      <router-link to="/about">About</router-link>-->
</template>
<script setup lang="ts"></script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  height: 100vh; /* 使用视窗高度作为 body 的高度 */
  overflow-y: auto; /* 显示垂直滚动条，只有在内容溢出时才显示 */
}
</style>
