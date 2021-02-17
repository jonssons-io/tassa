<template>
	<b-container class="profile--container">
		<h2>Inbjudningar</h2>

		<div
			class="match--field-result-container"
			v-for="user in userList"
			:key="user._id"
		>
			<router-link
				class="person-link--wrapper"
				:to="`/profil/${user._id}`"
			>
				<p class="presentation">
					{{
						`${user.firstName} ${user.lastName} från ${user.area} vill gärna promenera med dig!`
					}}
				</p>
				<p class="contact">
					{{ `Telefonnummer: ${user.phoneNumber}` }}
				</p>
				<p class="contact">
					{{ `Epost: ${user.email}` }}
				</p>
			</router-link>
		</div>
	</b-container>
</template>

<script>
import ApiHandler from "../util/ApiHandler";
export default {
	name: "Invitations",
	created() {
		this.populateUserList();
	},
	data() {
		return {
			userList: []
		};
	},
	methods: {
		populateUserList() {
			this.$store.state.notifications.forEach(invitation => {
				ApiHandler.getUser(invitation).then(res => {
					this.userList.push(res.data.result);
				});
			});
		}
	}
};
</script>

<style scoped>
.match--field-result-container {
	background-color: #004942;
}
.person-link--wrapper {
	display: grid;
	border-top: 2px solid #e6e6e6;
	padding: 0.5em 2em;
}
.contact {
	margin-bottom: 0.2em;
}

.match--field-result-container:last-child {
	border-bottom: 2px solid #e6e6e6;
	margin-bottom: 8vh;
}
</style>
