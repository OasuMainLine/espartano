<template>
   <div id="descriptionModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title nab-f-2">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row ">
                        <div class="col-lg-6">
                        <img class="img-fluid" v-bind:src="image" :alt="title">
                        </div>
                        <div class="col">
                            <p class="text-uppercase">{{category}}</p>
                            <p class="lead">{{date}}</p>
                            <p>{{description}}</p>                        
                        </div>
                    </div>

                    <!-- cards-relacionadas -->
                    <h6 class="nab-f-2 pt-5">Noticias relacionadas</h6>
                    <div class="col-lg-4" >
                        <div v-for="(item,index) in related_news.slice(0,4)" :key="index" class="card h-100 w-100 shadow">
                        <img class="card-img-top" :src="'http://noticiasLaravel.test/storage/imgs/'+image" :alt="title">
                            <div class="card-body">
                                <h5 class="card-t-f card-title">{{title}}</h5>
                                <p class="card-d-f card-text">{{subtitle}}</p>
                            </div>                  
                            <div class="ps-3">
                                <button href="#" class="btn-card-f" v-on:click="clickNewsDetails(id)" data-bs-target="#descriptionModal" data-bs-toggle="modal">Mas información</button>
                                <i class="position-absolute end-0 pe-4 pt-2 far fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
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
            category:{
                type: String,
                default: 'default text'
            },
            image:{
                type: String,
                default: '../imgs/default-image.webp'
            },
            date:{
                type: String,
                default: 'default text'
            },
            description:{
                type: String,
                default: 'default text'
            },
            related_news:{
                type: Array,
            }
       
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>