<template class="profile_banner">
	<b-container class="bv-example-row editProfile_header--background">
		<b-col>
			<button class="editProfile-button">
				Spara profil
			</button>
		</b-col>
		<b-col></b-col>

		<div class="information_container" lable-align="left">
			<h5 class="editProfile_changePresentation">
				Preferenser
			</h5>
		</div>

		<div class="information_gender">
			<h6 class="editProfile_changePresentation-Header">
				Jag vill promenera med
			</h6>
		</div>

		<div class="information_changePresentationGender ">
			<div class="editProfile_changePresentation-text  ">
				<input
					type="checkbox"
					:checked="form.preferredGender.woman"
					v-model="form.preferredGender.woman"
				/><lable for="gender1"> Kvinnor</lable>
			</div>
			<div class="editProfile_changePresentation-text ">
				<input
					type="checkbox"
					:checked="form.preferredGender.man"
					v-model="form.preferredGender.man"
				/><lable for="gender2"> Män </lable>
			</div>
			<div class="editProfile_changePresentation-text ">
				<input
					type="checkbox"
					:checked="form.preferredGender.other"
					v-model="form.preferredGender.other"
				/><lable for="gender3"> Annat </lable>
			</div>
		</div>

		<div class="information_dog ">
			<h6 class="editProfile_changePresentation-Header">
				Mina hundar kommer överens med
			</h6>
		</div>

		<div>
			<div class="editProfile_changePresentation-text ">
				<input
					type="checkbox"
					:checked="form.preferredDogGender.female"
					v-model="form.preferredDogGender.female"
				/><lable for="dogGender1"> Tik </lable>
			</div>
			<div class="editProfile_changePresentation-text ">
				<input
					type="checkbox"
					:checked="form.preferredDogGender.male"
					v-model="form.preferredDogGender.male"
				/><lable for="dogGender2"> Hane </lable>
			</div>
		</div>

		<div class="information_size">
			<h6 class="editProfile_changePresentation-Header">
				Storleksmässigt fungerar mina hundar bra med
			</h6>
		</div>

		<div>
			<div class="editProfile_changePresentation-text">
				<input
					type="checkbox"
					:checked="form.size.small"
					v-model="form.size.small"
				/><lable for="size">
					Små hundar
				</lable>
			</div>
			<div class="editProfile_changePresentation-text">
				<input
					type="checkbox"
					:checked="form.size.medium"
					v-model="form.size.medium"
				/><lable for="size"> Medel hundar</lable>
			</div>

			<div class="editProfile_changePresentation-text">
				<input
					type="checkbox"
					:checked="form.size.large"
					v-model="form.size.large"
				/><lable for="size"> Stora hundar</lable>
			</div>
		</div>
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
					female: false,
					male: false
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
			handler(val) {
				this.sendUpdate(val);
			},
			deep: true
		}
	},

	methods: {
		sendUpdate(form) {
			ApiHandler.updatePrefe(form.accountId, form).then(res => {
				console.log(res);
			});
		}
	},
	mounted: function() {
		ApiHandler.getPrefe(this.$route.params.id).then(res => {
			this.form = res.data.result;
		});
	}
};

import "./../../assets/css/editProfile.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
