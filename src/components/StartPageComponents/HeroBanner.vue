<template>
	<b-row align-v="center" align-h="center" class="h-100">
		<b-col>
			<h1>Välkommen till tassa</h1>
			<p>
				Hitta hundägare i ditt närområde, få sällskap på promenaden och
				knyt nya kontakter. <br />Vem tar du med på nästa promenad?
			</p>

			<b-button variant="outline-startpagebtn" size="lg"
				>Kom igång</b-button
			>
			<div class="clearfix"></div>
			<b-link to="/logga-in">Redan medlem? Logga in</b-link>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: "HeroBanner"
};
</script>

<style scoped lang="sass">
h1
	font-size: clamp(44px, 10vw, 56px)
	color: white
	line-height: 12vw
	margin-bottom: 0.5em

p
	font-size: 1.1em

button

	font-family: "Raleway", sans-serif
	font-weight: 400
	margin: 3vh 0

.clearfix
	margin: 3em 0 8em 0
</style>
