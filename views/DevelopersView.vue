<template>
    <main class="container pb-5 border-bottom">
        <div class="container">
            
        <Developers></Developers>

        </div>
    </main>
</template>

<script>
import Developers from '../components/Info-Developers.vue';

    export default {
    components: { Developers }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>