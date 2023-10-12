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
      "https://image1.zhuangku.com/upfile2018/BannerPic/20200821145935_0976.jpg",
      "https://image1.zhuangku.com/upfile2018/BannerPic/20191227141904_3360.jpg",
      "https://image1.zhuangku.com/upfile2018/BannerPic/20200821150021_4570.jpg",
      "https://image1.zhuangku.com/upfile2018/BannerPic/20191227141904_3360.jpg"
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
  margin-top: 56px;
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
