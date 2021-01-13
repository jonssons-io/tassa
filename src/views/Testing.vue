<template >
<div class="testing--container">
    <TestingBanner />
   <NavBar />
</div>
 
</template>

<script>
import TestingBanner from "@/components/Test/TestingBanner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Testing",
  components: {
    TestingBanner,
    NavBar
  }
};


</script>

<style >

.testing--container {
    background-color: #005b52;
    height: 100vh;
}

</style>