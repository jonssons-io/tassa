<template>
	<div class="profile-family--container">
		<h5 class="profile--family-title">Familj</h5>
		<div class="dogs--container">
			<div
				class="one-dog"
				v-for="dog in currentUser.dogs"
				:key="dog.name"
			>
				<h6 class="dog-name">{{ dog.name }}, {{ dog.age }} ÅR</h6>
				<p class="dog-info subtitle-extended">
					{{ dog.breed }}-{{ dog.gender }}
				</p>
				<div class="dog-pic">
					<img :src="dog.dogpicture" alt="Dog profile picture" />
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "ProfileFamily",
	computed: {
		...mapState(["currentUser"])
	}
};
</script>

<style scoped>
.one-dog {
	display: grid;
	grid-template-columns: 25vw auto;
	grid-template-areas:
		"pic name"
		"pic breed";
}

.dog-pic {
	grid-area: pic;
	grid-row: 1 / span 2;
	justify-self: end;
	align-self: center;
}

.dog-name {
	grid-area: name;
}

.dog-info {
	grid-area: breed;
}
</style>
