<template>
	<div class="home hero-banner--mobile">
		<HeroBanner />
		<NavBar />
	</div>
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

<style>
.hero-banner--mobile {
	background-image: url("./../assets/MobileHeroBanner.jpg");
	width: 100vw;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
