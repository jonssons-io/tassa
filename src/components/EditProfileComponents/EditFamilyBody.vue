<template>
	<div>
		<div
			class="profile-family--container"
			v-for="dog in userFamily"
			:key="dog._id"
		>
			<h6 class="dog-name">{{ dog.name }}, {{ dog.age }} ÅR</h6>
			<p class="dog-info subtitle-extended">
				{{ dog.breed }}-{{ dog.gender }}
			</p>
			<div class="dog-pic">
				<img
					v-if="dog.picture"
					class="profile--picture"
					:src="`${picture}`"
					alt="Profile picture"
				/>
				<img
					v-if="!dog.picture"
					class="profile--picture"
					src="./../../assets/DefaultDog.svg"
					alt="Profile picture"
				/>
			</div>
		</div>
		<div class="">
			<b-form-textarea
				id="textarea"
				v-model="editedDesc"
				:placeholder="this.$store.state.userDesc"
				rows="5"
				max-rows="10"
				@keyup="setUserDesc"
			></b-form-textarea>
		</div>
	</div>
</template>

<script>
import CookieHandler from "../../util/CookieHandler";
import ApiHandler from "../../util/ApiHandler";
export default {
	name: "EditFamilyBody",
	created() {
		let userid = CookieHandler.getCookie("userid");
		this.fetchUserDesc(userid);
		this.fetchUserFamily(userid);
	},
	data() {
		return {
			editedDesc: "",
			userFamily: []
		};
	},
	methods: {
		fetchUserDesc(userid) {
			ApiHandler.getPrefe(userid).then(res => {
				this.editedDesc = res.data.result.description;
				this.$store.dispatch("SET_DESC", this.editedDesc);
			});
		},
		fetchUserFamily(userid) {
			ApiHandler.getDogs(userid).then(res => {
				this.userFamily = res.data.result;
			});
		},
		setUserDesc() {
			this.$store.dispatch("SET_DESC", this.editedDesc);
		}
	}
};
</script>

<style scoped></style>
