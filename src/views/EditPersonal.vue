<template>
	<div class="editProfile_banner">
		<ProfileHeader />
		<EditPersonalBanner />
		<NavBar />
	</div>
</template>

<script>
import EditPersonalBanner from "@/components/EditProfileComponents/EditPersonalBanner.vue";
import ProfileHeader from "@/components/ProfilePageComponents/ProfileHeader.vue";
import NavBar from "@/components/NavBar.vue";

export default {
	name: "EditPersonal",
	components: {
		ProfileHeader,
		EditPersonalBanner,
		NavBar
	}
};
</script>

<style>
.editProfile_banner {
	background-color: #005b52;
	height: 100%;
}
</style>
