<template>
    <div id="map-container" style="width: 1000px; height: 400px;margin: 0 auto;" ></div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 初始化地图
      var map = new AMap.Map('map-container', {
        center: [115.066477, 35.777831], // 初始化地图中心点
        zoom: 15, // 初始化缩放级别
      });
  
      // 添加标记
      const marker = new AMap.Marker({
        position: [115.066477, 35.777831], // 标记位置
      });
      marker.setMap(map);
    },
  };
  </script>

<style>
</style>
  