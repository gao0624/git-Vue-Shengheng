<template>
  <div class="billiard-news-container" style="margin-top: 60px;">
    <!-- 跑马灯组件 -->
    <div class="marquee-container">
      <div class="marquee-content" :style="marqueeStyle">
        <span v-for="(notice, index) in notices" :key="index" class="marquee-item">
          {{ notice }}
          <i class="marquee-divider">◆</i>
        </span>
      </div>
    </div>

    <!-- 新闻主体内容 -->
    <main class="news-main">
      <h1 class="page-title">最新台球资讯</h1>
      
      <!-- 新闻分类导航 -->
      <nav class="news-categories">
        <button 
          v-for="category in categories" 
          :key="category" 
          :class="['category-btn', { active1: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </nav>

      <!-- 新闻列表 -->
      <div class="news-grid">
        <article 
          v-for="(news, index) in filteredNews" 
          :key="news.id" 
          class="news-card"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="news-image">
            <img :src="news.image" :alt="news.title">
            <span class="news-tag">{{ news.category }}</span>
          </div>
          <div class="news-content">
            <h2 class="news-title">{{ news.title }}</h2>
            <p class="news-excerpt">{{ news.excerpt }}</p>
            <div class="news-meta">
              <span class="news-date">{{ news.date }}</span>
              <span class="news-views">👁️ {{ news.views }} 浏览</span>
            </div>
          </div>
        </article>
      </div>

      <!-- 分页组件 -->
      <div class="pagination">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          :class="['page-btn', { active1: currentPage === page }]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// 跑马灯内容
const notices = ref([
  '🎉 祝贺丁俊晖获得2023英国锦标赛冠军！',
  '🔥 最新排名：奥沙利文重返世界第一',
  '🏆 中国公开赛报名通道正式开启',
  '📢 世界台联发布新赛季赛事日程'
])

// 跑马灯动画控制
const marqueePosition = ref(0)
let marqueeInterval = null

onMounted(() => {
  marqueeInterval = setInterval(() => {
    marqueePosition.value -= 1
    if (marqueePosition.value < -100) {
      marqueePosition.value = 0
    }
  }, 50)
})

onBeforeUnmount(() => {
  clearInterval(marqueeInterval)
})

const marqueeStyle = computed(() => ({
  transform: `translateX(${marqueePosition.value}%)`
}))

// 新闻数据
const categories = ref(['全部', '赛事新闻', '球员动态', '技术教学', '器材测评'])
const selectedCategory = ref('全部')

