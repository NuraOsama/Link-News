<template>
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card main-card h-100">
          <div class="image" @click="scrollToTop">
            <router-link :to="'/newsdetails/'+ id">
             <img  v-if="urlToImage" :src="urlToImage" onerror="this.src='https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png'" class="img-responsive lazyload" :data-src="urlToImage" alt="News"/>
             <img v-else src="https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png" class="img-responsive lazyload" data-src="https://www.fdicreative.com/images/easyblog_articles/2/placeholder-image.png" alt="News"/>
            </router-link>
          </div>
          <div class="card-body">
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
              <div class="card-title">
              <h4 class="text-start" @click="scrollToTop">
                 <router-link :to="'/newsdetails/'+ id">
                 {{ title }}
                 </router-link>
              </h4>
              </div>
              <div class="badget text-start" v-for="(newscategory,index) in filtercategories" :key="index">
              <span class="badge bg-secondary" v-if="newscategory.id == sourceID">{{newscategory.name}}</span>
              </div>
              <div class="card-text mb-5">
              <p  v-if="description" class="text-start">
                {{ description }}
              </p>
              <p v-else class="text-start">
                 {{ content }}
              </p>
              </div>
              <div class="date d-flex align-items-center">

                 <span class="icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 18.763 20.848">
                   <path id="ic_date_range_24px" d="M9.254,11.381H7.17v2.085H9.254Zm4.17,0H11.339v2.085h2.085Zm4.17,0H15.509v2.085h2.085Zm2.085-7.3H18.636V2H16.551V4.085H8.212V2H6.127V4.085H5.085A2.075,2.075,0,0,0,3.01,6.17L3,20.763a2.084,2.084,0,0,0,2.085,2.085H19.678a2.091,2.091,0,0,0,2.085-2.085V6.17A2.091,2.091,0,0,0,19.678,4.085Zm0,16.678H5.085V9.3H19.678Z" transform="translate(-3 -2)"/>
                   </svg>
                 </span>

                 <span class="text">{{publishedAt}}</span>
                 
              </div>
          </div>
        </div>
    </div>
</template>

<script>

export default({

    name:"MainNews",
    props:["id","showOnHomepage","urlToImage","title","description","publishedAt","content","sourceID","filtercategories"],

      data() {
        return {

            favoriteshow:false,
            shareshow:true,

        };
      },
      
      methods:{
          

          scrollToTop() {

           document.body.scrollTop=0;
           document.documentElement.scrollTop = 0;

           },
      },


})
</script>
