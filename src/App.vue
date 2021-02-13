<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Tassa Start</router-link> |
			<router-link to="/om-oss">Om Oss</router-link>
		</div> -->
		<router-view />
		<NavBar />
	</div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
	components: {
		NavBar
	}
};
</script>
<style lang="scss">
body {
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
	height: calc(var(--vh, 1vh) * 100);
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
