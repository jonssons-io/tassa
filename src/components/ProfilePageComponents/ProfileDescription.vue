<template>
	<div class="profile-desc--container">
		<h5 class="profile-desc-title">Beskrivning</h5>
		<p v-if="desc" class="profile-desc">{{ desc }}</p>
		<p v-if="!desc" class="profile-desc">Oj, här var det tomt!</p>
	</div>
</template>

<script>
export default {
	name: "ProfileDescription",
	props: ["desc"]
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
