<template>
	<div class="editProfile_banner">
		<ProfileHeader
			:firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
			:area="profileHeader.area"
			:picture="profileHeader.picture"
			btnText="Spara ändringar"
		/>
		<EditPersonalBanner />
	</div>
</template>

<script>
import EditPersonalBanner from "@/components/EditProfileComponents/EditPersonalBanner.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import ApiHandler from "./../util/ApiHandler.js";

export default {
	name: "EditPersonal",
	components: {
		ProfileHeader,
		EditPersonalBanner
	},
	beforeCreate() {
		ApiHandler.getUser(this.$route.params.id).then(res => {
			this.profileHeader.firstname = res.data.result.firstName;
			this.profileHeader.lastname = res.data.result.lastName;
			this.profileHeader.area = res.data.result.area;
			this.profileHeader.picture = res.data.result.picture;
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

<style>
.editProfile_banner {
	background-color: #005b52;
	height: 100%;
}
</style>
