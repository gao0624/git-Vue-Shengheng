<template>
  <div class="advantage-snack" style="margin-top:20px;margin-bottom:20px;">
    <div class="adv-item">
      <img src="https://img.icons8.com/color/96/cotton-candy.png" class="icon-img" />
      <span class="text">
        <div class="title">免费试吃</div>
        <label>多款新品零食等你来尝</label>
      </span>
    </div>
    <div class="adv-item">
      <img src="https://img.icons8.com/?size=100&id=114213&format=png&color=000000" class="icon-img" />
      <span class="text">
        <div class="title">极速配送</div>
        <label>全城1小时送达，热乎乎</label>
      </span>
    </div>
    <div class="adv-item">
      <img src="https://img.icons8.com/color/96/discount.png" class="icon-img" />
      <span class="text">
        <div class="title">限时优惠</div>
        <label>每日爆款低至5折</label>
      </span>
    </div>
    <div class="adv-item">
      <img src="https://img.icons8.com/color/96/taste.png" class="icon-img" />
      <span class="text">
        <div class="title">百味任选</div>
        <label>甜咸辣任你挑，零食自由</label>
      </span>
    </div>
  </div>
</template>

<style scoped>
.advantage-snack {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 30px;
  background: #fff8f0;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(255, 184, 120, 0.3);
  max-width: 800px;
  margin: 0 auto;
}
.adv-item {
  display: flex;
  align-items: center;
  background: #fff4e6;
  border-radius: 16px;
  padding: 16px;
  transition: all 0.3s ease;
}
.adv-item:hover {
  background: #ffe8cc;
  transform: translateY(-4px);
}
.icon-img {
  width: 60px;
  height: 60px;
  margin-right: 16px;
}
.text {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: #ff7a00;
}
label {
  font-size: 14px;
  color: #555;
}
</style>
