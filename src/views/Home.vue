<template>
   
    <div class="home">
        <!--hero-->
        <section class="hero-sec">
        <div id="carouselExampleDark" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      
        <div class="carousel-inner" >
        <div class="carousel-item" v-for="item in items" :key="item.id" :class="item.active ? 'active' : '' ">
            <div class="image">
            <img :src="item.image" class="img-responsive lazyload" :data-src="item.image" alt="Slider Image">
            </div>
            <div class="carousel-caption">
                  <div class="container">
                <div class="text">
                   <h5>{{item.maintext}}</h5>
                </div> 
                <div class="paragh">
                    <p>{{item.subtext}}</p>
                </div>
                <div class="button">
                    <a href="#" type="button" class="btn light-blue-btn" target="_blank">
                    {{item.button}}
                    </a>
                </div>  
                  </div>           
            </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true">
              <i class="fa fa-angle-left"></i>
           </span>
           <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true">
                <i class="fa fa-angle-right"></i>
           </span>
           <span class="visually-hidden">Next</span>
        </button>
        </div>
        </section>
        <!--//hero-->

        <!--news-->
        <section class="news-sec sec bg-white">
            <div class="container">
                <div class="head-content my-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="head">
                            <h3>Latest News</h3>
                        </div>
                        <div class="link"  @click="scrollToTop">
                            <router-link to="/newslisting" class="d-flex">
                              View All
                            </router-link>
                        </div>
                    </div>                    
                </div>
                <div class="row">
                <MainNews   v-for="(newdata,index) in newsdata" :key="index" :id="newdata.id" :showOnHomepage="newdata.showOnHomepage" v-show="newdata.showOnHomepage" :urlToImage="newdata.urlToImage"  :title="newdata.title"
                :description="newdata.description" :publishedAt="newdata.publishedAt" :content="newdata.content" :sourceID="newdata.sourceID" :filtercategories="filtercategories"/>
                </div>
            </div>
        </section>
        <!--//news-->

        <!--help-->
        <section class="help-sec">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-10 col-md-12">
                       <div class="head mb-3">
                      <h3 class="text-white">How we have helped</h3>
                       </div>
                       <div class="sub-head">
                      <p class="text-white">
                          See how Al Foundation have promoted change locally and to the world
                      </p>
                       </div>
                       <div class="row justify-content-center g-2">
                        <div class="col-lg-3 col-md-4 col-sm-12" v-for="detail in details" :key="detail.id">
                          <div class="content d-flex flex-column align-items-center justify-content-center">
                              <div class="icon">
                                  <img :src="detail.detailimg" class="img-responsive lazyload" :data-src="detail.detailimg" alt="">
                              </div>
                              <div class="text">
                              <h4 class="text-white">{{ detail.detailName }}</h4>
                             </div>
                             <div class="know-more">
                                 <a href="#" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="58" viewBox="0 0 33 58">
                                    <text id="_" data-name="+" fill="#fff" font-size="40" font-family="SegoeUI, Segoe UI">
                                    <tspan x="0" y="40">+</tspan>
                                    </text>
                                    </svg>
                                 </a>
                             </div>
                          </div>
                        </div>
                       </div>
                      </div>
                  </div>
              </div>
        </section>
        <!--//help-->
        
    </div>
</template>

<script>

import MainNews from '@/components/MainNews.vue';
import NewsData from '../json/news_listing.json';

// Items Images
import ImageSrc1 from "../assets/images/slide-1.png";
import ImageSrc2 from "../assets/images/slide-2.png";
import ImageSrc3 from "../assets/images/slide-3.png";


// Details Images

import DetailImageSrc1 from "../assets/images/find-place.png";
import DetailImageSrc2 from "../assets/images/a'awen.png";
import DetailImageSrc3 from "../assets/images/omniyat.png";
import DetailImageSrc4 from "../assets/images/give-time.png";
import DetailImageSrc5 from "../assets/images/tofoula.png";
import DetailImageSrc6 from "../assets/images/fundraising.png";
import DetailImageSrc7 from "../assets/images/zakat.png";
import NewsCategories from '../json/news_category-listing.json';


export default ({
    name: "Home",
      components: {
       MainNews,
    },
     data() {
        return {

             newsdata:NewsData.articles,
             category:"",
             newscategories:NewsCategories.sourceCategory,

             items:[
                 {
                     id:1,
                     image:ImageSrc1,
                     maintext:"Al Foundation",
                     subtext:"is focused on inspiring the next generation of  kids Healthcare professionals.",
                     button:"Donate Now",
                     active:"active",
                 },
                 {
                     id:2,
                     image:ImageSrc2,
                     maintext:"Al Mission",
                     subtext:"is focused on inspiring the next generation of  kids Healthcare professionals.",
                     button:"Donate Now"
                 },
                  {
                     id:3,
                     image:ImageSrc3,
                     maintext:"Al Vision",
                     subtext:"is focused on inspiring the next generation of  kids Healthcare professionals.",
                     button:"Donate Now"
                 },

             ],


              details:[
                 {
                     id:1,
                     detailimg:DetailImageSrc1,
                     detailName:"Find Place"
                   
                 },
                 {
                     id:2,
                     detailimg:DetailImageSrc2,
                     detailName:"A'awen"
                   
                 },
                 {
                     id:3,
                     detailimg:DetailImageSrc3,
                     detailName:"Omniyat"
                   
                 },
                  {
                     id:4,
                     detailimg:DetailImageSrc4,
                     detailName:"Give Time"
                   
                 },
                 {
                     id:5,
                     detailimg:DetailImageSrc5,
                     detailName:"Tofoula"
                   
                 },
                 {
                     id:6,
                     detailimg:DetailImageSrc6,
                     detailName:"Fundraising"
                   
                 },
                 {
                     id:7,
                     detailimg:DetailImageSrc7,
                     detailName:"Zakat"
                   
                 },

             ]
             
        };
      },
      computed:{

        filtercategories(){

            return this.filternewscategoriesBycategory(this.newscategories)
        }
      },
      methods:{
          
        filternewscategoriesBycategory: function (newscategories) {
        
           return this.category ? newscategories.filter((newscategory) => !newscategory.name.indexOf(this.category)): newscategories;
        
        },
        scrollToTop() {

           document.body.scrollTop=0;
           document.documentElement.scrollTop = 0;

           },

    }

});
</script>
