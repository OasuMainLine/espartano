<template>
    <main class="container">
      <Carousel/>

      <!-- Nav 2 -->
        <div class="row">
            <div class="col">
                <nav class="navbar">
                    <div class=" container-fluid pt-5">
                        <h1 class="text-dark nab-f-2">Categorias</h1>
                        <NavCategory v-for="(item) in categories" :name="item.name" @clicknewscategory="showNewsInCategory" :key="item.id"></NavCategory>
                    </div>
                </nav>
            </div>
        </div>
      <!-- Nav 2 -->
  
      <!-- Cards -->
      <div class="pt-5 pb-5 row row-cols-1 row-cols-md-3 g-4">
        <NewsCard v-for="(item) in news" :title="item.title" :subtitle="item.subtitle" :image="item.image" :index="index" :key="item.id" />
      </div>
      <!-- Cards -->

      <DetailsModal :title="news[selectedItem].title" :category="news[selectedItem].category[0].name" :image="news[selectedItem].image" :date="news[selectedItem].date" :description="news[selectedItem].description"></DetailsModal>

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
                    {id:1, name:'all', style:'btn-primary'}
                ],
                news:[
                    { id: 101, title: '', subtitle:'', description:'', image: '../assets/imgs/acastro_210217_1777_passwords_0002.0.webp', available: true, date: '', category: [{
                        name: "Sports",
                        id: "1",
                        newsId: "1"
                        }], likes: 80, border:'border-warning' }
                ],
                all_news: []
            }
        },
        mounted: function(){
            
            fetch('https://628a58835da6ddfd5d6273d7.mockapi.io/news/v1/news')
            .then(response => response.json())
            .then(data=>{

                this.news = data;
                this.all_news = data;

                for(let i=0; i<this.news.length; i++){
                    if(!this.categories.find(element => element.name === this.news[i].category[0].name)){
                        this.categories.push({
                            id:i+1,
                            name:this.news[i].category[0].name,
                            style:'btn-primary'
                        });
                    }
                }

               
            });
        },
        methods: {
            showNewsInCategory(category){
                this.selectedItem = 0;
                if(category == "all"){
                    this.news = this.all_news;
                }else{
                    this.news = this.all_news;
                    let newsInCategory = this.news.filter(function(el){
                        return el.category[0].name === category;
                    });
                    this.news = newsInCategory;
                }
            },
            showNewsDetails(index, img){
                this.selectedItem = index;
                this.news[this.selectedItem].image = img;
            },
        },
    }
</script>

<style lang="scss" scoped>
      @import "../assets/style/style.scss";
</style>