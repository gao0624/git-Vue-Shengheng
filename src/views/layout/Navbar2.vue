<template>
    <div class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">Your Logo</router-link>
        <div class="navbar-links">
          <router-link to="/home">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333; /* 修改为你喜欢的颜色 */
    color: #fff; /* 修改为你喜欢的文本颜色 */
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    color: #ff5733; /* 修改为你喜欢的鼠标悬停颜色 */
  }
  </style>
  