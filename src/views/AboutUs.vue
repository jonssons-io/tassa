<template>
<div class="aboutUs_banner">
  <AboutUsBanner />
   <NavBar />
</div>
 
</template>

<script>
import AboutUsBanner from "@/components/AboutUsPageComponents/AboutUsBanner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AboutUs",
  components: {
    AboutUsBanner,
    NavBar
  }
};


</script>

<style >
.aboutUs_banner{
  background-color: #005b52;
  height: 100vh;
}

</style>
