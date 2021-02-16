<template>
	<b-container class="profile--container">
		<ProfileHeader
			:firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
			:area="profileHeader.area"
			:picture="profileHeader.picture"
			:btnText="getBtnText"
		/>
		<ProfileFamily :family="profileFamily" />
		<ProfileDescription :desc="profileDesc" />
	</b-container>
</template>

<script>
import ProfileHeader from "./../components/ProfilePageComponents/ProfileHeader";
import ProfileFamily from "./../components/ProfilePageComponents/ProfileFamily";
import ProfileDescription from "./../components/ProfilePageComponents/ProfileDescription";
import ApiHandler from "./../util/ApiHandler.js";
import CookieHandler from "../util/CookieHandler";

export default {
	name: "ProfilePage",
	components: {
		ProfileHeader,
		ProfileFamily,
		ProfileDescription
	},
	beforeCreate() {
		ApiHandler.getUser(this.$route.params.id).then(res => {
			this.profileHeader.firstname = res.data.result.firstName;
			this.profileHeader.lastname = res.data.result.lastName;
			this.profileHeader.area = res.data.result.geoPosition;
		});
	},
	data() {
		return {
			profileHeader: {
				firstname: "",
				lastname: "",
				area: "",
				picture: "default",
				btnText: ""
			},
			profileFamily: [],
			profileDesc: ""
		};
	},
	computed: {
		getBtnText() {
			if (this.$route.params.id == CookieHandler.getCookie("userid")) {
				return "Editera profil";
			} else {
				return "Föreslå promenad";
			}
		}
	}
};
</script>

<style scoped></style>
