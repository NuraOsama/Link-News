import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/scss/style.scss";
import "jquery/dist/jquery.min.js";
import "popper.js";
import "wowjs/dist/wow.min.js";
import "lazyload/lazyload.min";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    bootstrap,
    render: (h) => h(App),

    mounted(){

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        
      })
    }
    
}).$mount("#app");


 



