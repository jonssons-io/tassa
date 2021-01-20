<template>
	<b-row align-v="center" align-h="center" class="hero-container">
		<b-col>
			<h1>Välkommen till tassa</h1>
			<p>
				Hitta hundägare i ditt närområde, få sällskap på promenaden och
				knyt nya kontakter. <br />Vem tar du med på nästa promenad?
			</p>

			<b-button variant="outline-startpagebtn" size="lg" to="/register"
				>Kom igång</b-button
			>
			<div class="clearfix"></div>
		</b-col>
		<b-link to="/logga-in" class="link--bottom"
			>Redan medlem? Logga in</b-link
		>
	</b-row>
</template>

<script>
export default {
	name: "HeroBanner"
};
</script>

<style scoped>
h1 {
	font-size: clamp(44px, 10vw, 56px);
	color: white;
	line-height: 12vw;
	margin-bottom: 0.5em;
	margin-top: 15vh;
}

p {
	font-size: 1.1em;
}

.hero-container {
	height: 80%;
}

button {
	font-family: "Raleway", sans-serif;
	font-weight: 400;
}

.clearfix {
	margin: auto 0;
}

.link--bottom {
	margin: 15vh 0 15vh 0;
}
</style>
