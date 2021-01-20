<template>
	<b-container fluid class="hero-banner--mobile">
		<HeroBanner />
		<NavBar />
	</b-container>
	<!-- </div> -->
</template>

<script>
// @ is an alias to /src
import HeroBanner from "@/components/StartPageComponents/HeroBanner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		HeroBanner
	}
};
</script>

<style></style>
