<template>
  <!-- template 里面必须有且仅有一个div -->
  <div id="app">
    <navbar />
    <Lunbo/>
  </div>
</template>

<script>
import Navbar from './views/layout/Navbar.vue';
import Lunbo from './views/layout/Lunbo.vue';

export default {
  components: { Navbar , Lunbo},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
