<template>
  <div class="snack-compare">
    <h2 class="title">传统零食店 VS 我们的零食店</h2>
    <div class="compare-container">
      <!-- 传统零食店 -->
      <div class="card traditional">
        <div class="card-header">传统零食店</div>
        <div class="card-item">
          <div class="label">选择少</div>
          <div class="desc">商品种类有限，难满足用户多样性的多样需求</div>
        </div>
        <div class="card-item">
          <div class="label">包装老旧</div>
          <div class="desc">视觉疲劳，吸引力低</div>
        </div>
        <div class="card-item">
          <div class="label">服务一般</div>
          <div class="desc">缺少耐心和推荐，体验感差</div>
        </div>
        <div class="card-item">
          <div class="label">环境杂乱</div>
          <div class="desc">货架杂乱无章，陈列无主题，健康难以保障</div>
        </div>
        <div class="card-item">
          <div class="label">价格不稳</div>
          <div class="desc">无明确标价，容易产生误会</div>
        </div>
      </div>

      <!-- VS图 -->
      <div class="vs-icon">
        <img src="https://img.to8to.com/brand_promotion/whole_house/vs_tip.png" alt="VS">
      </div>

      <!-- 我们的零食店 -->
      <div class="card our-store">
        <div class="card-header">我们的零食店</div>
        <div class="card-item">
          <div class="label">丰富多样</div>
          <div class="desc">上百种零食，进口/地方特产应有尽有</div>
        </div>
        <div class="card-item">
          <div class="label">颜值包装</div>
          <div class="desc">新潮设计，适合打卡拍照</div>
        </div>
        <div class="card-item">
          <div class="label">专属服务</div>
          <div class="desc">热情推荐，送礼配单贴心搭配</div>
        </div>
        <div class="card-item">
          <div class="label">清新布置</div>
          <div class="desc">主题陈列、干净明亮，像走进糖果屋</div>
        </div>
        <div class="card-item">
          <div class="label">价格透明</div>
          <div class="desc">明码标价，定期促销超划算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.snack-compare {
  width: 100%;
  padding: 40px 20px;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  background: #fff0f5;
}

.title {
  text-align: center;
  font-size: 36px;
  color: #ff6f91;
  margin-bottom: 40px;
}

.compare-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

.card {
  width: 360px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  background-color: #ffcedd;
  text-align: center;
  font-size: 22px;
  color: #a10035;
  font-weight: bold;
  padding: 18px 0;
}

.traditional .card-header {
  background-color: #ffd6d6;
  color: #7a0000;
}

.our-store .card-header {
  background-color: #ff9aa2;
  color: #fff;
}

.card-item {
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px dashed #f8c0c0;
}

.card-item:last-child {
  border-bottom: none;
}

.label {
  width: 100px;
  font-size: 18px;
  color: #ff4b5c;
}

.desc {
  flex: 1;
  color: #555;
  font-size: 15px;
  line-height: 1.4;
}

.our-store .label {
  color: #c63d7c;
}

.vs-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vs-icon img {
  width: 60px;
}
</style>
