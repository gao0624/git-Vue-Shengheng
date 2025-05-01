<template>
  <footer class="sf-footer">
    <div class="sf-wave-top"></div>
    <!-- 横幅图像 -->
    <div class="sf-banner">
      <img src="/assets/snack_banner.jpg" alt="美味零食" />
    </div>
    <div class="sf-content">
      <div class="sf-brand">
        <img src="../../assets/logo.jpg" alt="Snack Shop" class="sf-logo" />
        <p class="sf-tagline">美味零食，欢乐共享</p>
      </div>
      <div class="sf-links">
        <div class="sf-column">
          <div class="sf-col-header">
            <img src="https://img.icons8.com/?size=100&id=ZVzzSEm79Nk9&format=png&color=000000" alt="甜品糖果" class="sf-col-icon" />
            <h4>甜品糖果</h4>
          </div>
          <ul>
            <li><a href="#">巧克力系列</a></li>
            <li><a href="#">糖果礼包</a></li>
            <li><a href="#">棉花糖</a></li>
            <li><a href="#">软糖</a></li>
          </ul>
        </div>
        <div class="sf-column">
          <div class="sf-col-header">
            <img src="https://img.icons8.com/?size=100&id=31713&format=png&color=000000" alt="坚果炒货" class="sf-col-icon" />
            <h4>坚果炒货</h4>
          </div>
          <ul>
            <li><a href="#">蜂蜜腰果</a></li>
            <li><a href="#">盐焗杏仁</a></li>
            <li><a href="#">瓜子</a></li>
            <li><a href="#">混合坚果</a></li>
          </ul>
        </div>
        <div class="sf-column">
          <div class="sf-col-header">
            <img src="https://img.icons8.com/?size=100&id=ybNBvxQdKEil&format=png&color=000000" alt="膨化薯片" class="sf-col-icon" />
            <h4>膨化薯片</h4>
          </div>
          <ul>
            <li><a href="#">原味薯片</a></li>
            <li><a href="#">番茄味</a></li>
            <li><a href="#">海苔味</a></li>
            <li><a href="#">烧烤味</a></li>
          </ul>
        </div>
        <div class="sf-column sf-social-col">
          <div class="sf-col-header">
            <img src="https://img.icons8.com/?size=100&id=48271&format=png&color=000000" alt="关注我们" class="sf-col-icon" />
            <h4>关注我们</h4>
          </div>
          <div class="sf-social">
            <img src="https://img.icons8.com/?size=100&id=19977&format=png&color=000000" alt="微信" class="sf-col-icon" />
            <img src="https://img.icons8.com/?size=100&id=DfWJviWRlD3u&format=png&color=000000" alt="微博" class="sf-col-icon" />
            <img src="https://img.icons8.com/?size=100&id=FFNvpLcGhN7B&format=png&color=000000" alt="微信" class="sf-col-icon" />
          </div>
        </div>
      </div>
      <div class="sf-bottom">
        <p>©2022-2025 闪购零食铺 版权所有</p>
        <p>粤ICP备20220000号</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer 无需逻辑
</script>

<style scoped>
.sf-footer {
  position: relative;
  background: linear-gradient(135deg, #fff7e6, #ffe4e1);
  color: #333;
  font-family: "Arial", sans-serif;
  overflow: hidden;
}

.sf-wave-top {
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffe4e1" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,181.3C672,171,768,117,864,112C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>') no-repeat;
  background-size: cover;
}

.sf-banner {
  width: 100%;
  text-align: center;
  margin-top: -20px;
}
.sf-banner img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.sf-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sf-brand {
  text-align: center;
  margin-bottom: 32px;
}
.sf-logo {
  width: 80px;
  height: auto;
  margin-bottom: 8px;
}
.sf-tagline {
  font-size: 1rem;
  color: #ff7f50;
}

.sf-links {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  width: 100%;
}
.sf-column {
  flex: 1 1 200px;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.sf-column:hover {
  transform: translateY(-4px);
}
.sf-col-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.sf-col-icon {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
.sf-column h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #ff6b6b;
}
.sf-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sf-column ul li {
  margin-bottom: 8px;
}
.sf-column ul li a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}
.sf-column ul li a:hover {
  color: #ff4500;
}

.sf-social-col {
  display: flex;
  flex-direction: column;
}
.sf-social {
  display: flex;
  gap: 12px;
}
.sf-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #ff6b6b;
  color: #fff;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: transform 0.3s;
}
.sf-icon:hover {
  transform: scale(1.1);
}

.sf-bottom {
  text-align: center;
  margin-top: 32px;
  font-size: 0.85rem;
  color: #999;
  border-top: 1px solid #ffdede;
  padding-top: 16px;
  width: 100%;
}

@media (max-width: 768px) {
  .sf-column {
    flex: 1 1 100%;
  }
}
</style>
