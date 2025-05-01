<template>
  <div class="order-container">
    <!-- 顶部导航：品牌与购物车 -->
    <header class="order-header">
      <h1 class="order-logo">闪购零食铺</h1>
      <div class="order-cart-icon" @click="toggleCart">
        🛒 <span class="order-cart-badge">{{ totalItems }}</span>
      </div>
    </header>

    <!-- 产品展示区 -->
    <main class="order-main">
      <h2 class="order-section-title">爆款推荐</h2>
      <div class="order-grid">
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="order-card"
        >
          <div class="order-img-wrap">
            <img :src="product.image" :alt="product.name" />
            <span class="order-price">¥{{ product.price }}</span>
          </div>
          <div class="order-info">
            <h3 class="order-name">{{ product.name }}</h3>
            <p class="order-desc">{{ product.description }}</p>
            <button class="order-add-btn" @click="addToCart(product)">+ 加入购物车</button>
          </div>
        </div>
      </div>

      <!-- 分页控件 -->
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="['page-btn', { active: currentPage === page }]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
      </div>
    </main>

    <!-- 购物车抽屉 -->
    <transition name="order-drawer">
      <aside v-if="showCart" class="order-cart-drawer">
        <button class="cart-close-btn" @click="toggleCart">✕</button>
        <h2 class="cart-title">您的购物车</h2>
        <ul class="cart-list">
          <li v-for="(item, idx) in cart" :key="item.product.id" class="cart-item">
            <img :src="item.product.image" alt="" class="cart-item-img" />
            <div class="cart-item-info">
              <p class="cart-item-name">{{ item.product.name }} ×{{ item.quantity }}</p>
              <p class="cart-item-price">¥{{ (item.product.price * item.quantity).toFixed(2) }}</p>
            </div>
            <button class="cart-remove-btn" @click="removeFromCart(idx)">×</button>
          </li>
        </ul>
        <div class="cart-total">
          <span>总计：</span><span class="total-amount">¥{{ totalPrice }}</span>
        </div>
        <button class="cart-checkout-btn" :disabled="!cart.length">去结算</button>
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 产品数据（24 条）
const products = ref([
  { id: 1,  name: '爆浆巧克力球',      price:18.8, image:'https://picsum.photos/300/200?random=101&snack', description:'浓郁巧克力外壳，内含果味爆浆。' },
  { id: 2,  name: '香辣薯片大礼包',      price:29.9, image:'https://picsum.photos/300/200?random=102&snack', description:'多种香辣口味，满足你对辣的幻想。' },
  { id: 3,  name: '低脂燕麦能量棒',      price:12.5, image:'https://picsum.photos/300/200?random=103&snack', description:'膳食纤维加能量，轻食新选择。' },
  { id: 4,  name: '进口酸奶小熊',        price:22.0, image:'https://picsum.photos/300/200?random=104&snack', description:'法国进口酸奶，口感丝滑。' },
  { id: 5,  name: '海苔芝士条',          price:15.0, image:'https://picsum.photos/300/200?random=105&snack', description:'海苔混芝士，咸香酥脆。' },
  { id: 6,  name: '水果风味棉花糖',      price:9.9,  image:'https://picsum.photos/300/200?random=106&snack', description:'多种口味，入口即化。' },
  { id: 7,  name: '蜜汁花生',            price:16.5, image:'https://picsum.photos/300/200?random=107&snack', description:'蜜汁烘焙，甜蜜香脆。' },
  { id: 8,  name: '海盐焦糖饼干',        price:14.8, image:'https://picsum.photos/300/200?random=108&snack', description:'咸甜平衡，焦糖香气。' },
  { id: 9,  name: '芒果干',              price:11.9, image:'https://picsum.photos/300/200?random=109&snack', description:'天然晾晒，Q弹果香。' },
  { id:10,  name: '奶油蛋卷',            price:19.0, image:'https://picsum.photos/300/200?random=110&snack', description:'绵软蛋卷，浓郁奶油。' },
  { id:11,  name: '巧克力威化',          price:13.5, image:'https://picsum.photos/300/200?random=111&snack', description:'层层威化，巧克力夹心。' },
  { id:12,  name: '椰子脆片',            price:17.2, image:'https://picsum.photos/300/200?random=112&snack', description:'椰香浓郁，健康脆片。' },
  { id:13,  name: '果味软糖',            price:8.8,  image:'https://picsum.photos/300/200?random=113&snack', description:'鲜果原汁，Q弹美味。' },
  { id:14,  name: '燕麦曲奇',            price:18.0, image:'https://picsum.photos/300/200?random=114&snack', description:'手工燕麦，口感酥脆。' },
  { id:15,  name: '薯条零食包',          price:13.9, image:'https://picsum.photos/300/200?random=115&snack', description:'迷你薯条，随心分享。' },
  { id:16,  name: '抹茶夹心饼干',        price:16.8, image:'https://picsum.photos/300/200?random=116&snack', description:'抹茶清香，夹心细腻。' },
  { id:17,  name: '坚果混合',            price:24.5, image:'https://picsum.photos/300/200?random=117&snack', description:'多种坚果，营养美味。' },
  { id:18,  name: '奶油夹心蛋糕',        price:21.0, image:'https://picsum.photos/300/200?random=118&snack', description:'绵软蛋糕，双层奶油。' },
  { id:19,  name: '草莓巧克力酥',        price:19.5, image:'https://picsum.photos/300/200?random=119&snack', description:'草莓与巧克力的浪漫邂逅。' },
  { id:20,  name: '蜂蜜格子饼',          price:17.8, image:'https://picsum.photos/300/200?random=120&snack', description:'蜂蜜浓郁，格子香脆。' },
  { id:21,  name: '蓝莓麦片碗',          price:12.2, image:'https://picsum.photos/300/200?random=121&snack', description:'蓝莓果粒，健康早餐。' },
  { id:22,  name: '姜汁软糖',            price:10.9, image:'https://picsum.photos/300/200?random=122&snack', description:'微辣姜香，暖胃小零食。' },
  { id:23,  name: '巧克力豆',            price:14.0, image:'https://picsum.photos/300/200?random=123&snack', description:'香浓巧克力，豆香回甘。' },
  { id:24,  name: '薄荷糖',              price:7.5,  image:'https://picsum.photos/300/200?random=124&snack', description:'清凉薄荷，口气清新。' }
])

