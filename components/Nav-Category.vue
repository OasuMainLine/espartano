<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <button class="nav-link text-dark nav-f" aria-current="page" v-on:click="clickNewsCategory(name)">{{name}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        props:{
            name:{
                type: String,
                default: 'default text'
            },
        },

        methods:{
            clickNewsCategory(name){
            this.$emit('clicknewscategory', name);
        }
    }, 
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>