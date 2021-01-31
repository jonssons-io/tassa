<template>
  <div class="editProfile_banner">
    <ProfileHeader />
    <ProfileFamily />
    <NavBar />
  </div>
</template>

<script>
import ProfileFamily from "@/components/ProfilePageComponents/ProfileFamily.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "EditPersonal",
  components: {
    ProfileHeader,
    ProfileFamily,
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