<template>
  <section class="snack-stats">
    <div class="stats-container">
      <h2 class="headline">我们用零食点亮了全国的味蕾</h2>
      <div class="subtext">品质美味 · 全国热卖 · 用户信赖</div>

      <div class="stats-grid">
        <div class="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" class="icon" />
          <div class="label">累计销量</div>
          <div class="number count-1">0</div>
        </div>
        <div class="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2975/2975175.png" class="icon" />
          <div class="label">服务门店</div>
          <div class="number count-2">0</div>
        </div>
        <div class="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1608/1608876.png" class="icon" />
          <div class="label">覆盖城市</div>
          <div class="number count-3">0</div>
        </div>
        <div class="stat-box">
          <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" class="icon" />
          <div class="label">回头客</div>
          <div class="number count-4">0</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    animateValue(start, end, duration, selector) {
      const obj = document.querySelector(selector);
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.innerText = current.toLocaleString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  },
  mounted() {
    this.animateValue(0, 8000000, 3000, '.count-1');
    this.animateValue(0, 4200, 3000, '.count-2');
    this.animateValue(0, 185, 3000, '.count-3');
    this.animateValue(0, 289000, 3000, '.count-4');
  }
}
</script>

<style scoped>
.snack-stats {
  background: linear-gradient(135deg, #fff4e6, #ffe8cc);
  padding: 60px 20px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  color: #5d3a00;
}

.stats-container {
  max-width: 1100px;
  margin: 0 auto;
}

.headline {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #d35400;
}

.subtext {
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: #6e4b1f;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  justify-items: center;
}

.stat-box {
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  width: 100%;
}

.stat-box:hover {
  transform: translateY(-6px);
}

.icon {
  width: 50px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.stat-box:hover .icon {
  transform: scale(1.1);
}

.label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #b3531c;
}

.number {
  font-size: 2rem;
  font-weight: bold;
  color: #ff6600;
}
</style>
