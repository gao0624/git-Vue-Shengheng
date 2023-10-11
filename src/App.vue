<template>
  <!-- template 里面必须有且仅有一个div -->
  <div id="app">
    <Lunbo/>
  </div>
</template>

<script>
import Lunbo from './views/layout/Lunbo.vue';

export default {
  components: {Lunbo},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
