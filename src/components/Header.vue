
<template>
    <!--header-->
    <header>
        <section class="top-navbar">
            <nav class="navbar navbar-expand-lg fixed-top  navbar-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" @click="ToggleSideNabar">
                        <span></span>
                        <span></span>
                        <span></span>   
                    </button>
                    <router-link to="/" class="navbar-brand">
                           <img   src="../assets/images/logo.png" class="img-responsive lazyload" data-src="../assets/images/logo.png" alt="Logo"/>
                    </router-link>      
                    <div class="navbar-collapse">
                        <div class="d-flex ms-auto align-items-center">                        
                        <div class="search-form">
                        <form>
                            <div class="form-group">
                             <div class="input-group">
                              <input type="text" class="form-control search-input"  placeholder="Search">
                              <span class="input-group-text icon search-icon" @click="ToggleSearch" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">                    
                                <svg id="ic_search_24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g id="search" transform="translate(0 0)">
                                <g id="Group_8025" data-name="Group 8025" transform="translate(0 0)">
                                <path id="Path_51533" data-name="Path 51533" d="M29.817,28.049,21.1,19.335A11.9,11.9,0,1,0,19.335,21.1l8.715,8.715a.625.625,0,0,0,.884,0l.884-.884A.625.625,0,0,0,29.817,28.049Zm-17.942-6.8a9.375,9.375,0,1,1,9.375-9.375A9.385,9.385,0,0,1,11.875,21.25Z" transform="translate(0 0)" fill="#fff"/>
                                </g>
                                </g>
                                </svg>
                              </span>
                            </div>
                            </div>
                         </form>
                        </div>
                        <ul class="navbar-nav  align-items-center">
                            <li class="nav-item dropdown notifications">
                                <a class="nav-link dropdown-toggle"  data-bs-toggle="dropdown" id="navbarDropdown" aria-expanded="false" >
                                    <span class="icon notify-icon"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications">
                                       <svg id="notification_1_" data-name="notification (1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.848 31">
                                       <path id="Path_51492" data-name="Path 51492" d="M138.02,421.625a4.693,4.693,0,0,1-4.688-4.688.938.938,0,0,1,1.875,0,2.812,2.812,0,0,0,5.625,0,.938.938,0,0,1,1.875,0A4.693,4.693,0,0,1,138.02,421.625Zm0,0" transform="translate(-125.52 -390.625)" fill="#fff"/>
                                       <path id="Path_51493" data-name="Path 51493" d="M22.812,86.5H2.187A2.188,2.188,0,0,1,.765,82.65a.864.864,0,0,1,.1-.075A8.4,8.4,0,0,0,3.75,76.238V72.75A8.76,8.76,0,0,1,12.5,64a3.765,3.765,0,0,1,.616.038.937.937,0,1,1-.308,1.849,1.966,1.966,0,0,0-.309-.011A6.883,6.883,0,0,0,5.625,72.75v3.487A10.281,10.281,0,0,1,2,84.076c-.019.015-.035.029-.055.043a.309.309,0,0,0-.066.194.316.316,0,0,0,.312.312H22.812a.316.316,0,0,0,.313-.312.3.3,0,0,0-.068-.194c-.019-.014-.035-.027-.054-.043a10.278,10.278,0,0,1-3.629-7.839V74.875a.937.937,0,1,1,1.875,0v1.362a8.4,8.4,0,0,0,2.889,6.341.911.911,0,0,1,.1.073A2.187,2.187,0,0,1,22.812,86.5Zm0,0" transform="translate(0 -59.25)" fill="#fff"/>
                                       <path id="Path_51494" data-name="Path 51494" d="M268.512,6.25A6.25,6.25,0,1,1,262.262,0,6.25,6.25,0,0,1,268.512,6.25Zm0,0" transform="translate(-240.664)" fill="#8dc043"/>
                                       </svg>
                                    </span>
                                </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div class="dropdown-item dropdown-header" >
                                        <a>                                       
                                        <small  class="text-muted">Recent Notifications</small>
                                        </a>
                                    </div>
                                    <div class="dropdown-item dropdown-content">
                                    <ul class="d-flex flex-column">
                                   
                                    <li>
                                        <a>
                                          
                                             You have an upcoming appointment today!
                                            <span class="colored">
                                                Check-in Now !
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Rate Your last service appointment
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                           Your payment request has been approved
                                        </a>
                                    </li>
                                    </ul>
                                    </div>
                                    <div class="dropdown-item dropdown-footer text-center">
                                        <a>
                                            All Notifications
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item profile">
                                <a class="nav-link">
                                  <img   src="../assets/images/profile-img.png" class="img-responsive lazyload" data-src="../assets/images/profile-img.png" alt="Profile Img"/>
                                  User Name
                                </a>
                            </li>
                            <li class="nav-item dropdown settings">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="navbarDropdown"  aria-expanded="false">
                                    <span class="icon setting-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Setting"  >
                                        <svg id="settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                        <path id="Path_51536" data-name="Path 51536" d="M15.941,30H14.059A2.765,2.765,0,0,1,11.3,27.238V26.6a12.111,12.111,0,0,1-1.881-.781l-.451.451a2.762,2.762,0,0,1-3.906,0L3.728,24.941a2.762,2.762,0,0,1,0-3.906l.451-.451A12.112,12.112,0,0,1,3.4,18.7H2.762A2.765,2.765,0,0,1,0,15.941V14.059A2.765,2.765,0,0,1,2.762,11.3H3.4a12.115,12.115,0,0,1,.781-1.881l-.451-.451a2.762,2.762,0,0,1,0-3.906L5.059,3.728a2.761,2.761,0,0,1,3.906,0l.451.451A12.123,12.123,0,0,1,11.3,3.4V2.762A2.765,2.765,0,0,1,14.059,0h1.883A2.765,2.765,0,0,1,18.7,2.762V3.4a12.111,12.111,0,0,1,1.881.781l.451-.451a2.762,2.762,0,0,1,3.906,0l1.331,1.331a2.762,2.762,0,0,1,0,3.906l-.451.451A12.112,12.112,0,0,1,26.6,11.3h.637A2.765,2.765,0,0,1,30,14.059v1.883A2.765,2.765,0,0,1,27.238,18.7H26.6a12.115,12.115,0,0,1-.781,1.881l.451.451a2.762,2.762,0,0,1,0,3.906l-1.331,1.331a2.761,2.761,0,0,1-3.906,0l-.451-.451A12.122,12.122,0,0,1,18.7,26.6v.637A2.765,2.765,0,0,1,15.941,30ZM9.71,23.975A10.36,10.36,0,0,0,12.4,25.09a.879.879,0,0,1,.659.851v1.3a1,1,0,0,0,1,1h1.883a1,1,0,0,0,1-1v-1.3a.879.879,0,0,1,.659-.851,10.36,10.36,0,0,0,2.685-1.115.879.879,0,0,1,1.069.135l.919.919a1,1,0,0,0,1.419,0L25.029,23.7a1,1,0,0,0,0-1.419l-.92-.92a.879.879,0,0,1-.135-1.069A10.358,10.358,0,0,0,25.09,17.6a.879.879,0,0,1,.851-.659h1.3a1,1,0,0,0,1-1V14.059a1,1,0,0,0-1-1h-1.3a.879.879,0,0,1-.851-.659A10.36,10.36,0,0,0,23.975,9.71a.879.879,0,0,1,.135-1.069l.919-.919a1,1,0,0,0,0-1.419L23.7,4.971a1,1,0,0,0-1.419,0l-.92.92a.879.879,0,0,1-1.069.135A10.36,10.36,0,0,0,17.6,4.911a.879.879,0,0,1-.659-.851v-1.3a1,1,0,0,0-1-1H14.059a1,1,0,0,0-1,1v1.3a.879.879,0,0,1-.659.851A10.36,10.36,0,0,0,9.71,6.025.879.879,0,0,1,8.641,5.89l-.919-.919a1,1,0,0,0-1.419,0L4.971,6.3a1,1,0,0,0,0,1.419l.92.92A.879.879,0,0,1,6.025,9.71,10.358,10.358,0,0,0,4.911,12.4a.879.879,0,0,1-.851.659h-1.3a1,1,0,0,0-1,1v1.883a1,1,0,0,0,1,1h1.3a.879.879,0,0,1,.851.659A10.36,10.36,0,0,0,6.025,20.29a.879.879,0,0,1-.135,1.069l-.919.919a1,1,0,0,0,0,1.419L6.3,25.029a1,1,0,0,0,1.419,0l.92-.92A.883.883,0,0,1,9.71,23.975Z" transform="translate(0 0)" fill="#fff"/>
                                        <path id="Path_51537" data-name="Path 51537" d="M151.336,158.073a6.736,6.736,0,1,1,6.736-6.736A6.744,6.744,0,0,1,151.336,158.073Zm0-11.659a4.922,4.922,0,1,0,4.922,4.922A4.928,4.928,0,0,0,151.336,146.414Z" transform="translate(-136.336 -136.336)" fill="#fff"/>
                                        </svg>
                                    </span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div class="dropdown-item">
                                       <div class="dropdown-header">
                                        <a>                                       
                                        <small  class="text-muted">Language</small>
                                        </a>
                                       </div>
                                       <div class="dropdown-content">
                                    <ul class="d-flex flex-column">
                                   
                                    <li>
                                        <a class="d-flex justify-content-between mb-2 english-lang">
                                          
                                            <span class="text">
                                                English
                                            </span>
                                            <span class="icon colored">
                                              <i class="fas fa-check"></i>
                                            </span>

                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex justify-content-between arabic-lang">
                                              <span class="text">
                                                اللغة العربية
                                            </span>
                                            <span class="icon d-none colored">
                                              <i class="fas fa-check"></i>
                                            </span>
                                        </a>
                                    </li>
                                    </ul>
                                       </div>
                                    </div>
                                     <div class="dropdown-item">
                                       <div class="dropdown-header">
                                        <a>                                       
                                        <small  class="text-muted">Font Size</small>
                                        </a>
                                       </div>
                                       <div class="dropdown-content">
                                        <ul>

                                        <li>         
                                        <a class="d-flex flex-row">
                                          <span class="big-fontsize"> A</span>
                                          <span class="medium-fontsize colored"> A</span>
                                          <span class="small-fontsize"> A</span>

                                        </a>
                                    </li>
                                    </ul>
                                       </div>
                                    </div>
                                    <div class="dropdown-item">
                                       <div class="dropdown-header">
                                        <a>                                       
                                        <small  class="text-muted">Account</small>
                                        </a>
                                       </div>
                                       <div class="dropdown-content">
                                    <ul class="d-flex flex-row">
                                   
                                    <li>
                                        <a>
                                        Sign out
                                           
                                        </a>
                                    </li>
                                    </ul>
                                       </div>
                                    </div>
                                </div>
                            </li>      
                        </ul>
                     </div>
                    </div>
                </div>
            </nav>
        </section>

        <aside class="side-navbar">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="navbar-collapse social-navbar">
                <ul class="navbar-nav">
                                     <li class="nav-item">
                                          <a href="#" class="nav-link" target="_blank">
                                            <i class="fab fa-twitter"></i> 
                                          </a>       
                                     </li>
 
                                     <li class="nav-item">
                                             <a href="#" class="nav-link" target="_blank">
                                                <i class="fa fa-facebook-f"></i>
                                            </a>
                                     </li>
 
                                     <li class="nav-item">
                                       <a href="#" class="nav-link" target="_blank">
                                            <i class="fab fa-linkedin"></i>
                                        </a>  
                                     </li>
 
                                    
                                     <li class="nav-item">
                                        <a href="#" class="nav-link" target="_blank">
                                            <i class="fa fa-youtube"></i>
                                        </a>                                
                                    </li>
                                    
                                    
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" target="_blank">
                                           <i class="fab fa-instagram"></i>
                                        </a>                               
                                    </li>
                 </ul> 
            </div> 
            <div class="navbar-collapse main-navbar">
                <ul class="navbar-nav">

                        <li class="nav-item"  @click="scrollToTop">
                            <router-link to="/" class="nav-link" exact>
                            Home
                            </router-link>
                        </li>

                        <li class="nav-item submenu-item">
                         <a class="nav-link">About Us</a>
                         <ul class="navbar-nav sub-menu">
                             <li class="nav-item">
                                <a href="#" class="nav-link" target="_blank">
                                Who are us
                                </a>
                             </li>
                             <li class="nav-item">
                                <a href="#" class="nav-link" target="_blank">
                                Why us ?
                                </a>
                             </li>
                         </ul>
                        </li>

                         <li class="nav-item submenu-item">
                         <a class="nav-link">News</a>
                         <ul class="navbar-nav sub-menu">
                             <li class="nav-item"  @click="scrollToTop">
                                <router-link to="/newslisting" class="nav-link">
                                   News
                                </router-link>
                             </li>
                               <li class="nav-item">
                                <a href="#" class="nav-link" target="_blank">
                                  Events
                                </a>
                             </li>
                         </ul>
                        </li>

                        <li class="nav-item submenu-item">
                         <a class="nav-link">Careers</a>
                         <ul class="navbar-nav sub-menu">
                             <li class="nav-item">
                                <a  href="#" class="nav-link" target="_blank">
                               Opportunities
                                </a>
                             </li>
                         </ul>
                        </li>
          
                </ul>
                <ul class="navbar-nav">
                
                    <li class="nav-item">
                         <a href="#" class="nav-link" target="_blank">Contact us</a>
                    </li>

                         <li class="nav-item">
                         <a href="#" class="nav-link" target="_blank">Site Map</a>
                    </li>     
                </ul> 
            </div>                     
          </nav>  
        </aside>     
    </header>

    
    <!--//header-->
</template>

<script>
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default ({
    
    name:"Header",

      methods:{

        ToggleSideNabar:function(){

                let sideheader=document.querySelector(".side-navbar");
                let navbartoggler=document.querySelector(".navbar-toggler")
                
                sideheader.classList.toggle("show-navbar");
                navbartoggler.classList.toggle("toggle");
                                
          },

          
            ToggleSearch:function(){

                let searchicon=document.querySelector(".search-icon");
                let searchform=document.querySelector(".search-input");

                searchicon.classList.toggle("toggle");
                searchform.classList.toggle("show");

          },
          
            scrollToTop() {

           document.body.scrollTop=0;
           document.documentElement.scrollTop = 0;

           },


      }
   
})

</script>

