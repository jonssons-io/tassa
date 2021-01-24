<template>
	<div class="profile-header--container">
		<img
			class="profile--picture"
			:src="currentUser.profilepicture"
			alt="Profile picture"
		/>
		<div class="profile--name-area">
			<h4 class="profile--names">
				{{ currentUser.firstname }} {{ currentUser.lastname }}
			</h4>
			<h6 class="profile--area">{{ currentUser.area }}</h6>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "ProfileHeader",
	computed: {
		...mapState(["currentUser"])
	}
};
</script>

<style scoped>
.profile-header--container {
	padding: 2em 1em 1em 1em;
	display: flex;
	box-shadow: 0 6px 8px rgba(24, 24, 24, 0.5);
}

.profile--picture {
	flex: 1 1 30%;
}

.profile--name-area {
	flex: 1 1 70%;
	display: grid;
}

.profile--names {
	align-self: end;
	margin: 0;
}

.profile--area {
	align-self: start;
}
</style>
