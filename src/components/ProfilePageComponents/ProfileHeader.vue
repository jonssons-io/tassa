<template>
	<div class="profile-header--container">
		<img
			v-if="picture != 'default'"
			class="profile--picture"
			:src="`${picture}`"
			alt="Profile picture"
		/>
		<img
			v-if="picture == 'default'"
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
			if (this.btnText == "Editera profil") {
				this.$router.push({
					path: "/editera-familjen"
				});
			} else if (this.btnText == "Föreslå promenad") {
				console.log("fixa så att notifikation dyker upp hos mottagare");
			} else {
				console.log("MICKIS LOGIK HÄR!!");
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
