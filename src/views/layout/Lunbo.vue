<template>
  <div
    class="carousel"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <div
      class="slide-wrapper"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
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
        require('@/assets/images/lunbo1.jpg'),
        require('@/assets/images/lunbo2.jpg'),
        require('@/assets/images/lunbo3.jpg'),
        require('@/assets/images/lunbo4.jpg'),
      ],
      currentIndex: 0,
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // 3秒自动轮播
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 400px;           /* 固定轮播高度，可按需调整 */
  overflow: hidden;
  position: relative;
}

.slide-wrapper {
  display: flex;
  transition: transform 0.8s ease-in-out; /* 丝滑过渡 */
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;       /* 保持比例，填满容器 */
  display: block;
}
</style>
