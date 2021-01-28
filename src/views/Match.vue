<template>

  <div class="matching--container">
    <MatchingBanner />
    <NavBar />
    
  </div>
</template>

<script>

import MatchingBanner from "@/components/MatchingPageComponents/MatchingBanner.vue";
//import MatchingBanner from "@/components/MatchingPageComponents/MatchingBanner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Match",
  components: {
    MatchingBanner,
    NavBar
  }
};
</script>

<style >

</style>
