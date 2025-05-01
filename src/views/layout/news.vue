<template>
  <div class="snack-container" style="margin-top: 60px;">
    <!-- 跑马灯组件 -->
    <div class="snack-marquee-wrap">
      <div class="snack-marquee" :style="marqueeStyle">
        <span
          v-for="(notice, index) in notices"
          :key="index"
          class="snack-marquee-item"
        >
          {{ notice }}
          <i class="snack-divider">🍬</i>
        </span>
      </div>
    </div>

    <!-- 正文内容 -->
    <main class="snack-main">
      <h1 class="snack-title">美味零食天地</h1>
      
      <!-- 分类导航 -->
      <nav class="snack-nav">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['snack-btn', { 'snack-btn-active': selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </nav>

      <!-- 零食列表 -->
      <div class="snack-grid">
        <article
          v-for="(item, idx) in filteredSnacks"
          :key="item.id"
          class="snack-card"
          :style="{ '--delay': idx * 0.1 + 's' }"
        >
          <div class="snack-img-wrap">
            <img :src="item.image" :alt="item.title" />
            <span class="snack-tag">{{ item.category }}</span>
          </div>
          <div class="snack-info">
            <h2 class="snack-item-title">{{ item.title }}</h2>
            <p class="snack-desc">{{ item.excerpt }}</p>
            <div class="snack-meta">
              <span class="snack-date">📅 {{ item.date }}</span>
              <span class="snack-likes">❤️ {{ item.likes }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- 分页 -->
      <div class="snack-pager">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="['snack-page', { 'snack-page-active': currentPage === page }]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 跑马灯提示
const notices = ref([
  '新品上市：爆浆巧克力球现已开售！',
  '限时优惠：买二送一，薯片狂欢中！',
  '健康推荐：低脂燕麦棒，简约轻食首选',
  '独家预告：进口酸奶熊下周上架'
])

// 分类
const categories = ref(['全部', '热销零食', '新品推荐', '健康轻食', '进口风味'])
const selectedCategory = ref('全部')

// 零食数据
const snacksList = ref([
  { id: 1, title: '爆浆巧克力球', category: '热销零食', image: 'https://picsum.photos/400/300?random=11&snack', excerpt: '浓郁巧克力外壳，内含水果汁爆浆，每一口都是惊喜。', date: '2025-04-20', likes: 1245 },
  { id: 2, title: '香辣薯片大礼包', category: '热销零食', image: 'https://picsum.photos/400/300?random=22&snack', excerpt: '多种口味组合，满足你对辣味的所有幻想。', date: '2025-04-18', likes: 987 },
  { id: 3, title: '低脂燕麦能量棒', category: '健康轻食', image: 'https://picsum.photos/400/300?random=33&snack', excerpt: '富含膳食纤维，健康卡路里，运动与办公小伙伴。', date: '2025-04-15', likes: 675 },
  { id: 4, title: '进口酸奶小熊', category: '进口风味', image: 'https://picsum.photos/400/300?random=44&snack', excerpt: '法国进口酸奶制成，绵密口感，回味悠长。', date: '2025-04-10', likes: 812 },
  { id: 5, title: '海苔芝士条', category: '新品推荐', image: 'https://picsum.photos/400/300?random=55&snack', excerpt: '香脆海苔与芝士的经典组合，新品首发尝鲜价。', date: '2025-04-08', likes: 430 },
  { id: 6, title: '水果风味棉花糖', category: '新品推荐', image: 'https://picsum.photos/400/300?random=66&snack', excerpt: '多种水果味道混合，轻盈入口即化。', date: '2025-04-05', likes: 590 }
])

// 分页
const currentPage = ref(1)
const pageSize = 6

const filteredSnacks = computed(() =>
  snacksList.value
    .filter(item => selectedCategory.value === '全部' || item.category === selectedCategory.value)
    .slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
)
const totalPages = computed(() => Math.ceil(snacksList.value.length / pageSize))

// 跑马灯动画
const marqueePosition = ref(0)
setInterval(() => {
  marqueePosition.value = marqueePosition.value <= -100 ? 0 : marqueePosition.value - 0.5
}, 50)
const marqueeStyle = computed(() => ({ transform: `translateX(${marqueePosition.value}%)` }))
</script>

<style scoped>
.snack-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%);
  border-radius: 16px;
}

/* Marquee */
.snack-marquee-wrap {
  overflow: hidden;
  border-radius: 12px;
  background: #ffefd5;
  margin-bottom: 30px;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.snack-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: snack-move 20s linear infinite;
}
@keyframes snack-move {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.snack-marquee-item {
  font-size: 16px;
  margin: 0 40px;
  color: #d35400;
  font-weight: bold;
}
.snack-divider {
  margin-left: 20px;
}

/* 标题 */
.snack-title {
  text-align: center;
  font-size: 2.8em;
  margin: 30px 0;
  color: #c0392b;
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 2px 2px rgba(0,0,0,0.1);
}

/* 分类 */
.snack-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}
.snack-btn {
  padding: 10px 24px;
  border: 2px dashed #c0392b;
  border-radius: 30px;
  background: transparent;
  color: #c0392b;
  cursor: pointer;
  transition: all 0.3s;
}
.snack-btn-active {
  background: #c0392b;
  color: #fff;
  border-style: solid;
}

/* 零食卡片 */
.snack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.snack-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: transform 0.3s ease var(--delay);
}
.snack-card:hover {
  transform: translateY(-8px) rotate(-1deg);
}
.snack-img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.snack-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.snack-card:hover .snack-img-wrap img {
  transform: scale(1.1);
}
.snack-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e67e22;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85em;
}
.snack-info {
  padding: 18px;
}
.snack-item-title {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #2c3e50;
}
.snack-desc {
  font-size: 0.95em;
  line-height: 1.6;
  color: #7f8c8d;
  margin-bottom: 14px;
}
.snack-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #95a5a6;
}

/* 分页 */
.snack-pager {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}
.snack-page {
  padding: 8px 16px;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
.snack-page-active {
  background: #c0392b;
  color: #fff;
  border-color: #c0392b;
}

@media (max-width: 768px) {
  .snack-grid { grid-template-columns: 1fr; }
  .snack-marquee-item { font-size: 14px; }
  .snack-title { font-size: 2.4em; }
}
</style>
