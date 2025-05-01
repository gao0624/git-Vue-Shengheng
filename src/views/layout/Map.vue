<template>
  <div class="styled-map-wrapper">
    <!-- 操作按钮浮层 -->
    <div class="map-overlay">
      <button class="overlay-btn" @click="toggleSatellite">切换卫星视图</button>
      <button class="overlay-btn" @click="resetView">重置视图</button>
    </div>
    <div id="map-container" class="styled-map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      satelliteLayer: null
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 初始化地图，启用 3D 视角和倾斜效果
      this.map = new AMap.Map('map-container', {
        center: [112.568246, 32.972018],
        zoom: 15,
        viewMode: '3D',
        pitch: 45
      });
      // 自定义标记图标并设置合适大小
      const icon = new AMap.Icon({
        image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        size: new AMap.Size(32, 32),         // 图标实际像素大小
        imageSize: new AMap.Size(32, 32)     // 图片在地图上显示大小
      });
      const marker = new AMap.Marker({
        position: [112.568246, 32.972018],
        icon: icon,
        offset: new AMap.Pixel(-16, -32)
      });
      marker.setMap(this.map);
    },
    toggleSatellite() {
      if (!this.satelliteLayer) {
        this.satelliteLayer = new AMap.TileLayer.Satellite();
        this.map.addLayer(this.satelliteLayer);
      } else {
        this.map.removeLayer(this.satelliteLayer);
        this.satelliteLayer = null;
      }
    },
    resetView() {
      this.map.setZoomAndCenter(15, [112.568246, 32.972018]);
      this.map.setPitch(45);
    }
  }
}
</script>

<style scoped>
.styled-map-wrapper {
  max-width: 1000px;
  margin: 20px auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  border: 2px solid #4caf50;
}

.styled-map {
  width: 100%;
  height: 400px;
  filter: drop-shadow(0 0 8px rgba(0,0,0,0.3));
}

.map-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.overlay-btn {
  background: rgba(255,255,255,0.85);
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.overlay-btn:hover {
  background: #4caf50;
  color: #fff;
  transform: scale(1.05);
}
</style>
