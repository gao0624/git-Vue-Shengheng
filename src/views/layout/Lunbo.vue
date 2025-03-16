<template>
  <div class="carousel">
    <div class="slide-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(item, index) in items" :key="index">
        <img :src="item" alt="Slide Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        require('@/assets/images/601732850083908.png'),
        require('@/assets/images/701731666313123.png'),
        require('@/assets/images/661717665253807.jpg'),
        require('@/assets/images/621717577288738.jpg'),
      ],
      currentIndex: 0,
      autoSlideInterval: null,
    };
  },
  created() {
    this.startAutoSlide();
  },
  destroyed() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 2000); // 2秒自动轮播
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style>
.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slide-wrapper {
  display: flex;
  transition: transform 0.5s;
}

.slide {
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: auto;
}

.active {
  transform: translateX(-100%);
}
</style>
