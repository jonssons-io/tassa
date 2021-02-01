<template>
	<div class="profile-desc--container">
		<h5 class="profile-desc-title">Beskrivning</h5>
		<p class="profile-desc">{{ desc }}</p>
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
