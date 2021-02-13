<template>
	<b-container fluid class="hero-banner--mobile">
		<HeroBanner />
	</b-container>
</template>

<script>
// @ is an alias to /src
import HeroBanner from "@/components/StartPageComponents/HeroBanner.vue";

export default {
	name: "Home",
	components: {
		HeroBanner
	}
};
</script>

<style></style>
