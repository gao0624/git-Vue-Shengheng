<template>
  <section class="cs-section">
    <h2 class="cs-title">客户服务 · 联系我们</h2>
    <div class="cs-card-container">
      <div v-for="item in contacts" :key="item.id" class="cs-card">
        <!-- 头像 -->
        <div class="cs-avatar">
          <img :src="item.avatar" alt="Avatar" />
        </div>
        <!-- 图标 -->
        <div class="cs-card-icon">
          <i :class="item.icon"></i>
        </div>
        <!-- 文本信息 -->
        <div class="cs-card-text">
          <p class="cs-label">{{ item.label }}</p>
          <p class="cs-main">{{ item.main }}</p>
          <p v-if="item.sub" class="cs-sub">{{ item.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contacts = ref([
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/60?img=12',
    icon: 'fas fa-user-tie',
    label: '联系人',
    main: '薛先生',
    sub: '商务经理'
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/60?img=5',
    icon: 'fas fa-phone-alt',
    label: '服务热线',
    main: '+86 133 3606 2322',
    sub: '+86 571 8627 3270'
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/60?img=8',
    icon: 'fas fa-envelope',
    label: '电子邮箱',
    main: 'yaosen@chemball.com',
    sub: 'yaosen@mail.chemball.com'
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/60?img=15',
    icon: 'fas fa-map-marker-alt',
    label: '办公地址',
    main: '杭州市余杭区西溪联合科技广场4号楼406室',
    sub: '苏州 / 广州 分部'
  }
])
</script>

<style scoped>
:root {
  --cs-bg-start: #ffe3e3;
  --cs-bg-end: #e3f2ff;
  --cs-card-bg: rgba(255, 255, 255, 0.7);
  --cs-primary: #ff6b6b;
  --cs-secondary: #4d6fff;
  --cs-text-dark: #2c3e50;
  --cs-text-light: #555;
}

.cs-section {
  padding: 50px 20px;
  background: linear-gradient(135deg, var(--cs-bg-start), var(--cs-bg-end));
}
.cs-title {
  text-align: center;
  font-size: 2.8rem;
  color: var(--cs-primary);
  margin-bottom: 40px;
  position: relative;
}
.cs-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--cs-secondary);
  margin: 12px auto 0;
  border-radius: 2px;
}

.cs-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
.cs-card {
  background: var(--cs-card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 16px;
  padding: 16px;
  width: 320px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.cs-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0,0,0,0.15);
}

/* 头像样式 */
.cs-avatar {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.cs-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 图标 */
.cs-card-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--cs-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
}

.cs-card-text {
  flex: 1;
}
.cs-label {
  margin: 0;
  font-size: 0.9rem;
  color: var(--cs-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.cs-main {
  margin: 4px 0;
  font-size: 1.2rem;
  color: var(--cs-text-dark);
  font-weight: 500;
}
.cs-sub {
  margin: 0;
  font-size: 0.9rem;
  color: var(--cs-text-light);
}

@media (max-width: 768px) {
  .cs-card {
    width: 100%;
    max-width: 340px;
  }
}
</style>