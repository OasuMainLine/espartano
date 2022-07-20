<template>
    <main class="container pb-5 border-bottom">
        <div class="container">
            <FormContact></FormContact>
        </div>
    </main>
</template>

<script>
import FormContact from '../components/Form-Contact.vue';

    export default {
    components: { FormContact }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>