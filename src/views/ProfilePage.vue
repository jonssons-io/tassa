<template>
	<b-container class="profile--container">
		<ProfileHeader />
		<ProfileFamily />
		<ProfileDescription />
		<NavBar />
	</b-container>
</template>

<script>
import NavBar from "./../components/NavBar";
import ProfileHeader from "./../components/ProfilePageComponents/ProfileHeader";
import ProfileFamily from "./../components/ProfilePageComponents/ProfileFamily";
import ProfileDescription from "./../components/ProfilePageComponents/ProfileDescription";
export default {
	name: "ProfilePage",
	components: {
		NavBar,
		ProfileHeader,
		ProfileFamily,
		ProfileDescription
	}
};
</script>

<style scoped></style>
