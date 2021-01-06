<template>
	<!-- <div class="navbar-container">
		<span class="logo--text">Tassa</span>
		<img class="logo--img" src="./../assets/Logo.svg" alt="Tassa Logo" />
	</div> -->
	<b-navbar toggleable fixed="bottom">
		<b-navbar-brand class="navbar-container" to="/"
			><span class="logo--text">Tassa</span>
			<img
				class="logo--img"
				src="./../assets/LogoCropped.svg"
				alt="Tassa Logo"
		/></b-navbar-brand>

		<b-navbar-toggle target="navbar-toggle-collapse">
			<template #default="{ expanded }">
				<b-icon v-if="expanded" icon="chevron-bar-down"></b-icon>
				<b-icon v-else icon="chevron-bar-up"></b-icon>
			</template>
		</b-navbar-toggle>
		<b-collapse id="navbar-toggle-collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item to="/">Hem</b-nav-item>
				<b-nav-item to="/om-oss">Om oss</b-nav-item>
				<b-nav-item to="/logga-in">Logga in</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style scoped lang="sass">
.navbar
    background-color: #006C61
.navbar-container
    display: flex
    flex-direction: column nowrap
    align-items: center

.navbar-light .navbar-toggler
    color: rgba(255, 255, 255, 0.9)
    border-color: rgba(255, 255, 255, 0.7)

.logo--img
    height: 1.5em
    padding: 0 0.35em
</style>
