<template>
  <div id="layout">
    <a-layout>
      <!--      左侧-->
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        class="left"
      >
        <div class="logo" />
        <MenuLayout :routes="routes" />
      </a-layout-sider>
      <!--右侧-->
      <a-layout class="right">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content class="content" :style="{}">
          <div class="content-main">
            <!--  窗口   -->
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer class="footer">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import routers from "@/router";
import MenuLayout from "@/layout/MenuLayout.vue";
import { computed } from "vue";
import { RouteRecordRaw, useRoute, useRouter } from "vue-router";
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
const route = useRoute();
const router = useRouter();
// 路由递归
const routes = computed(() => {
  function _noHidden(_routes: RouteRecordRaw[]) {
    const filterRoute: RouteRecordRaw[] = [];
    _routes.forEach((_route) => {
      if (!_route?.meta?.isHidden) {
        if (!_route.children || _route.children.length === 0) {
          filterRoute.push(_route);
        } else {
          filterRoute.push({
            ..._route,
            children: _noHidden(_route.children)! || [],
          });
        }
      }
    });
    return filterRoute;
  }
  return _noHidden(
    router.getRoutes().find((item) => item.name === "layout")!.children
  );
});
console.log(routes.value);
</script>

<style lang="scss">
#layout {
  height: 100%;
  //左侧
  .left {
    height: 100vh;

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 1);
      margin: 16px;
    }
  }

  //右侧
  .right {
    //主要内容区
    .content {
      margin: 24px 16px 0;

      .content-main {
        padding: 24px;
        background: #fff;
        min-height: 360px;
      }
    }

    //底部
    .footer {
      text-align: center;
    }
  }

  //#components-layout-demo-responsive .logo {
  //  height: 32px;
  //  background: rgba(255, 255, 255, 1);
  //  margin: 16px;
  //}

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }

  [data-theme="dark"] .site-layout-sub-header-background {
    background: #141414;
  }
}
</style>
