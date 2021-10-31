<template>
    
       <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
            <li class="breadcrumb-item"  v-for="(breadcrumbitem,index) in breadcrumbitems" :key="index" :class="!breadcrumbitem.url ? 'active': '' ">
                <router-link v-if="breadcrumbitem.url" :to="breadcrumbitem.url">
                   {{ breadcrumbitem.label }}
                </router-link>
                <a v-else> {{ breadcrumbitem.label }}</a>
                </li>
          </ol>
       </nav>
</template>

<script>

export default({

   name:"Breadcrumb",
    props:{
        breadcrumbitems:[]
    },


})
</script>
