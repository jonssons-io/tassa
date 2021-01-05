<template>
	<div class="hero-banner--container">
		<h1>Välkommen till tassa</h1>
		<p>
			Hitta hundägare i ditt närområde, få sällskap på promenaden och knyt
			nya kontakter. Vem tar du med på nästa promenad?
		</p>
		<button>Kom igång</button>
		<a href="#">Redan medlem? Logga in</a>
	</div>
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
	margin-top: 20vh

p
	color: white
	font-size: 1.1em
	font-weight: 400


.hero-banner--container
	display: flex
	flex-flow: column nowrap
	justify-content: center
	align-items: center
	padding: 0 1em
	height: 90vh


button
	background: rgba(35, 35, 35, 0.3)
	border: 3px solid #ffffff
	border-radius: 11px
	padding: 0.2em 1em
	font-size: 2em
	color: white
	text-transform: uppercase
	font-family: "Raleway", sans-serif
	font-weight: 400
	margin: 5vh 0

a
	margin: 5vh 0
</style>
