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
				<b-nav-item v-if="loggedInStatus" @click.stop="toggleProfileTab"
					>Profil
					<font-awesome-icon
						icon="chevron-down"
						v-if="!expandMenu"
					></font-awesome-icon>
					<font-awesome-icon
						icon="times"
						v-if="expandMenu"
					></font-awesome-icon>
				</b-nav-item>
				<b-nav-item
					v-if="expandMenu && loggedInStatus"
					class="nav--subitem"
					:to="`/profil/${loggedInUser}`"
					>Visa Profil</b-nav-item
				>
				<b-nav-item
					v-if="expandMenu && loggedInStatus"
					class="nav--subitem"
					:to="`/redigera-preferenser/${loggedInUser}`"
					disabled
					>Ändra preferenser</b-nav-item
				>
				<b-nav-item
					v-if="expandMenu && loggedInStatus"
					class="nav--subitem"
					:to="`/redigera-familjen/${loggedInUser}`"
					>Redigera beskrivning och familj</b-nav-item
				>
				<b-nav-item
					v-if="expandMenu && loggedInStatus"
					class="nav--subitem"
					:to="`/redigera-personuppgifter/${loggedInUser}`"
					disabled
					>Personliga inställningar</b-nav-item
				>
				<b-nav-item v-if="loggedInStatus" to="/inbjudningar"
					><div
						v-if="this.$store.state.notifications.length > 0"
						class="has-notification"
					>
						{{ this.$store.state.notifications.length }}
					</div>
					Notifikationer</b-nav-item
				>
				<b-nav-item v-if="loggedInStatus" to="/matchning"
					>Matchningar</b-nav-item
				>
				<b-nav-item to="/om-oss">Om oss</b-nav-item>
				<b-nav-item v-if="!loggedInStatus" to="/logga-in"
					>Logga in</b-nav-item
				>
				<b-nav-item
					v-if="loggedInStatus"
					@click="removeCookies"
					to="/logga-in"
					>Logga ut</b-nav-item
				>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import CookieHandler from "../util/CookieHandler";
export default {
	name: "NavBar",
	data() {
		return {
			expandMenu: false,
			routerlink: ""
		};
	},
	computed: {
		loggedInStatus() {
			return this.$store.state.navbarState;
		},
		loggedInUser() {
			return CookieHandler.getCookie("userid");
		}
	},
	methods: {
		toggleProfileTab() {
			this.expandMenu = !this.expandMenu;
		},
		removeCookies() {
			CookieHandler.removeCookie("authstatus");
			CookieHandler.removeCookie("userid");
			CookieHandler.removeCookie("authtoken");
			this.$store.dispatch("SET_NAVBAR");
		}
	}
};
</script>

<style scoped>
.navbar {
	background-color: #006c61;
}
.navbar-container {
	display: flex;
	flex-direction: column nowrap;
	align-items: center;
}
.navbar-light .navbar-toggler {
	color: rgba(255, 255, 255, 0.9);
	border-color: rgba(255, 255, 255, 0.7);
}
.logo--img {
	height: 1.5em;
	padding: 0 0.35em;
}
.nav--subitem {
	border-right: 2px solid white;
	margin-right: 5px;
	padding-right: 1em;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
	color: #fff;
}
.has-notification {
	background-color: #b23850;
	display: inline;
	padding: 0 0.2em 0 0.2em;
	margin: 0 0.4em 0 0.4em;
	border-radius: 25px;
	min-width: 25px;
	height: 25px;
	text-align: center;
}
</style>
