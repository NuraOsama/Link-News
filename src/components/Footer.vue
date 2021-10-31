<template>
    <footer>
       <div class="container">
           <div class="items">
           <div class="row">
               <div class="col-lg-2 col-md-6 col-sm-12">
                   <div class="content">
                        <ul>
                        <li>
                            <router-link to="/newslisting">
                               News
                            </router-link>
                        </li>
                        <li>
                           <a href="#" target="_blank">
                            Events
                           </a>
                        </li>
                        <li>
                           <a href="#" target="_blank">
                              About
                            </a>
                        </li>
                         <li>
                           <a href="#" target="_blank">
                              FAQs
                            </a>
                        </li>
                        </ul>
                   </div>
               </div>
               <div class="col-lg-2 col-md-6 col-sm-12">
                   <div class="content">
                        <ul>
                        <li>
                            <a href="#" target="_blank">
                               Privacy Policy
                            </a>
                        </li>
                        <li>
                           <a href="#" target="_blank">
                            Contact Us
                           </a>
                        </li>
                        <li>
                           <a href="#" target="_blank">
                              Complains
                            </a>
                        </li>
                        </ul>
                   </div>
               </div>
               <div class="col-lg-5 col-md-6 col-sm-12">
                   <div class="content">
                       <div class="text">
                            <h5>Subscribe to Newsletter</h5>
                       </div>
                        <form>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                  <input type="email" class="form-control" placeholder="Email Address">
                                  <button class="btn light-blue-btn" type="button">Subscribe</button>
                                </div>
                            </div>
                        </form>
                   </div>
               </div>
               <div class="col-lg-2 col-md-6 col-sm-12">
                   <div class="content">
                       <div class="text">
                           <h5>Follow us on</h5>
                       </div>
                       <div class="social-media">
                           <ul class="d-flex">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>                               
                                </li>

                                <li>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-youtube"></i>
                                    </a>                                
                                </li>
                                <li>
                                    <a href="#"  target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>  
                                </li>   
                                <li class="nav-item">
                                    <a href="#"  target="_blank">
                                        <i class="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                               <li>
                                    <a href="#"  target="_blank">
                                        <i class="fab fa-twitter"></i> 
                                    </a>       
                               </li>                                  
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
           </div>
           
        </div>
        <div class="copy-right">
            <div class="container">
           <div class="row align-items-center">
               <div class="col-lg-12">
                  <div class="copy-text text-center">
                    <p class="text-white m-0">
                        All rights reserved -<a href="https://linkdevelopment.com/"> Link Development Company </a> © 2021 
                    </p>
                  </div>
                </div>
              </div>
           </div>
        </div>
    </footer>
</template>

<script>

export default({
  name:"Footer",
})
</script>
