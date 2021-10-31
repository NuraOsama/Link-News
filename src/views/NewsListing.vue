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

   <!--news listing-->
   <section class="news-listing-sec">
     <div class="container">
         <div class="head mb-4">
             <h3 class="text-start">News</h3>
         </div>
    
         <div class="filter mt-5 my-4">
             <div class="row align-items-end">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="mb-3 text-start">
                  <label class="form-label">Date</label>
                    <select class="form-select date-select" v-model="published" @change="updatePaginate">
                    <option selected  value="">Select</option>
                    <option v-for="(newdata,index) in newsdata" :key="index">
                        {{ newdata.publishedAt}}
                    </option>
                    </select>
                </div>
              </div>
              <!--<div class="col-lg-2 col-md-6 col-sm-12">
                <div class="mb-3 text-start">
                  <label class="form-label">To</label>
                    <select class="form-select date-select" v-model="publishedto" @change="updatePaginate">
                    <option selected  value="">Select</option>
                    <option v-for="(newdata,index) in newsdata" :key="index">
                        {{ newdata.publishedAt}}
                    </option>
                    </select>
                </div>
              </div>-->
               <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="mb-3 text-start">
                  <label class="form-label">Category</label>
                    <select class="form-select main-select " v-model="category" @change="updatePaginate">
                    <option selected value="">Select</option>
                      <option  v-for="(newscategory,index) in newscategories" :key="index">
                        {{ newscategory.name}}
                    </option>
                    </select>
                 </div>
               </div>
               <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="mb-3">
                  <div class="input-group">
                   <input type="text" class="form-control" placeholder="Search News" v-model="search" @keyup="updatePaginate">
                    <span class="input-group-text">
                    <svg id="ic_search_24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25" height="20">
                        <g id="search" transform="translate(0 0)">
                        <g id="Group_8025" data-name="Group 8025" transform="translate(0 0)">
                        <path id="Path_51533" data-name="Path 51533" d="M29.817,28.049,21.1,19.335A11.9,11.9,0,1,0,19.335,21.1l8.715,8.715a.625.625,0,0,0,.884,0l.884-.884A.625.625,0,0,0,29.817,28.049Zm-17.942-6.8a9.375,9.375,0,1,1,9.375-9.375A9.385,9.385,0,0,1,11.875,21.25Z" transform="translate(0 0)" fill="#fff"/>
                        </g>
                        </g>
                    </svg>
                    </span>
                   </div>
                </div>
               </div>
                <div class="col-lg-1 col-md-6 col-sm-12">
                <div class="sort">
                   <a class="d-flex">
                       <span class="text">Sort By</span>
                       <span class="icon" @click="filtersortingasc">
                           <svg xmlns="http://www.w3.org/2000/svg" width="17.324" height="23.099" viewBox="0 0 17.324 23.099">
                             <g id="sort" transform="translate(-14 -8)">
                             <path id="Path_51534" data-name="Path 51534" d="M22.38,11.651,19.012,8.282a.962.962,0,0,0-1.361,0l-3.369,3.369a.962.962,0,0,0,1.361,1.361l1.726-1.726v18.85a.962.962,0,1,0,1.925,0V11.286l1.726,1.726a.962.962,0,0,0,1.361-1.361Z" transform="translate(0 0)" fill="#13beff"/>
                             <path id="Path_51535" data-name="Path 51535" d="M40.38,26.087a.962.962,0,0,0-1.361,0l-1.726,1.726V8.962a.962.962,0,1,0-1.925,0v18.85l-1.726-1.726a.962.962,0,1,0-1.361,1.361l3.369,3.369a.962.962,0,0,0,1.361,0l3.369-3.369A.962.962,0,0,0,40.38,26.087Z" transform="translate(-9.338)" fill="#13beff"/>
                             </g>
                           </svg>
                       </span>

                       <!--<span class="icon" @click="filtersortingdesc">
                           <svg xmlns="http://www.w3.org/2000/svg" width="17.324" height="23.099" viewBox="0 0 17.324 23.099">
                             <g id="sort" transform="translate(-14 -8)">
                             <path id="Path_51534" data-name="Path 51534" d="M22.38,11.651,19.012,8.282a.962.962,0,0,0-1.361,0l-3.369,3.369a.962.962,0,0,0,1.361,1.361l1.726-1.726v18.85a.962.962,0,1,0,1.925,0V11.286l1.726,1.726a.962.962,0,0,0,1.361-1.361Z" transform="translate(0 0)" fill="#13beff"/>
                             <path id="Path_51535" data-name="Path 51535" d="M40.38,26.087a.962.962,0,0,0-1.361,0l-1.726,1.726V8.962a.962.962,0,1,0-1.925,0v18.85l-1.726-1.726a.962.962,0,1,0-1.361,1.361l3.369,3.369a.962.962,0,0,0,1.361,0l3.369-3.369A.962.962,0,0,0,40.38,26.087Z" transform="translate(-9.338)" fill="#13beff"/>
                             </g>
                           </svg>
                       </span>-->
                   </a>
                </div>
              </div>
             </div>
         </div>

         <div class="row">

          <MainNews  v-for="(newdata,index) in filternews"  v-show="setPaginate(index)" :key="index" :id="newdata.id"  :urlToImage="newdata.urlToImage"  :title="newdata.title"
            :description="newdata.description" :publishedAt="newdata.publishedAt" :content="newdata.content" :sourceID="newdata.sourceID" :filtercategories="filtercategories"/>

         </div>
        
        <div class="row">
            <div class="col-lg-12">
                <div class="alert alert-danger alert-dismissible fade show" v-if="filternews.length == 0">
                   <p>No Result Found</p>
                </div>

                <div class="pagination-list">
                   <nav aria-label="Page navigation"  v-if="filternews.length != 0">
                 <ul class="pagination justify-content-center">
                   <li class="page-item" :class="current == 1? 'disabled':'' "  >
                      <a class="page-link"  aria-label="Previous" @click.prevent="onClickPreviousPage">
                          <span aria-hidden="true">
                              <i class="fa fa-angle-left"></i>
                          </span>
                      </a>
                   </li>
                   <li  class="page-item" v-for="page_index in paginate_total" :key="page_index" :class="page_index==current? 'active': ''" >
                       <a class="page-link" @click.prevent="updateCurrent(page_index)">              
                           {{ page_index}}
                       </a>
                   </li>
                   <li class="page-item" :class="paginate_total<=current? 'disabled':'' ">
                       <a class="page-link"  aria-label="Next"  @click.prevent="onClickNextPage">
                           <span aria-hidden="true"> <i class="fa fa-angle-right"></i></span>
                       </a>
                   </li>
                 </ul>
                 </nav>
                </div>
     
            </div>
        </div>    
     </div>
   </section>
   <!--//news listing-->

