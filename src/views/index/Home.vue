<template>
    <div>
        <Lunbo/>
        <BannerSide/>
        <Serve/>
        <ThreeDime/>
        <Contrast/>
    </div>

</template>
  
<script>
// @ is an alias to /src
    import Lunbo from '../layout/Lunbo.vue';
    import BannerSide from '../layout/BannerSide.vue';
    import Serve from '../layout/Serve.vue';
    import ThreeDime from '../layout/ThreeDime.vue';
    import Contrast from '../layout/Contrast.vue';

    export default {
        name: 'Home',
        components: {
            Lunbo,
            BannerSide,
            Serve,
            ThreeDime,
            Contrast,
        },
    };
</script>
  