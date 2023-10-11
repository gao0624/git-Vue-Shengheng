<template>
  <!-- template 里面必须有且仅有一个div -->
  <div id="app">
    <Lunbo/>
    <BannerSide/>
    <Serve/>
    <ThreeDime/>
  </div>
</template>

<script>
import Lunbo from './views/layout/Lunbo.vue';
import BannerSide from './views/layout/BannerSide.vue';
import Serve from './views/layout/Serve.vue';
import ThreeDime from './views/layout/ThreeDime.vue';

export default {
  components: {
    Lunbo,
    BannerSide,
    Serve,
    ThreeDime
},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
