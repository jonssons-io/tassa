<template>
	<b-container>
		<h4 class="editPersonal_changeLabel">Personligt</h4>
		<b-row class="my-3" v-for="type in phone" :key="type">
			<b-col cols="6"
				><lable class="editLable" :for="`type-${type}`">{{
					type
				}}</lable>
			</b-col>
			<b-col cols="6"
				><b-form-input
					cols="6"
					placeholder="070-1234567"
					:id="`type-${type}`"
					:type="type"
					class="editPersonal_changeInput"
				></b-form-input
			></b-col>
		</b-row>
		<b-row class="my-3" v-for="type in mail" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><b-form-input
					placeholder="Namn@mail.com"
					:id="`type-${type}`"
					:type="type"
					class="editPersonal_changeInput"
				></b-form-input
			></b-col>
		</b-row>
		<b-row class="my-3" v-for="type in area" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><b-form-input
					placeholder="Östra svealand"
					:id="`type-${type}`"
					:type="type"
					class="editPersonal_changeInput"
				></b-form-input
			></b-col>
		</b-row>
		<b-row class="my-3 " v-for="type in name" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><b-form-input
					placeholder="Namn"
					:id="`type-${type}`"
					:type="type"
					class="editPersonal_changeInput"
				></b-form-input
			></b-col>
		</b-row>
		<b-row class="my-3 " v-for="type in lastname" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><b-form-input
					placeholder="Efternamn"
					:id="`type-${type}`"
					:type="type"
					class="editPersonal_changeInput"
				></b-form-input
			></b-col>
		</b-row>
		<b-row class="my-3" v-for="type in picture" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><button color="success" class="btn btn-success">
					{{ "Ladda upp bild" }}
				</button></b-col
			>
		</b-row>
		<b-row class="my-3" v-for="type in erease" :key="type">
			<b-col cols="6"
				><label class="editLable" :for="`type-${type}`">{{
					type
				}}</label></b-col
			>
			<b-col cols="6"
				><button color="success" class="btn btn-danger">
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
			phone: ["Telefonnummer"],
			mail: ["E-postadress"],
			area: ["Geografiskt område"],
			name: ["Ändra namn"],
			lastname: ["Ändra efternamn"],
			picture: ["Byt profilbild"],
			erease: ["Radera ditt konto"]
		};
	}
};
import "./../../assets/css/editPersonal.css";
</script>

<style lang="less" scoped></style>
