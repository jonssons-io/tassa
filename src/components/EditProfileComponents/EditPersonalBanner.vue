<template>
	<b-container>
		<h4 class="editPersonal_changeLabel">Personligt</h4>
		<b-row class="my-3">
			<b-col cols="6">
				<h6 class="editLable">Telefonnummer</h6>
			</b-col>
			<b-col cols="6"
				><input
					cols="6"
					placeholder="070-1234567"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">E-postadress</h6></b-col>
			<b-col cols="6"
				><input
					placeholder="Namn@mail.com"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ändra område</h6> </b-col>
			<b-col cols="6"
				><input
					placeholder="Stad"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
			/></b-col>
		</b-row>
		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ändra namn</h6></b-col>
			<b-col cols="6"
				><input
					placeholder="Namn"
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
					placeholder="Efternamn"
					type="input"
					v-on:blur="handleBlur"
					class="editPersonal_changeInput"
				/>
			</b-col>
		</b-row>

		<b-row class="my-3">
			<b-col cols="6"><h6 class="editLable">Ladda upp bild</h6></b-col>
			<b-col cols="6"
				><button
					color="success"
					class="btn btn-success"
					v-on:click="picture"
				>
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
	data() {
		return {
			form: {
				accountId: false,
				information: {
					phone: false,
					email: false,
					area: false,
					name: false,
					lastname: false,
					picture: false
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
				console.log(res);
			});
		},
		deleteData() {
			//ApiHandler.deletePerson(CookieHandler.getCookie("userid")).then(
			//	res => {
			//console.log(this.accountId, res);
			console.log("Button pushed");
			setTimeout(() => {
				//this.$router.push({ path: "/" });
				alert("Kontot raderas om 2 sek");
			}, 2500);
		}
		//	);
		//}
	},
	mounted: function() {
		ApiHandler.getPerson(this.$route.params.id).then(res => {
			this.form = res.data.result;
		});
	}
};

import "./../../assets/css/editPersonal.css";
import ApiHandler from "../../util/ApiHandler";
//import CookieHandler from "../../util/CookieHandler";
</script>

<style lang="less" scoped></style>
