<template>
  <div class="editProfile_banner">
    <ProfileHeader />
    <EditPreferencesBanner />
    <NavBar />
  </div>
</template>

<script>
import EditPreferencesBanner from "@/components/EditProfileComponents/EditPreferencesBanner.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "EditPreferences",
  components: {
    ProfileHeader,
    EditPreferencesBanner,
    NavBar
  }
};
</script>

<style >
.editProfile_banner {
  background-color: #005b52;
  height: 100%;
}
</style>