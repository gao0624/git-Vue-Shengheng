<template>
    <div style="margin-top:20px;">
      <div id="map-container" style="width: 1000px; height: 400px;margin: 0 auto;" ></div>
    </div>
</template>
  
  <script>
  export default {
    mounted() {
      // 初始化地图
      var map = new AMap.Map('map-container', {
        center: [112.568246,32.972018], // 初始化地图中心点
        zoom: 15, // 初始化缩放级别
      });
  
      // 添加标记
      const marker = new AMap.Marker({
        position: [112.568246,32.972018], // 标记位置
      });
      marker.setMap(map);
    },
  };
  </script>

<style>
 .class{
  position: absolute;
  
 }
</style>
  