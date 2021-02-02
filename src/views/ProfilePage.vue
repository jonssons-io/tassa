<template>
	<b-container class="profile--container">
		<ProfileHeader
			:firstname="profileHeader.firstname"
			:lastname="profileHeader.lastname"
			:area="profileHeader.area"
			:picture="profileHeader.picture"
		/>
		<ProfileFamily :family="profileFamily" />
		<ProfileDescription :desc="profileDesc" />
		<NavBar />
	</b-container>
</template>

<script>
import NavBar from "./../components/NavBar";
import ProfileHeader from "./../components/ProfilePageComponents/ProfileHeader";
import ProfileFamily from "./../components/ProfilePageComponents/ProfileFamily";
import ProfileDescription from "./../components/ProfilePageComponents/ProfileDescription";
import ApiHandler from "./../util/ApiHandler.js";

export default {
	name: "ProfilePage",
	components: {
		NavBar,
		ProfileHeader,
		ProfileFamily,
		ProfileDescription
	},
	beforeCreate() {
		ApiHandler.getUser(this.$route.params.id).then(res => {
			console.log("res", res);
			this.profileHeader.firstname = res.data.result.firstName;
			this.profileHeader.lastname = res.data.result.lastName;
			this.$router.push({
						name: "EditPreferences",
						params: {
							id: this.$store.state.currentUser.id.firstName
						}
					});
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

<style scoped></style>
