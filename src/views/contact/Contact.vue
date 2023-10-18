<template>
    <div>
        <Pick/>
        <ContactUs/>
        <Map/>
    </div>
</template>

<script>
import ContactUs from '../layout/ContactUs.vue';
import Map from '../layout/Map.vue';
import Pick from '../layout/pick.vue';

    export default{
        name: 'Contact',
        components: {
            Map,
            ContactUs,
            Pick
        }
    }

</script>

<style>

</style>