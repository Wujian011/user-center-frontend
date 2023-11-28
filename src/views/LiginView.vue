<template>
  <div id="login-view">
    <div class="login-form">
      <h1>登录</h1>
      <a-form
        :model="loginFrom"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="账号"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input :value="loginFrom.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password :value="loginFrom.password" />
        </a-form-item>

        <a-form-item>
          <a-button class="login-btn" type="primary" html-type="submit"
            >登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const loginFrom = reactive({
  username: "",
  password: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};
</script>

<style lang="scss" scoped>
#login-view {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg.png") no-repeat center;
  background-size: cover; /* 保持宽高比例，使背景图片完全覆盖容器 */
  //盒子内布局
  display: flex;
  flex-direction: column;
  align-items: center; /* 在交叉轴上居中（垂直居中） */
  justify-content: center; /* 在主轴上居中（水平居中） */
  .login-form {
    width: 400px;
    margin: 0 auto;

    h1 {
      font-weight: 600;
      width: 100%;
      text-align: center;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
