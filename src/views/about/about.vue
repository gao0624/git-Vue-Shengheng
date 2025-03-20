<template>
    <div>
        <News/>
        <NewGame/>
    </div>
</template>

<script>
import News from '../layout/news.vue'
import NewGame from '../layout/new_game.vue'

    export default{
        name: 'about',
        components: {
            News,
            NewGame
        }
    }

</script>

<style>

</style>