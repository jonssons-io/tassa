<template>
<div class="aboutus--container">
  <AboutUsBanner />
</div>
  
</template>

<script>
import AboutUsBanner from "@/components/AboutUsPageComponents/AboutUsBanner.vue";
export default {
  name: "AboutUs",
  components: {
    AboutUsBanner
  }
};
</script>

<style >

.aboutus--container {
    height:100vh;
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
}
.contactUs {
    color:white;
    font-size:1.1em;
    font-weight:400;
    margin-bottom:0.7em; 
    text-align: right;
    margin-left: 30%;
}
</style>
