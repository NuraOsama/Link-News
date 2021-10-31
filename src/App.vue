<template>
    <div id="app" class="body-content-wrapper">
         <Preloader v-if="showpreloader"/>
         <Header/> 
         <div class="main-page" @click="HideElements">       
        <router-view />
        <Footer />
        <ScrollTop />
        </div>   
    </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";
import ScrollTop from "@/components/ScrollTop.vue";


let body=document.querySelector("body");


export default ({
    name:"App",
    components: {
        Preloader,
        Header,
        Footer,
        ScrollTop,
    },
     data() {
        return {

             showpreloader:true,
        };
      },
      beforeMount:function(){

       this.animatePreloader();

      },
      mounted: function () {
      
          this.TogglePreloader();

    },
      methods:{

         animatePreloader:function(){

               
                setTimeout(() => {
                body.classList.add("loaded");
                 },2000)
           
         },
         TogglePreloader:function(){

             setTimeout(() => {
                
                body.style.overflow="visible"
                this.showpreloader=false;
                    

             },2400)
         },
          HideElements:function(){

                let sideheader=document.querySelector(".side-navbar");
                let navbartoggler=document.querySelector(".navbar-toggler");
                let searchicon=document.querySelector(".search-icon");
                let searchform=document.querySelector(".search-input");
                
                sideheader.classList.remove("show-navbar");
                navbartoggler.classList.remove("toggle");
                searchform.classList.remove("show");
                searchicon.classList.remove("toggle");

          },
          
      },

     
   
})
</script>

