<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="snack-navbar">
    <b-container fluid class="snack-container">
      <!-- 品牌区 -->
      <router-link to="/" class="snack-brand">
        <img
          src="../../assets/logo.jpg"
          alt="Logo"
          class="snack-logo"
        />
        <span class="snack-title">SnackBuddy</span>
      </router-link>

      <!-- 折叠按钮 -->
      <b-navbar-toggle target="nav-collapse" class="snack-toggle" />

      <!-- 导航 & 用户区 -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="snack-nav ml-auto">
          <b-nav-item
            to="/home"
            class="snack-link"
            :active="$route.name === 'home'"
          >
            <i class="fas fa-home"></i>
            <span>首页</span>
          </b-nav-item>
          <b-nav-item
            to="/about"
            class="snack-link"
            :active="$route.name === 'about'"
          >
            <i class="fas fa-newspaper"></i>
            <span>零食资讯</span>
          </b-nav-item>
          <b-nav-item
            to="/services"
            class="snack-link"
            :active="$route.name === 'services'"
          >
            <i class="fas fa-shopping-cart"></i>
            <span>在线下单</span>
          </b-nav-item>
          <b-nav-item
            to="/contact"
            class="snack-link"
            :active="$route.name === 'contact'"
          >
            <i class="fas fa-phone"></i>
            <span>联系我们</span>
          </b-nav-item>

          <!-- 已登录 -->
          <b-nav-item-dropdown
            right
            v-if="userInfo"
            no-caret
            class="snack-user-dropdown"
          >
            <template #button-content>
              <div class="user-badge">
                <i class="fas fa-user-circle"></i>
                <span>{{ userInfo.userName || userInfo }}</span>
              </div>
            </template>
            <b-dropdown-item @click="goProfile">个人主页</b-dropdown-item>
            <b-dropdown-item @click="logout">退出</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- 未登录 -->
          <div v-else class="snack-auth">
            <button @click="goLogin" class="btn login-btn">
              <i class="fas fa-sign-in-alt"></i>
              登录
            </button>
            <button @click="goRegister" class="btn register-btn">
              <i class="fas fa-user-plus"></i>
              注册
            </button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SnackNavbar',
  computed: {
    ...mapState('userModule', ['userInfo'])
  },
  methods: {
    ...mapActions('userModule', ['logout']),
    goLogin() { this.$router.replace({ name: 'login' }); },
    goRegister() { this.$router.replace({ name: 'profile' }); },
    goProfile() { this.$router.push({ name: 'profile' }); }
  }
};
</script>

<style scoped>
.snack-navbar {
  background: linear-gradient(90deg, #ffd6a5 0%, #fdffb6 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  z-index: 1000;
}

.snack-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
}

.snack-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.snack-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
.snack-title {
  font-size: 1.5rem;
  color: #703800;
  font-weight: bold;
}

.snack-toggle .navbar-toggler-icon {
  filter: invert(35%) sepia(90%) saturate(500%) hue-rotate(320deg);
}

.snack-nav {
  display: flex;
  align-items: center;
  gap: 12px;
}
.snack-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #703800 !important;
  background: rgba(255, 255, 255, 0.7);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.95rem;
  transition: background 0.3s, transform 0.2s;
}
.snack-link:hover {
  background: #fff;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.snack-link:active,
.snack-link.active {
  background: #ff9a9e;
  color: #fff !important;
  transform: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.snack-user-dropdown .user-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #ffb8d1, #ff4c8c);
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
}

.snack-auth {
  display: flex;
  gap: 12px;
}
.login-btn {
  background: linear-gradient(135deg, #a1ffce, #faffd1);
  color: #2f4f4f;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.register-btn {
  border: 2px dashed #ff6f91;
  color: #ff6f91;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.register-btn:hover {
  background: #ff6f91;
  color: #fff;
}
</style>
