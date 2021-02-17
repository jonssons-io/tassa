<template>
	<div class="editProfile_banner">
		<ProfileHeader
			:firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
			:area="profileHeader.area"
			:picture="profileHeader.picture"
			:btnText="'Spara ändringar'"
		/>
		<EditFamilyBody />
	</div>
</template>

<script>
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import EditFamilyBody from "@/components/EditProfileComponents/EditFamilyBody.vue";
import ApiHandler from "./../util/ApiHandler.js";
import CookieHandler from "../util/CookieHandler.js";

export default {
	name: "EditFamily",
	components: {
		ProfileHeader,
		EditFamilyBody
	},
	beforeCreate() {
		let userid = CookieHandler.getCookie("userid");
		ApiHandler.getUser(userid).then(res => {
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
			}
		};
	}
};
</script>

<style></style>
