<template>
    <h3>你好 <span v-if="userInfo">{{userInfo}}</span> </h3>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('userModule',{userInfo: (state) => state.userInfo})
  }
};
</script>
<style scoped>
</style>
