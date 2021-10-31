<template>
<div class="news sec">

     <!--breadcrumb-->
     <div class="breadcrumb-list">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                 <Breadcrumb :breadcrumbitems="breadcrumbs"/>
                </div>
            </div>
        </div>
     </div>
     <!--//breadcrumb-->

     <!--news details-->
     <section class="news-details">
         <div class="container">
            <div class="head mb-4">
               <h3 class="text-start">News Details</h3>
             </div>
             <div class="row">
                  <div class="col-lg-12" v-for="(newdata,index) in newsdata" :key="index" v-show="newdata.id == routeid">
            <div class="card sub-card">
            <div class="image">
             <img  v-if="newdata.urlToImage" :src="newdata.urlToImage" onerror="this.src='https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png'" class="img-responsive lazyload" :data-src="newdata.urlToImage" alt="News Details"/>
             <img v-else src="https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png" class="img-responsive lazyload" data-src="https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png" alt="News Detailss"/>            
             </div>
            <div class="card-body">
                <div class="badget text-start"  v-for="(newscategory,index) in newscategories" :key="index">
                   <span v-if="newscategory.id == newdata.sourceID">{{newscategory.name}}</span>
                </div>
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="card-title">
                       <div class="title">
                          <h4 class="text-start">{{ newdata.title }}</h4>
                       </div>
                       <div class="date d-flex align-items-center">
                         <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 18.763 20.848">
                            <path id="ic_date_range_24px" d="M9.254,11.381H7.17v2.085H9.254Zm4.17,0H11.339v2.085h2.085Zm4.17,0H15.509v2.085h2.085Zm2.085-7.3H18.636V2H16.551V4.085H8.212V2H6.127V4.085H5.085A2.075,2.075,0,0,0,3.01,6.17L3,20.763a2.084,2.084,0,0,0,2.085,2.085H19.678a2.091,2.091,0,0,0,2.085-2.085V6.17A2.091,2.091,0,0,0,19.678,4.085Zm0,16.678H5.085V9.3H19.678Z" transform="translate(-3 -2)"/>
                            </svg>
                         </span>
                         <span class="text">
                           {{ newdata.publishedAt }}
                        </span>
                       </div>
                    </div>
                    <div class="icons d-flex justify-content-end">
              <div class="favorite" @click="favoriteshow = !favoriteshow" :class="[ favoriteshow ? 'toggle-icon':'']">
                  <a>
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="overlay">
                    <i class="fas fa-heart"></i>
                  </a>
              </div>
              <div class="share" @click="shareshow = !shareshow" :class="[!shareshow ? 'toggle-icon':'']">
                 <a>
                   <i class="fas fa-share-alt"></i>
                 </a>
                 <div class="overlay social-media">
                    <ul class="d-flex">
                         <li>
                             <a href="#" target="_blank">
                                 <i class="fa fa-facebook-f"></i>
                             </a>
                         </li>
                         <li>
                             <a href="#" target="_blank">
                                 <i class="fab fa-twitter"></i>
                             </a>
                         </li>
                         <li>
                             <a href="#" target="_blank">
                                 <i class="fas fa-envelope"></i>
                             </a>
                         </li>
                     </ul>
                 </div>
              </div>
                    </div>
                </div>
                <div class="card-text">
                 <p class="text-start" v-if="newdata.description">
                    {{ newdata.description }}
                 </p>
                 <p class="text-start" v-if="newdata.content">
                    {{ newdata.content }}
                 </p>
                </div>

            </div>
        </div>
   </div>
             </div>
         </div>
     </section>
     <!--//news details-->

</div>
    
</template>

<script>

import Breadcrumb from '../components/Breadcrumb.vue';
import NewsData from '../json/news_listing.json';
import NewsCategories from '../json/news_category-listing.json';


export default ({

    name: "NewsDetails",
     components: {

         Breadcrumb,

    },
    
      data() {
        return {

            newsdata:NewsData.articles,
            newscategories:NewsCategories.sourceCategory,
            routeid: this.$route.params.id, 
            favoriteshow:false,
            shareshow:true,       


        };
      },
      computed:{

          breadcrumbs(){

              return[

                  {

                      label:"Home",
                      url:"/"
                  },
                  {

                      label:"News",
                      url:"/newslisting"
                  },
                  {

                      label:"News Details",
                  }


              ]

          }


      }
   
});
</script>
