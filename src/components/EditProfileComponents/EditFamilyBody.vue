<template>
	<div>
		<div
			class="profile-family--container one-dog"
			v-for="dog in userFamily"
			:key="dog._id"
		>
			<h6 class="dog-name">{{ dog.name }}, {{ dog.age }} ÅR</h6>
			<p class="dog-info subtitle-extended">
				{{ dog.breed }}-{{ dog.gender == "male" ? "hane" : "tik" }}
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
			<font-awesome-icon
				class="remove-dog--icon"
				icon="times"
				@click="removeDog(dog._id)"
			></font-awesome-icon>
		</div>
		<div class="btn-container">
			<b-button
				id="edit-family-add-dog"
				type="button"
				to="/registrera-hund"
				variant="tassabtnred"
				class="profile-header--btn"
				>Lägg till hund</b-button
			>
		</div>
		<div class="edit-presentation--container">
			<h5>Presentation</h5>
			<b-form-textarea
				id="textarea"
				v-model="editedDesc"
				:placeholder="this.$store.state.userDesc"
				rows="5"
				max-rows="10"
				@keyup="setUserDesc"
				autofocus
			></b-form-textarea>
		</div>
		<b-alert variant="success" v-model="showAlertMsg" dismissible>{{
			this.alertMsg
		}}</b-alert>
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
			userFamily: [],
			alertMsg: "",
			showAlertMsg: false
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
		},
		removeDog(dogId) {
			ApiHandler.deleteDog(dogId).then(() => {
				this.showAlertMsg = true;
				this.alertMsg = "Din hund är nu borttagen.";
				this.fetchUserFamily(CookieHandler.getCookie("userid"));
			});
		}
	}
};
</script>

<style scoped>
h5 {
	margin: 0.5em 0;
}
.one-dog {
	display: grid;
	grid-template-columns: 25vw auto 15vw;
	grid-template-areas:
		"pic name delete"
		"pic breed delete";
}

.one-dog:not(:first-child) {
	padding-top: 0.3em;
}

.dog-pic {
	grid-area: pic;
	grid-row: 1 / span 2;
	justify-self: end;
	align-self: start;
	margin-right: 0.5em;
}

.dog-name {
	grid-area: name;
	text-align: left;
	margin-left: 0.5em;
	margin-bottom: 0;
}

.dog-info {
	grid-area: breed;
	text-align: left;
	margin-left: 0.5em;
}

.remove-dog--icon {
	grid-area: delete;
	height: 2em;
	width: 2em;
	color: #b23850;
	margin-top: 0.8em;
}

#textarea {
	margin: 0 5vw 0 5vw;
	width: 90vw;
}

.btn-container {
	background-color: #004942;
}

#edit-family-add-dog {
	margin-top: 0;
	margin-bottom: 1em;
	width: 50vw;
}

.edit-presentation--container {
	padding-bottom: 2em;
}
</style>
