<template>
    <div>
        <ContactUs/>
        <Map/>
    </div>
</template>

<script>
    import ContactUs from '../layout/ContactUs.vue';
import Map from '../layout/Map.vue';

    export default{
        name: 'Contact',
        components: {
            Map,
            ContactUs
        }
    }

</script>

<style>

</style>