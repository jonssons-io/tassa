<template>
	<div class="profile-family--container">
		<h5 class="profile--family-title">Familj</h5>
		<!-- <div class="dogs--container">
			<div
				class="one-dog"
				v-for="dog in currentUser.dogs"
				:key="dog.name"
			>
				<h6 class="dog-name">{{ dog.name }}</h6>
				<p class="dog-info">
					{{ dog.breed }}-{{ dog.gender }}, {{ dog.age }} ÅR
				</p>
				<img :src="currentUser.dogs[0].dogPicture" alt="" />
			</div>
		</div> -->
	</div>
</template>

<script>
// import { mapState } from "vuex";
export default {
	name: "ProfileFamily"
	// computed: {
	// 	...mapState(["currentUser"])
	// }
};
</script>

<style scoped>
.profile-family--container {
	padding-top: 2em;
}
</style>
