<template>
                             
        <div class="form-check" v-for="(category) in categories" :key="category.id">
            <input name="category-cb" class="form-check-input" type="checkbox" :value="category.id" id="flexCheckDefault">
            <label class="form-check-label nav-f" for="flexCheckDefault">{{category.categories}}</label>
        </div>                  
            
</template>

<script setup>
    import {ref} from 'vue';
    import {getCategories} from '../lib/db';
    let categories = ref([]);
    
    getCategories().then((data) => {
            categories.value = data;
    })


    function showCategories(){
        let checkboxes = document.querySelectorAll("[name=category-cb]:checked");
        let categories = [];
        checkboxes.forEach((cb) => {
            categories.push(cb.value);
        })
        console.log(categories)
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>