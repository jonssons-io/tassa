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
		<div class="profile--name-area">
			<h4 class="profile--names">{{ firstname }} {{ lastname }}</h4>
			<h6 class="profile--area">{{ area }}</h6>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileHeader",
	props: ["firstname", "lastname", "area", "picture"]
};
</script>

<style scoped>
.profile-header--container {
	display: flex;
	box-shadow: 0 6px 8px rgba(24, 24, 24, 0.5);
}

.profile--picture {
	flex: 1 1 30%;
	max-width: 30vw;
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
