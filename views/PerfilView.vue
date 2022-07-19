<template>
    <main class="container pb-5 border-bottom">
        <div class="container">
            
            <FormProfiles></FormProfiles>

            <div class="row">               
                <div class="container mt-5 mb-4">
                    <h5 class="navbar text-dark">Tus Categorías</h5>  
                </div>
            </div>

            <ProfileCategories></ProfileCategories>

        </div>
    </main>
</template>

<script>
import FormProfiles from '../components/Form-Profiles.vue';
import ProfileCategories from '../components/Profile-Categories.vue';
import ProfileCategoriesPlus from '../components/Profile-CategoriesPlus.vue';

    export default {
    components: { FormProfiles, ProfileCategories, ProfileCategoriesPlus }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>