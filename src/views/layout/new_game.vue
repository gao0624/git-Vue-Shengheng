<template>
<div class="snf-container" style="max-width:1200px;margin:20px auto;">
    <!-- Hero Section -->
    <section class="snf-hero">
    <div class="snf-hero-overlay"></div>
    <img src="../../assets/summner.jpg" alt="Snack Festival Banner" class="snf-hero-bg" />
    <div class="snf-hero-content">
        <h1 class="snf-hero-title">2025 夏日零食盛典</h1>
        <p class="snf-hero-subtitle">美味新潮零食，清凉一夏</p>
        <button class="snf-hero-btn" @click="scrollToDeals">立即抢购</button>
    </div>
    </section>

    <!-- Featured Deals -->
    <section class="snf-deals" ref="dealsSection">
    <h2 class="snf-section-title">精选好物</h2>
    <div class="snf-deal-grid">
        <div v-for="item in deals" :key="item.id" class="snf-deal-card">
        <img :src="item.image" :alt="item.name" class="snf-deal-img" />
        <div class="snf-deal-info">
            <h3 class="snf-deal-name">{{ item.name }}</h3>
            <p class="snf-deal-desc">{{ item.description }}</p>
            <div class="snf-deal-footer">
            <span class="snf-deal-price">¥{{ item.price }}</span>
            <button class="snf-add-btn" @click="addToCart(item)">加入购物车</button>
            </div>
        </div>
        </div>
    </div>
    </section>

    <!-- Event Highlights -->
    <section class="snf-highlights">
    <h2 class="snf-section-title">活动亮点</h2>
    <ul class="snf-highlight-list">
        <li>🎁 抽奖活动：消费满99元，即可参与抽奖</li>
        <li>⏰ 限时秒杀：每日10:00 / 14:00 / 20:00 低价开抢</li>
        <li>📦 包邮福利：全场满59元全国包邮</li>
        <li>❤️ 会员专享：加入会员再享9折优惠</li>
    </ul>
    </section>

    <!-- Footer Call-to-Action -->
    <section class="snf-cta">
    <p>关注我们，分享乐趣</p>
    <div class="snf-social">
        <a href="#" class="snf-social-icon"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wechat.svg" alt="WeChat" /></a>
        <a href="#" class="snf-social-icon"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/qq.svg" alt="QQ" /></a>
    </div>
    </section>
</div>
</template>

<script setup>
import { ref } from 'vue'

// Featured deals data
const deals = ref([
  { id: 1, name: '爆浆巧克力球', description: '丝滑巧克力，果味爆浆', price: 19.9, image: require('@/assets/qiaokeli.jpg') },
  { id: 2, name: '香辣薯片大礼包', description: '多种口味，香辣过瘾', price: 29.9, image: require('@/assets/shupian.jpg') },
  { id: 3, name: '低脂燕麦棒', description: '健康轻食，补充能量', price: 12.5, image: require('@/assets/yanmaibang.jpg') }
])

// Simulated shopping cart
const cart = ref([])
function addToCart(item) {
  const existing = cart.value.find(i => i.id === item.id)
  if (existing) existing.quantity++
  else cart.value.push({ ...item, quantity: 1 })
  alert(`${item.name} 已加入购物车`)
}

// Scroll to deals section
const dealsSection = ref(null)
function scrollToDeals() {
  dealsSection.value.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
:root {
  --snf-primary: #ff6f61;
  --snf-secondary: #ff9f43;
  --snf-bg: #fff3e0;
  --snf-text: #333;
  --snf-muted: #666;
}

.snf-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: var(--snf-text);
}

.snf-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
}
.snf-hero-bg {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.7);
}
.snf-hero-overlay {
  position: absolute; top: 0; left: 0; right:0; bottom:0;
  background: rgba(0,0,0,0.3);
}
.snf-hero-content {
  position: absolute; top:50%; left:50%; transform: translate(-50%, -50%);
  text-align: center; color: #fff;
}
.snf-hero-title {
  font-size: 3.2rem; margin:0; letter-spacing:2px;
}
.snf-hero-subtitle {
  font-size: 1.2rem; margin:12px 0;
}
.snf-hero-btn {
  padding: 12px 24px; font-size:1rem; color:#fff;
  background: var(--snf-primary); border:none; border-radius:24px;
  cursor:pointer; transition: background 0.3s;
}
.snf-hero-btn:hover { background: var(--snf-secondary); }

.snf-deals {
  background: var(--snf-bg); padding:60px 20px;
}
.snf-section-title {
  text-align: center; font-size:2rem; margin-bottom:40px;
  color: var(--snf-primary);
}
.snf-deal-grid {
  display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap:24px;
  max-width:1200px; margin:0 auto;
}
.snf-deal-card {
  background:#fff; border-radius:16px; overflow:hidden;
  box-shadow:0 4px 12px rgba(0,0,0,0.05);
  transition:transform 0.3s;
}
.snf-deal-card:hover { transform: translateY(-6px); }
.snf-deal-img { width:100%; height:180px; object-fit:cover; }
.snf-deal-info { padding:16px; }
.snf-deal-name { margin:0 0 8px; font-size:1.2rem; }
.snf-deal-desc { margin:0 0 12px; color: var(--snf-muted); }
.snf-deal-footer { display:flex; justify-content:space-between; align-items:center; }
.snf-deal-price { font-size:1.2rem; color: var(--snf-secondary); font-weight:bold; }
.snf-add-btn {
  padding:6px 12px; background:var(--snf-primary); color:#fff;
  border:none; border-radius:12px; cursor:pointer; transition:background 0.3s;
}
.snf-add-btn:hover { background: var(--snf-secondary); }

.snf-highlights {
  padding:60px 20px; max-width:800px; margin:0 auto;
}
.snf-highlight-list { list-style:none; padding:0; margin:0; }
.snf-highlight-list li {
  font-size:1rem; margin:12px 0; display:flex; align-items:center;
}
.snf-highlight-list li::before {
  content: '✓'; display:inline-block; color: var(--snf-primary);
  margin-right:8px;
}

.snf-cta {
  padding:40px 20px; text-align:center; background:#fff;
}
.snf-cta p { margin:0 0 12px; font-size:1.2rem; }
.snf-social { display:flex; justify-content:center; gap:16px; }
.snf-social-icon img {
  width:24px; height:24px;
  filter: invert(34%) sepia(85%) saturate(5292%) hue-rotate(354deg) brightness(95%) contrast(105%);
  transition:transform 0.3s;
}
.snf-social-icon:hover img { transform:scale(1.2); }

@media (max-width: 768px) {
  .snf-hero { height:300px; }
  .snf-hero-title { font-size:2.4rem; }
  .snf-deals { padding:40px 10px; }
  .snf-highlights { padding:40px 10px; }
}
</style>