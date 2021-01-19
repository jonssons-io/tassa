<template>
  <div class="editProfile_banner">
    <EditProfileBanner />
    <NavBar />
  </div>
</template>

<script>
import EditProfileBanner from "@/components/EditProfileComponents/EditProfileBanner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "EditProfile",
  components: {
    EditProfileBanner,
    NavBar
  }
};
</script>

<style >
.editProfile_banner{
    background-color:  #005b52;
     height: 100%;
}
</style>