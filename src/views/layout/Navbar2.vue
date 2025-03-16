<template>
    <div class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="../../assets/logo/logo.jpg" style="width: 100%;height: 55px;border-radius: 10px;">
        </router-link>
        <div class="navbar-links">
          <router-link to="/home">首页</router-link>
          <router-link to="/about">新闻</router-link>
          <router-link to="/services">预定</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
      </div>
      <router-link to="/login" class="login">登录</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .login{
    text-decoration: none;
    color: #fff; /* 修改为你喜欢的文本颜色 */
    margin: 0 20px;
    font-size: 16px;
    transition: color 0.3s;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff; /* 修改为你喜欢的文本颜色 */
    padding: 10px 0;
    z-index: 10000000;
    
  }
  
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .navbar-logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff; /* 修改为你喜欢的文本颜色 */
  }
  
  .navbar-links {
    display: flex;
  }
  
  .navbar-links a {
    text-decoration: none;
    color: #fff; /* 修改为你喜欢的文本颜色 */
    margin: 0 20px;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .navbar-links a:hover {
    color: #fff; /* 修改为你喜欢的鼠标悬停颜色 */
  }
  </style>
  