// 分页配置
const perPage = 8
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(products.value.length / perPage))
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return products.value.slice(start, start + perPage)
})

// 购物车状态：每项包含 product 与数量
const cart = ref([])
const showCart = ref(false)

// 添加至购物车：若已存在则数量+1，否则新增
function addToCart(product) {
  const existing = cart.value.find(item => item.product.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ product, quantity: 1 })
  }
  showCart.value = true
}

// 移除整个商品项
function removeFromCart(index) {
  cart.value.splice(index, 1)
}

// 切换购物车抽屉
function toggleCart() {
  showCart.value = !showCart.value
}

// 总价计算
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)
)

// 总数量用于徽章
const totalItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)
</script>

<style scoped>
.order-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #fdfdfd;
  color: #333;
  min-height: 100vh;
  position: relative;
}
/* 头部 */
.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.order-logo {
  font-size: 2em;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px rgba(0,0,0,0.2);
}
.order-cart-icon {
  font-size: 1.5em;
  position: relative;
  cursor: pointer;
}
.order-cart-badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75em;
}
/* 主体 */
.order-main {
  padding: 40px;
}
.order-section-title {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #555;
}
.order-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.order-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: transform 0.3s ease;
}
.order-card:hover {
  transform: translateY(-8px) rotate(-1deg);
}
.order-img-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
}
.order-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.order-card:hover .order-img-wrap img {
  transform: scale(1.1);
}
.order-price {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: #e67e22;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: bold;
}
.order-info {
  padding: 16px;
}
.order-name {
  font-size: 1.2em;
  margin-bottom: 8px;
}
.order-desc {
  font-size: 0.95em;
  color: #777;
  margin-bottom: 12px;
}
.order-add-btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 24px;
  background: #ff9a9e;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;
}
.order-add-btn:hover {
  background: #fad0c4;
}
/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
.page-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
.page-btn.active {
  background: #ff9a9e;
  color: white;
  border-color: #ff9a9e;
}
/* 购物车抽屉 */
.order-cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  margin-top: 80px;
  height: 600px;
  background: #fff;
  box-shadow: -4px 0 16px rgba(0,0,0,0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.order-drawer-enter-active,
.order-drawer-leave-active {
  transition: transform 0.3s ease;
}
.order-drawer-enter-from,
.order-drawer-leave-to {
  transform: translateX(100%);
}
.cart-close-btn {
  align-self: flex-end;
  font-size: 1.2em;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}
.cart-title {
  font-size: 1.5em;
  margin-bottom: 16px;
}
.cart-list {
  flex: 1;
  overflow-y: auto;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.cart-item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 12px;
}
.cart-item-info {
  flex: 1;
}
.cart-item-name {
  font-size: 1em;
  margin-bottom: 4px;
}
.cart-item-price {
  font-size: 0.9em;
  color: #e74c3c;
}
.cart-remove-btn {
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}
.cart-remove-btn:hover {
  color: #e74c3c;
}
.cart-total {
  font-size: 1.2em;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-amount {
  font-weight: bold;
  color: #e74c3c;
}
.cart-checkout-btn {
  padding: 12px;
  border: none;
  border-radius: 24px;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;
}
.cart-checkout-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.cart-checkout-btn:hover:not(:disabled) {
  background: #ffe5e0;
}
</style>