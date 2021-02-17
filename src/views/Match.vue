<template>
	<b-container class="profile--container">
		<h2>Matchningar</h2>
		<div class="match--field-title-container">
			<h5 class="match--field-title left">Namn</h5>
			<h5 class="match--field-title right">Område</h5>
		</div>
		<div
			class="match--field-result-container"
			v-for="person in matches"
			:key="person._id"
		>
			<router-link
				class="person-link--wrapper"
				:to="`/profil/${person._id}`"
			>
				<p class="left">
					{{ person.firstName }}
					{{ person.lastName }}
				</p>
				<p class="right area">{{ person.area.toUpperCase() }}</p>
			</router-link>
		</div>
	</b-container>
</template>

<script>
import ApiHandler from "../util/ApiHandler";
import CookieHandler from "../util/CookieHandler";

export default {
	name: "Match",
	data() {
		return {
			currentUserId: CookieHandler.getCookie("userid"),
			currentUserArea: "",
			allAccounts: [],
			matches: []
		};
	},
	created() {
		this.getUserArea();
		this.getUsers();
	},
	methods: {
		getUserArea() {
			ApiHandler.getUser(this.currentUserId).then(res => {
				this.currentUserArea = res.data.result.area;
			});
		},
		getUsers() {
			ApiHandler.getUsers()
				.then(res => {
					this.allAccounts = res.data.result.filter(
						item => item._id !== this.currentUserId
					);
				})
				.then(() => {
					this.matches = this.allAccounts.filter(
						item => item.area == this.currentUserArea
					);
				});
		}
	}
};
</script>

<style scoped>
.match--field-title-container,
.match--field-result-container {
	display: flex;
	flex-wrap: nowrap;
	padding-left: 2em;
	padding-right: 2em;
	justify-content: space-between;
}
.person-link--wrapper {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	border-top: 2px solid #e6e6e6;
	padding-top: 0.5em;
}
.left {
	text-align: left;
	align-self: flex-start;
	width: 40vw;
}

.right {
	justify-self: center;
	width: 40vw;
}
</style>
