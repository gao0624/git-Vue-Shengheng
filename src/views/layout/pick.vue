<template>
  <div class="pick-wrapper">
    <div class="pick-card">
      <img src="../../assets/pick.jpg" alt="Snack Display" />
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑
</script>

<style scoped>
.pick-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 100vh;
}

.pick-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.pick-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.2), rgba(0,0,0,0.2));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pick-card:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}

.pick-card:hover::before {
  opacity: 1;
}

.pick-card img {
  display: block;
  width: 100%;            /* 100% 填充卡片宽度 */
  height: 100%;           /* 100% 填充卡片高度 */
  object-fit: cover;      /* 保持比例裁剪，填满容器 */
  transition: transform 0.6s ease;
}

.pick-card:hover img {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .pick-wrapper {
    padding: 10px;
    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  }
  .pick-card {
    width: 90%;
    height: 180px;
    border-radius: 12px;
  }
}
</style>