</div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import MainNews from '@/components/MainNews.vue';
import NewsData from '../json/news_listing.json';
import NewsCategories from '../json/news_category-listing.json';


  export default ({
    name: "NewsListing",
      components: {
        Breadcrumb,
        MainNews,
    },

       data() {
        return {

        
               newsdata:NewsData.articles,
               newscategories:NewsCategories.sourceCategory,
               search:"",
               published:"",
               //publishedto:"",
               category:'',
               current: 1,
               paginate:12,
               paginate_total: 0,


        };
      },

       mounted() {

         this.paginate_total = parseInt(this.filternews.length / this.paginate) + 1;

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
                  },

              ]

          },

           filternews() {
            return this.filternewsdataBytitle(
            this.filternewsdataBypublished(this.newsdata)
           
            )
           },
           filtercategories(){

            return this.filternewscategoriesBycategory(this.newscategories)
           }
        },
   
     
       methods:{

      filternewsdataBytitle: function (newsdata) {
       
        return this.search? newsdata.filter((newdata) => newdata.title.toLowerCase().match(this.search.toLowerCase())): newsdata;
        
     },

     filternewsdataBypublished: function (newsdata) {
      return this.published ? newsdata.filter((newdata) => !newdata.publishedAt.indexOf(this.published)): newsdata;
    
    },
    /*  filternewsdataBypublishedto: function (newsdata) {
      return this.publishedto ? newsdata.filter((newdata) => !newdata.publishedAt.indexOf(this.publishedto)): newsdata;
    
    },*/

    filternewscategoriesBycategory: function (newscategories) {
    
    return this.category ? newscategories.filter((newscategory) => !newscategory.name.indexOf(this.category)): newscategories;
    
    },
    filtersortingasc: function () {

      this.newsdata.sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));

    },

   /*filtersortingdesc:function() {

      this.newsdata.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
    
    },*/

    setPaginate: function (i) {
       if (this.current == 1) {
         return i < this.paginate;
       }
       else {
         return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
       }
                
     },
     updateCurrent: function (i) {

        this.current = i;

     },
     updatePaginate: function () {

       this.paginate_total = parseInt(this.filternews.length / this.paginate) + 1;
       this.current = 1;
       
     },

     onClickPreviousPage:function(){
             
      if(this.current > 1 ){
      this.current= this.current - 1;             
          
      }

        },
     onClickNextPage:function(){
          
      if(this.current >= 1 && this.current < this.paginate_total){
      this.current= this.current + 1;

       }

    },
        
    },
     
});
</script>