const newsList = ref([
  {
    id: 1,
    title: '2023斯诺克世锦赛完整赛程公布',
    category: '赛事新闻',
    image: 'https://picsum.photos/400/300?random&sports=snooker',
    excerpt: '世界斯诺克巡回赛正式公布2023年克鲁斯堡剧院赛程安排，中国军团共有5位选手获得正赛资格...',
    date: '2023-11-15',
    views: 23500
  },
  {
    id: 2,
    title: '丁俊晖最新训练视频曝光',
    category: '球员动态',
    image: 'https://picsum.photos/400/300?random=2&sports=snooker',
    excerpt: '中国斯诺克一哥丁俊晖在谢菲尔德训练基地展示新型加塞技巧，新赛季备战状态良好...',
    date: '2023-11-14',
    views: 18700
  },
  {
    id: 3,
    title: '美式九球冲杆技巧全解析',
    category: '技术教学',
    image: 'https://picsum.photos/400/300?random=3&sports=pool',
    excerpt: '职业选手亲自示范三种不同冲杆手法，包含力量控制、角度选择及犯规预防要点...',
    date: '2023-11-13',
    views: 12450
  },
  {
    id: 4,
    title: '2024台球器材展前瞻',
    category: '器材测评',
    image: 'https://picsum.photos/400/300?random=4&sports=equipment',
    excerpt: '全球顶尖台球器材厂商将携最新产品亮相广州，包含智能球杆和新型台呢技术...',
    date: '2023-11-12',
    views: 15680
  },
  {
    id: 5,
    title: '奥沙利文宣布参加中国公开赛',
    category: '球员动态',
    image: 'https://picsum.photos/400/300?random=5&sports=snooker',
    excerpt: '火箭奥沙利文确认参加明年3月北京站赛事，有望冲击职业生涯第40个排名赛冠军...',
    date: '2023-11-11',
    views: 29800
  },
  {
    id: 6,
    title: '九球世锦赛奖金池创新高',
    category: '赛事新闻',
    image: 'https://picsum.photos/400/300?random=6&sports=pool',
    excerpt: '2024女子九球世锦赛总奖金突破50万美元，中国选手陈思明将作为卫冕冠军出战...',
    date: '2023-11-10',
    views: 14200
  },
  {
    id: 7,
    title: '台球走位训练系统评测',
    category: '技术教学',
    image: 'https://picsum.photos/400/300?random=7&sports=training',
    excerpt: '对比测试三款智能训练系统，分析其走位模拟精度和实战应用效果...',
    date: '2023-11-09',
    views: 9800
  },
  {
    id: 8,
    title: '碳纤维球杆维护指南',
    category: '器材测评',
    image: 'https://picsum.photos/400/300?random=8&sports=cue',
    excerpt: '专业保养师详解碳纤维球杆的日常维护要点，延长使用寿命的关键技巧...',
    date: '2023-11-08',
    views: 11500
  },
  {
    id: 9,
    title: '青少年台球训练营启动',
    category: '赛事新闻',
    image: 'https://picsum.photos/400/300?random=9&sports=youth',
    excerpt: '中台协推出"明日之星"计划，将在全国选拔培养100名青少年台球选手...',
    date: '2023-11-07',
    views: 13200
  },
  {
    id: 10,
    title: '特鲁姆普更换新教练团队',
    category: '球员动态',
    image: 'https://picsum.photos/400/300?random=10&sports=snooker',
    excerpt: '准神特鲁姆普宣布与知名教练克里斯·亨利合作，目标改善长台稳定性...',
    date: '2023-11-06',
    views: 17600
  },
  // 继续补充10条数据...
  {
    id: 11,
    title: '中式黑八规则修订解读',
    category: '技术教学',
    image: 'https://picsum.photos/400/300?random=11&sports=chinese8',
    excerpt: '2024版中式台球国际规则主要变化：新增冲球要求和犯规判罚细则...',
    date: '2023-11-05',
    views: 8900
  },
  {
    id: 12,
    title: '台球手套性能对比测试',
    category: '器材测评',
    image: 'https://picsum.photos/400/300?random=12&sports=gloves',
    excerpt: '横向评测五款专业台球手套的防滑性、透气性和耐用性指标...',
    date: '2023-11-04',
    views: 7600
  },
  {
    id: 13,
    title: '世界元老锦标赛落户上海',
    category: '赛事新闻',
    image: 'https://picsum.photos/400/300?random=13&sports=senior',
    excerpt: '40岁以上组别最高级别赛事首次来到中国，亨德利确认参赛...',
    date: '2023-11-03',
    views: 15400
  },
  {
    id: 14,
    title: '塞尔比恢复训练进度',
    category: '球员动态',
    image: 'https://picsum.photos/400/300?random=14&sports=snooker',
    excerpt: '莱斯特小丑伤愈复出，备战德国大师赛期间展示新研发的安全球套路...',
    date: '2023-11-02',
    views: 16800
  },
  {
    id: 15,
    title: '旋转球物理原理解析',
    category: '技术教学',
    image: 'https://picsum.photos/400/300?random=15&sports=physics',
    excerpt: '从力学角度详解台球旋转的产生机制及实战应用场景...',
    date: '2023-11-01',
    views: 10200
  },
  {
    id: 16,
    title: '台球桌布更换指南',
    category: '器材测评',
    image: 'https://picsum.photos/400/300?random=16&sports=cloth',
    excerpt: '专业技师示范正确更换台呢步骤，避免常见安装错误导致的走速不均...',
    date: '2023-10-31',
    views: 6800
  },
  {
    id: 17,
    title: '全国业余联赛总决赛',
    category: '赛事新闻',
    image: 'https://picsum.photos/400/300?random=17&sports=amateur',
    excerpt: '32省市代表队齐聚杭州，争夺中国业余台球最高荣誉...',
    date: '2023-10-30',
    views: 12300
  },
  {
    id: 18,
    title: '颜丙涛解禁后首秀',
    category: '球员动态',
    image: 'https://picsum.photos/400/300?random=18&sports=snooker',
    excerpt: '经历禁赛风波后，中国新星将在澳门大师赛迎来复出首战...',
    date: '2023-10-29',
    views: 25600
  },
  {
    id: 19,
    title: '跳球技术进阶教程',
    category: '技术教学',
    image: 'https://picsum.photos/400/300?random=19&sports=jump',
    excerpt: '职业选手示范三种不同跳球手法，包含器械选择和发力技巧...',
    date: '2023-10-28',
    views: 11400
  },
  {
    id: 20,
    title: '智能记分系统评测',
    category: '器材测评',
    image: 'https://picsum.photos/400/300?random=20&sports=scoring',
    excerpt: '测试最新AI记分设备的识别精度和多人对战模式实用性...',
    date: '2023-10-27',
    views: 9200
  }
])

// 分页控制
const currentPage = ref(1)
const pageSize = 6

// 计算属性
const filteredNews = computed(() => {
  return newsList.value
    .filter(news => 
      selectedCategory.value === '全部' || news.category === selectedCategory.value
    )
    .slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
})

const totalPages = computed(() => {
  return Math.ceil(newsList.value.length / pageSize)
})
</script>

<style scoped>
.billiard-news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
}

/* 跑马灯样式 */
.marquee-container {
  background: #2c3e50;
  color: #fff;
  padding: 12px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  margin-bottom: 30px;
}

.marquee-content {
  white-space: nowrap;
  display: inline-block;
  transition: transform 0.5s linear;
}

.marquee-item {
  font-size: 16px;
  margin-right: 40px;
  display: inline-block;
}

.marquee-divider {
  color: #4CAF50;
  margin-left: 30px;
}

/* 新闻主体样式 */
.page-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5em;
  margin: 30px 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.news-categories {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 8px 20px;
  border: 2px solid #4CAF50;
  border-radius: 20px;
  background: transparent;
  color: #4CAF50;
  cursor: pointer;
  transition: all 0.3s;
}

.category-btn.active1 {
  background: #4CAF50;
  color: white;
}

/* 新闻卡片样式 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: transform 0.3s ease var(--delay);
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #4CAF50;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9em;
}

.news-content {
  padding: 20px;
}

.news-title {
  color: #2c3e50;
  font-size: 1.3em;
  margin-bottom: 12px;
}

.news-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9em;
}

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn {
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.page-btn.active1 {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .marquee-item {
    font-size: 14px;
  }
  
  .page-title {
    font-size: 2em;
  }
}
</style>