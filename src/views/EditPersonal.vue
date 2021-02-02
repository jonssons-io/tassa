<template>
  <div class="editProfile_banner">
    <ProfileHeader :firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
            :area="profileHeader.area"
			:picture="profileHeader.picture" />
    <EditPersonalBanner />
    <NavBar />
  </div>
</template>

<script>
import EditPersonalBanner from "@/components/EditProfileComponents/EditPersonalBanner.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import NavBar from "@/components/NavBar.vue";
import ApiHandler from "./../util/ApiHandler.js";

export default {
  name: "EditPersonal",
  components: {
    ProfileHeader,
    EditPersonalBanner,
    NavBar
  },
  	beforeCreate() {
		ApiHandler.getUser(this.$route.params.id).then(res => {
			console.log("res", res);
			this.profileHeader.firstname = res.data.result.firstName;
			this.profileHeader.lastname = res.data.result.lastName;
		});
	},
	data() {
		return {
			profileHeader: {
				firstname: "",
				lastname: "",
				area: "",
				picture: "default"
			},
			profileFamily: [],
			profileDesc: ""
		};
	}
};
</script>

<style >
.editProfile_banner{
    background-color:  #005b52;
     height: 100%;
}
</style>