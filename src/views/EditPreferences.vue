<template>
	<div class="editProfile_banner">
		<ProfileHeader
			:firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
			:area="profileHeader.area"
			:picture="profileHeader.picture"
			btnText="Spara ändringar"
		/>
		<EditPreferencesBanner />
	</div>
</template>

<script>
import EditPreferencesBanner from "@/components/EditProfileComponents/EditPreferencesBanner.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import ApiHandler from "./../util/ApiHandler.js";

export default {
	name: "EditPreferences",
	components: {
		ProfileHeader,
		EditPreferencesBanner
	},
	beforeCreate() {
		console.log(this.$store);
		ApiHandler.getUser(this.$route.params.id).then(res => {
			console.log("res", res);
			this.profileHeader.firstname = res.data.result.firstName;
			this.profileHeader.lastname = res.data.result.lastName;
			this.profileHeader.area = res.data.result.area;
		});
	},
	data() {
		return {
			profileHeader: {
				firstname: "",
				lastname: "",
				area: "",
				picture: "default"
			}
		};
	}
};
</script>

<style>
.editProfile_banner {
	background-color: #005b52;
	height: 100%;
}
</style>
