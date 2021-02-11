<template>
	<b-container>
		<div v-show="ondelete" class="alert alert-danger" role="alert">
			Ditt konto raderas
		</div>
		<h4 class="editPersonal_changeLabel">Personligt</h4>
		<h6 class="editLable">Här nedan kan du ändra din uppgifter</h6>
		<b-col cols="6">
			<button
				color="success"
				class="btn btn-danger"
				v-on:click="sendUpdate()"
			>
				Spara ändringar
			</button>
		</b-col>
		<b-row class="my-3">
			<b-col cols="6">
				<h6 class="editLable">Telefonnummer</h6>
			</b-col>
			<b-col cols="6"
				><input
					cols="6"
					v-model="form.phoneNumber"
					value="form.phoneNumber"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6">
				<h6 class="editLable">E-postadress</h6>
			</b-col>
			<b-col cols="6"
				><input
					v-model="form.email"
					value="form.email"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ändra område</h6> </b-col>
			<b-col cols="6"
				><select
					v-model="form.area"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				>
					<option v-for="area in areas" v-bind:key="area">{{
						area
					}}</option>
				</select>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ändra namn</h6></b-col>
			<b-col cols="6"
				><input
					v-model="form.firstName"
					value="form.firstName"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ändra efternamn</h6></b-col>
			<b-col cols="6"
				><input
					v-model="form.lastName"
					value="form.lastName"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>

		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ladda upp bild</h6></b-col>
			<b-col cols="6"
				><button color="success" class="btn btn-success">
					{{ "Ladda upp bild" }}
				</button></b-col
			>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Radera ditt konto</h6></b-col>
			<b-col cols="6"
				><button
					color="success"
					class="btn btn-danger"
					v-on:click="deleteData()"
					value="delete"
				>
					{{ "Radera" }}
				</button></b-col
			>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "EditPersonal",
	props: ["phoneNumber", "email", "area", "name", "lastname", "picture"],

	data() {
		return {
			ondelete: false,
			areas: [],
			accountId: false,
			form: {
				phoneNumber: false,
				email: false,
				area: false,
				firstName: false,
				lastName: false
			}
		};
	},
	methods: {
		handleBlur(e) {
			console.log(e.target.value);
		},
		sendUpdate() {
			console.log(this.form);
			ApiHandler.updatePerson(this.$route.params.id, this.form).then(
				res => {
					var data = res.data.result;
					this.form.phoneNumber = data.phoneNumber;
					this.form.email = data.email;
					this.form.area = data.area;
					this.form.firstName = data.firstName;
					this.form.lastName = data.lastName;
				}
			);
		},
		deleteData() {
			this.ondelete = true;
			console.log("Button pushed");
			ApiHandler.deletePerson(this.$route.params.id).then(() => {
				setTimeout(() => {
					this.$router.push({ path: "/" });
				}, 2500);
			});
		}
	},
	mounted: function() {
		ApiHandler.getPerson(this.$route.params.id).then(res => {
			var data = res.data.result;
			this.form.phoneNumber = data.phoneNumber;
			this.form.email = data.email;
			this.form.area = data.area;
			this.form.firstName = data.firstName;
			this.form.lastName = data.lastName;
			console.log(res);
		});
		ApiHandler.getAreas().then(res => {
			this.areas = res.data.result;
		});
	}
};

import "./../../assets/css/editPersonal.css";
import ApiHandler from "../../util/ApiHandler";
//import CookieHandler from "../../util/CookieHandler";
</script>

<style lang="less" scoped></style>
