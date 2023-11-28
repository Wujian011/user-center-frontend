<template>
  <div id="menu">
    <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item :key="item.path" v-for="item in routers">
        <!--        <user-outlined />-->
        <span class="nav-text"> {{ item.name }} </span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedKeys = ref<string[]>(["/"]);
import router from "@/router/index";

const routers = router.getRoutes();
console.log(routers);
</script>

<style lang="scss">
#menu {
}
</style>
