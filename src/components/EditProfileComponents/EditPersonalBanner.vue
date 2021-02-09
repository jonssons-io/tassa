<template>
	<b-container>
		<div v-show="ondelete" class="alert alert-danger" role="alert">
			Ditt konto raderas
		</div>
		<h4 class="editPersonal_changeLabel">Personligt</h4>
		<h6 class="editLable">Här nedan kan du ändra din uppgifter</h6>
		<b-row class="my-4">
			<b-col cols="6">
				<h6 class="editLable">Telefonnummer</h6>
			</b-col>
			<b-col cols="6"
				><input
					cols="6"
					v-model="form.information.phoneNumber"
					value="form.information.phoneNumber"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-4">
			<b-col cols="6">
				<h6 class="editLable">E-postadress</h6>
			</b-col>
			<b-col cols="6"
				><input
					v-model="form.information.email"
					value="form.information.email"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-4">
			<b-col cols="6"><h6 class="editLable">Ändra område</h6> </b-col>
			<b-col cols="6"
				><input
					v-model="form.information.area"
					value="form.information.area"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
			/></b-col>
		</b-row>
		<b-row class="my-4">
			<b-col cols="6"><h6 class="editLable">Ändra namn</h6></b-col>
			<b-col cols="6"
				><input
					v-model="form.information.firstName"
					value="form.information.firstName"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-4">
			<b-col cols="6"><h6 class="editLable">Ändra efternamn</h6></b-col>
			<b-col cols="6"
				><input
					v-model="form.information.lastName"
					value="form.information.lastName"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>

		<b-row class="my-4">
			<b-col cols="6"><h6 class="editLable">Ladda upp bild</h6></b-col>
			<b-col cols="6"
				><button color="success" class="btn btn-success">
					{{ "Ladda upp bild" }}
				</button></b-col
			>
		</b-row>
		<b-row class="my-4">
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
			form: {
				accountId: false,
				information: {
					phoneNumber: false,
					email: false,
					area: false,
					firstName: false,
					lastName: false
				}
			}
		};
	},
	methods: {
		handleBlur(e) {
			console.log(e.target.value);
		},
		sendUpdate(form) {
			ApiHandler.updatePerson(form.accountId, form).then(res => {
				//this.phoneNumber = this.form.information.phoneNumber;
				//this.email = this.form.information.email;
				console.log(res);
				//console.log(this.phoneNumber);
			});
		},
		deleteData() {
			console.log(this.ondelete);
			this.ondelete = true;
			//ApiHandler.deletePerson(CookieHandler.getCookie("userid")).then(
			//	res => {
			//console.log(this.accountId, res);
			console.log("Button pushed");
			setTimeout(() => {
				this.$router.push({ path: "/" });
			}, 2500);
		}
		//	);
		//}
	},
	mounted: function() {
		ApiHandler.getPerson(this.$route.params.id).then(res => {
			var data = res.data.result;
			this.form.information.phoneNumber = data.phoneNumber;
			this.form.information.email = data.email;
			this.form.information.area = data.area;
			this.form.information.firstName = data.firstName;
			this.form.information.lastName = data.lastName;
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
