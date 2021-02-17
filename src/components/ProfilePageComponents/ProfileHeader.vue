<template>
	<div class="profile-header--container">
		<img
			v-if="picture"
			class="profile--picture"
			:src="`${picture}`"
			alt="Profile picture"
		/>
		<img
			v-if="!picture"
			class="profile--picture"
			src="./../../assets/DefaultPicture.svg"
			alt="Profile picture"
		/>
		<div class="profile-header--left-container">
			<div class="profile--name-area">
				<h4 class="profile--names">{{ firstname }} {{ lastname }}</h4>
				<h6 class="profile--area">{{ area }}</h6>
			</div>
			<b-button
				type="button"
				@click="this.profileHeaderBtnAction"
				variant="tassabtnred"
				class="profile-header--btn"
				:disabled="profileBtn.showBtnSpinner"
				><b-spinner
					style="width: 1.5em; height: 1.5em;"
					v-if="profileBtn.showBtnSpinner"
				></b-spinner
				>{{ btnText }}</b-button
			>
		</div>
	</div>
</template>

<script>
import CookieHandler from "../../util/CookieHandler";
import ApiHandler from "../../util/ApiHandler";
export default {
	name: "ProfileHeader",
	props: ["firstname", "lastname", "area", "picture", "btnText"],
	data() {
		return {
			profileBtn: {
				showBtnSpinner: false
			}
		};
	},
	methods: {
		profileHeaderBtnAction() {
			if (CookieHandler.getCookie("authstatus") == "true") {
				if (this.btnText == "Editera profil") {
					this.$router.push({
						path: `/editera-familjen/${CookieHandler.getCookie(
							"userid"
						)}`
					});
				} else if (this.btnText == "Föreslå promenad") {
					let invitationData = {
						invitingUserId: CookieHandler.getCookie("userid"),
						invitedUserId: this.$route.params.id
					};
					ApiHandler.createInvitation(invitationData);
					console.log("invitationData ", invitationData);
				} else if (this.btnText == "Spara ändringar") {
					let userid = CookieHandler.getCookie("userid");
					let description = {
						description: this.$store.state.userDesc
					};
					ApiHandler.updatePrefe(userid, description);
				}
			} else {
				this.$router.push({
					path: "/logga-in"
				});
			}
		}
	}
};
</script>

<style scoped>
.profile-header--container {
	display: flex;
	box-shadow: 0 6px 8px rgba(24, 24, 24, 0.5);
}

.profile--picture {
	flex: 1 0 30%;
	max-width: 30vw;
}

.profile-header--left-container {
	flex: 1 0 70%;
	display: grid;
}

.profile--names {
	align-self: end;
	margin: 0;
	font-size: clamp(1rem, 7vw, 3rem);
}

.profile--area {
	align-self: start;
}

.profile-header--btn {
	margin-top: 0.1em;
	align-self: center;
	justify-self: center;
}
</style>
