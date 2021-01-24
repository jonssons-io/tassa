<template>
	<div class="profile-desc--container">
		<h5 class="profile-desc-title">Beskrivning</h5>
		<p class="profile-desc">{{ currentUser.desc }}</p>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "ProfileDescription",
	computed: {
		...mapState(["currentUser"])
	}
};
</script>

<style scoped>
.profile-desc--container {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}
.profile-desc-title {
	flex: 1 0 100%;
}
.profile-desc {
	flex: 1 1 100%;
	text-align: left;
}
</style>
