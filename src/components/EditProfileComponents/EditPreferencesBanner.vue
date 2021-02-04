<template class="profile_banner">
	<b-container class="bv-example-row editProfile_header--background">
		<h4 class="editProfile_change-HeaderSecond">Preferenser</h4>
		<b-form @submit="sumbitForm">
			<b-form-group>
				<h6 class="editProfile_changePresentation-Header">
					Jag vill promenera med
				</h6>
				<b-form-checkbox-group
					class="editProfile_changePresentation-text"
					v-model="genders"
					:options="genderoptions"
					name="genderselector"
				></b-form-checkbox-group>
			</b-form-group>
			<b-form-group>
				<h6 class="editProfile_changePresentation-Header">
					Mina hundar kommer överens med
				</h6>
				<b-form-checkbox-group
					class="editProfile_changePresentation-text"
					v-model="doggender"
					:options="doggenderoptions"
					name="doggenderSelector"
				></b-form-checkbox-group>
			</b-form-group>
			<b-form-group>
				<h6 class="editProfile_changePresentation-Header">
					Storleksmässigt fungerar mina hundar bra med
				</h6>
				<b-form-checkbox-group
					class="editProfile_changePresentation-text"
					v-model="size"
					:options="sizeoptions"
					name="sizeSelector"
				></b-form-checkbox-group>
				<button type="submit" class="btn btn-changeData" >Spara ändringar</button>
			</b-form-group>
		</b-form>
	</b-container>
</template>

<script>
export default {
	name: "EditProfile",
	data() {
		return {
			genders: [], // Must be an array reference!
			genderoptions: [
				{ text: "Män", value: "male" },
				{ text: "Kvinnor", value: "women" },
				{ text: "Annat", value: "other" }
			],
			doggender: [],
			doggenderoptions: [
				{ text: "Tikar", value: "Bitch" },
				{ text: "Hanar", value: " Hane" }
			],
			size: [],
			sizeoptions: [
				{ text: "Små hundar", value: "small" },
				{ text: "Medelstora hundar", value: "medium" },
				{ text: "Stora hundar", value: "large" }
			]
		};
	},
	methods: {
		findValues(value, array) {
			return array.find(prefrence => prefrence == value);
		},
		submitForm(event) {
			event.preventDefault();
			const userPrefrences = {
				accountId: this.$store.state.currentUser.id,
				preferredGender: {
					man: true,
					woman: true,
					other: true
				},
				preferredDogGender: {
					bitch: true,
					hane: true
				},
				size: {
					small: true,
					medium: true,
					large: true
				}
			};
			if (this.findValues("male", this.genders) == undefined) {
				return (this.preferredGender.man = false);
			}
			if (this.findValues("women", this.genders) == undefined) {
				return (this.preferredGender.woman = false);
			}
			if (this.findValues("other", this.genders) == undefined) {
				return (this.preferredGender.other = false);
			}
			if (this.findValues("Bitch", this.doggender) == undefined) {
				return (this.preferredDogGender.bitch = false);
			}
			if (this.findValues("Hane", this.doggender) == undefined) {
				return (this.preferredDogGender.hane = false);
			}
			if (this.findValues("small", this.size) == undefined) {
				return (this.size.small = false);
			}
			if (this.findValues("medium", this.size) == undefined) {
				return (this.size.medium = false);
			}
			if (this.findValues("large", this.size) == undefined) {
				return (this.size.large = false);
			}
			ApiHandler.updatePrefe(
				this.$store.state.currentUser.id,
				userPrefrences
			).then(res => {
				console.log(res);
				this.$router.push({
					path: "/matchning"
				});
			});
		}
	}
};

import "./../../assets/css/editProfile.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
