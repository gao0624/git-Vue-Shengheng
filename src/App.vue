<template>
  <!-- template 里面必须有且仅有一个div -->
  <div id="app">
    <Navbar2/>
      <router-view />
    <Bottom/>
  </div>
</template>

<script>
import Bottom from './views/layout/Bottom.vue';
import Navbar2 from './views/layout/Navbar2.vue';


export default {
  components: {
    Navbar2,
    Bottom
},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
