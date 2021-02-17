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
	watch: {
		//Set up a route watcher. Listens to changes in the route for a preexisting component.
		//(e.g. routed from ProfilePage to ProfilePage)

		//When components are reused through routers, lifecycle hooks are not called
		$route(to) {
			this.initializeUserData(to.params.id);
		}
	},
	//Runs once when component is created.
	//Does not run when routed from ProfilePage to ProfilePage, as the component is reused.
	//E.g. when page is refreshed or when routed from another component to a ProfilePage
	created() {
		this.initializeUserData(this.$route.params.id);
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
	},
	methods: {
		//Retrieves user data and sets variables - rerendering child components who use them
		initializeUserData(userid) {
			ApiHandler.getUser(userid).then(res => {
				this.profileHeader.firstname = res.data.result.firstName;
				this.profileHeader.lastname = res.data.result.lastName;
				this.profileHeader.area = res.data.result.area;
				this.profileHeader.picture = res.data.result.picture;
			});
			ApiHandler.getDogs(userid).then(res => {
				this.profileFamily = res.data.result;
			});
			ApiHandler.getPrefe(userid).then(res => {
				this.profileDesc = res.data.result.description;
			});
			ApiHandler.getInvitation(userid).then(res => {
				this.$store.dispatch("SET_NOTIFICATIONS", res.data.result);
			});
		}
	}
};
</script>

<style scoped></style>
