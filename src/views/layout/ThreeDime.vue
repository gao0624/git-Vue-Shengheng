<template>
  <div
    class="snack-gallery"
    @mouseenter="pauseAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div class="carousel-container" ref="container">
      <div class="carousel" ref="carousel">
        <!-- 原始列表 -->
        <div
          class="snack-item"
          v-for="(img, idx) in imageUrls"
          :key="`orig-${idx}`"
          @click="openFullscreen(idx)"
        >
          <div class="img-wrapper" :style="{ backgroundImage: `url(${img})` }"></div>
        </div>
        <!-- 克隆列表 -->
        <div
          class="snack-item"
          v-for="(img, idx) in imageUrls"
          :key="`clone-${idx}`"
          @click="openFullscreen(idx)"
        >
          <div class="img-wrapper" :style="{ backgroundImage: `url(${img})` }"></div>
        </div>
      </div>
    </div>

    <!-- 全屏预览 -->
    <div v-if="isFullscreenVisible" class="fullscreen-modal" @click="closeFullscreen">
      <div class="fullscreen-content" :style="{ backgroundImage: `url(${fullscreenImageUrl})` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullscreenVisible: false,
      fullscreenImageUrl: '',
      scrollFrame: null,
      speed: 1,  // 滚动速度
      imageUrls: [
        require('@/assets/images/food1.jpg'),
        require('@/assets/images/food2.jpg'),
        require('@/assets/images/food3.jpg'),
        require('@/assets/images/food4.jpg'),
        require('@/assets/images/food5.jpg'),
        require('@/assets/images/food6.jpg'),
        require('@/assets/images/food7.jpg'),
      ]
    }
  },
  mounted() {
    this.$nextTick(this.startAutoScroll)
  },
  beforeUnmount() {
    this.pauseAutoScroll()
  },
  methods: {
    openFullscreen(i) {
      this.fullscreenImageUrl = this.imageUrls[i]
      this.isFullscreenVisible = true
    },
    closeFullscreen() {
      this.isFullscreenVisible = false
    },
    startAutoScroll() {
      const container = this.$refs.container
      const carousel = this.$refs.carousel
      if (!container || !carousel) return

      const step = () => {
        // 当滚动超过原始宽度（carousel 宽度的一半）时回到开头
        const resetPoint = carousel.scrollWidth / 2
        if (container.scrollLeft >= resetPoint) {
          container.scrollLeft -= resetPoint
        } else {
          container.scrollLeft += this.speed
        }
        this.scrollFrame = requestAnimationFrame(step)
      }
      this.pauseAutoScroll()  // 清除旧的
      this.scrollFrame = requestAnimationFrame(step)
    },
    pauseAutoScroll() {
      cancelAnimationFrame(this.scrollFrame)
      this.scrollFrame = null
    }
  }
}
</script>

<style scoped>
.snack-gallery {
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom right, #ffeaea, #fff6f6);
  padding-bottom: 60px;
}

.carousel-container {
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: 30px;
  padding: 20px 0;
}

.snack-item {
  flex: 0 0 auto;
  width: 280px;
  height: 380px;
  border-radius: 20px;
  border: 4px solid #ffb3b3;
  box-shadow: 0 10px 20px rgba(255,120,120,0.3);
  cursor: pointer;
  transition: transform 0.3s;
}
.snack-item:hover {
  transform: scale(1.05);
}

.img-wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

.fullscreen-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.fullscreen-content {
  width: 90%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
