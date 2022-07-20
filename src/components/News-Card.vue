<template>
    <div class="col-lg-4">
        <div class="card h-100 w-100 shadow">
        <img class="card-img-top" :src="picture" :alt="title">
            <div class="card-body">
                <h5 class="card-t-f card-title">{{title}}</h5>
                <p class="card-d-f card-text">{{subtitle}}</p>
            </div>                  
            <div class="ps-3">
                <button href="#" class="btn-card-f" v-on:click="clickNewsDetails(id); clickRelatedNews(id, categories_id)" data-bs-target="#descriptionModal" data-bs-toggle="modal">Mas información</button>
                <i class="position-absolute end-0 pe-4 pt-2 far fa-heart"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type: String,
                default: 'default text'
            },
            subtitle:{
                type: String,
                default: 'default text'
            },
            image:{
                type: String,
                default: '../imgs/default-image.webp'
            },
            index:{
                type: Number
            },
            id:{
                type: Number
            },
            category:{
                type: Number
            }

        },

        data(){
            return{
                picture: ""
            }
        },

        methods:{
            clickNewsDetails(index){
                this.$emit('clicknewsdetail', index, this.picture);
            },
            clickRelatedNews(id, categories_id){
                console.log('prueba ->' + id);
                console.log('prueba 2 ->' + categories_id);
                this.$emit('clickrelatednews', id, categories_id, this.image)
            }
        },

        mounted(){
            this.picture = "http://noticiasLaravel.test/storage/imgs/"+this.image;
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>