<template>
	<div class="profile-family--container">
		<h5 class="profile--family-title">Familj</h5>
		<div class="dogs--container">
			<div class="one-dog" v-for="dog in family" :key="dog.name">
				<h6 class="dog-name">{{ dog.name }}, {{ dog.age }} ÅR</h6>
				<p class="dog-info subtitle-extended">
					{{ dog.breed }}-{{ dog.gender == "male" ? "hane" : "tik" }}
				</p>
				<div class="dog-pic">
					<img
						v-if="dog.picture"
						class="profile--picture"
						:src="`${picture}`"
						alt="Profile picture"
					/>
					<img
						v-if="!dog.picture"
						class="profile--picture"
						src="./../../assets/DefaultDog.svg"
						alt="Profile picture"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileFamily",
	props: ["family"]
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
	align-self: start;
	margin-right: 0.5em;
}

.dog-name {
	grid-area: name;
	text-align: left;
	margin-left: 0.5em;
	margin-bottom: 0;
}

.dog-info {
	grid-area: breed;
	text-align: left;
	margin-left: 0.5em;
}
</style>
