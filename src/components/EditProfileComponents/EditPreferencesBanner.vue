<template class="profile_banner">
	<b-container class="bv-example-row editProfile_header--background">
		<b-row>
			<b-col>
				<button class="editProfile-button float-right">
					Spara profil
				</button>
			</b-col>
			<b-col></b-col>
		</b-row>
		<b-row>
			<div class="header_container">
				<h4 class="editProfile_change-HeaderSecond">Matchning</h4>
			</div>
		</b-row>
		<b-row>
			<div class="information_gender">
				<h6 class="editProfile_changePresentation-Header">
					Jag vill promenera med
				</h6>
			</div>
		</b-row>
		<div class="information_changePresentationGender ">
			<b-row>
				<b-col
					cols="4"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text  "
					><input
						type="checkbox"
						id="gender1"
						name="gender1"
						value="female"
					/><lable for="gender1"> Kvinnor</lable></b-col
				>
				<b-col
					cols="4"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text "
					><input
						type="checkbox"
						id="gender2"
						name="gender2"
						value="Male"
					/><lable for="gender2"> Män </lable></b-col
				>
				<b-col
					cols="4"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text "
					><input
						type="checkbox"
						id="gender3"
						name="gender3"
						value="Male"
					/><lable for="gender3"> Annat </lable></b-col
				>
			</b-row>
		</div>
		<b-row>
			<div class="information_gender ">
				<h6 class="editProfile_changePresentation-Header">
					Mina hundar kommer överens med
				</h6>
			</div>
		</b-row>
		<div>
			<b-row>
				<b-col
					cols="4"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text "
					><input
						type="checkbox"
						id="dogGender1"
						name="dogGender1"
						value="female"
					/><lable for="dogGender1"> Tik </lable></b-col
				>
				<b-col
					cols="4"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text "
					><input
						type="checkbox"
						id="dogGender2"
						name="dogGender2"
						value="Male"
					/><lable for="dogGender2"> Hane </lable></b-col
				>
			</b-row>
		</div>
		<b-row>
			<div class="information_size">
				<h6 class="editProfile_changePresentation-Header">
					Storleksmässigt fungerar mina hundar bra med
				</h6>
			</div>
		</b-row>
		<div>
			<b-row>
				<b-col
					cols="6"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text"
					><input type="checkbox" :checked="form.size.small" v-model="form.size.small"/><lable
						for="size"
					>
						Små hundar
					</lable></b-col
				>
				<b-col
					cols="6"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text"
					><input type="checkbox" :checked="form.size.medium" v-model="form.size.medium" /><lable
						for="size"
					>
						Medel hundar</lable
					></b-col
				>
			</b-row>
			<b-row>
				<b-col
					cols="6"
					sm="2"
					md="2"
					lg="2"
					class="editProfile_changePresentation-text"
					><input
						type="checkbox"
						id="size"
						name="size"
						value="BigDog"
					/><lable for="size"> Stora hundar</lable></b-col
				>
				<b-col></b-col>
			</b-row>
		</div>
		<b-row>
			<div class="information_container">
				<h5 class="editProfile_changePresentation-Header">
					Presentation
				</h5>
			</div>
		</b-row>

	</b-container>
</template>

<script>
export default {
	name: "EditProfile",
	data() {
		return {
			form: {
				accountId: false,
				preferredGender: {
					man: false,
					woman: false,
					other: false
				},
				preferredDogGender: {
					bitch: false,
					hane: false
				},
				size: {
					small: false,
					medium: false,
					large: false
				}
			}
		};
	},
	watch: {
		form: {
     		handler(val){
       			this.sendUpdate(val)
     		},
     		deep: true
  		}
	},

	methods: {
		sendUpdate(form) {
			ApiHandler.updatePrefe(
				form.accountId,
				form
			).then(res => {
				console.log(res);
			});
		}
	},
	mounted: function() {
		ApiHandler.getPrefe(
			this.$route.params.id
		).then(res => {
			this.form = res.data.result;
		});			
	}
};

import "./../../assets/css/editProfile.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
