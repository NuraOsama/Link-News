<template>
   <!--scroll-to-top-->
          <div class="top-up" >
            <a class="auto-scroll-to-top" @click="scrollToTop">
                <i class="fas fa-arrow-up"></i>
            </a>
          </div>
         <!--//scroll-to-top-->
    
</template>

<script>



export default({

    name:"ScrollTop",

     mounted: function () {
      
          this.scrollDesign();

        },

    methods: { 
        
           scrollToTop() {

           document.body.scrollTop=0;
           document.documentElement.scrollTop = 0;

           },


            scrollDesign(){

            let scrollicon=document.querySelector(".auto-scroll-to-top");

                document.addEventListener('scroll',function(){

                    if(document.documentElement.scrollTop > 100){

                         scrollicon.classList.add("visible");
                    }

                    else{

                    scrollicon.classList.remove("visible");


                    }


                })

              },

         
        },

      
  
})
</script>
