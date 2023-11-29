<template>
  <div id="menu">
    <a-menu theme="dark" mode="inline">
      <!-- 修正 v-for 的位置 -->
      <template v-for="item in props.routes">
        <!-- 无子菜单直接渲染 -->
        <a-menu-item
          :key="item.path"
          v-if="!item.children || item.children.length === 0"
        >
          <!-- user-outlined 应该是一个组件，需要正确引入 -->

          <span class="nav-text">{{ item.name }}</span>
        </a-menu-item>

        <!-- 有子菜单 -->
        <a-sub-menu :key="item.path" v-else>
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <menu-layout :routes="item.children" />
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouteRecordRaw } from "vue-router";
import SvgIcon from "@/components/svgIcon.vue";

const props = defineProps<{ routes: Array<RouteRecordRaw> }>();
</script>

<style lang="scss">
#menu {
}
</style>
