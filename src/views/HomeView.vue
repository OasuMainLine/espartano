<template>
    <main class="container">
      <Carousel/>

      <!-- Nav 2 -->
        <div class="row">
            <div class="col">
                <nav class="navbar">
                    <div class=" container-fluid pt-5">
                        <h1 class="text-dark nab-f-2">Categorias</h1>
                        <NavCategory v-for="(item) in categories" :name="item.categories" @clicknewscategory="showNewsInCategory" :key="item.id"></NavCategory>
                    </div>
                </nav>
            </div>
        </div>
      <!-- Nav 2 -->
  
      <!-- Cards -->
      <div class="pt-5 pb-5 row row-cols-1 row-cols-md-3 g-4">
        <NewsCard v-for="(item) in news" :title="item.title" :subtitle="item.subtitle" :image="item.image" :index="index" :id="item.id" @clicknewsdetail="showNewsDetails" :key="item.id" />
      </div>
      <!-- Cards -->

      <DetailsModal :related_news="related_news" :title="selected_news[0].title" :category="selected_news[0].category" :image="'http://noticiasLaravel.test/storage/imgs/'+selected_news[0].image" :date="selected_news[0].created_at" :description="selected_news[0].description" ></DetailsModal>

      <login-modal/>
      <CheckInModal/>

  </main>
</template>

<script>
    import Carousel from '../components/Carousel.vue';
    import NewsCard from '../components/News-Card.vue';
    import NavCategory from '../components/Nav-Category.vue';
    import DetailsModal from '../components/Details-Modal.vue';
    import LoginModal from '../components/Login-Modal.vue';
    import CheckInModal from '../components/CheckIn-Modal.vue';

    export default {
        components: {Carousel, NewsCard, NavCategory, DetailsModal, LoginModal, CheckInModal},

        data(){
            return{
                selectedItem:0,
                categories:[
                    {id:1, categories:''}
                ],
                news:[
                    { id: 101, categories: 1, title: '', subtitle:'', description:'', image: '../assets/imgs/acastro_210217_1777_passwords_0002.0.webp', date: ''} 
                ],
                all_news: [],
                related_news: [],
                selected_news: [{title:'', categories:'', description:'', image:'', date:''}],

            }
        },
        mounted: function(){

            fetch('http://noticiaslaravel.test/api/categories')
            .then(response => response.json())
            .then(data=>{

                this.categories = data;
            });

            fetch('http://noticiaslaravel.test/api/news')
            .then(response => response.json())
            .then(data=>{
                this.news = data;
                this.all_news = data;
            });
            
        },
        methods: {
            showNewsInCategory(name){
                this.selectedItem = 0;
                if(name == "all"){
                    this.news = this.all_news;
                }else{
                    this.news = this.all_news;
                    let newsInCategory = this.news.filter(function(el){
                        return el.name[0].name === name;
                    });
                    this.news = newsInCategory;
                }
            },
            showNewsDetails(index, img,){
                fetch('http://noticiaslaravel.test/api/news/detail/'+index)
                .then(response => response.json())
                .then(data=>{
                    this.selected_news = data;
                });
            },

            showRelatedNews(index, categories_id){
                fetch('http://noticiaslaravel.test/api/news/related/' + index + '/' + categories_id)
                .then(response => response.json())
                .then(data=> {
                    this.related_news = data;
                    console.log('puta prueba'+ this.related_news[0].categories_id);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
      @import "../assets/style/style.scss";
</style>