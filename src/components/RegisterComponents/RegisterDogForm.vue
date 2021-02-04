<template>
	<b-form @submit="onSubmit">
		<b-form-group
			id="registerdog-name-formgroup"
			label="Namn"
			label-for="registerdog-name"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="paw"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="registerdog-name"
					type="text"
					name="registerdog-name"
					v-model="$v.registerdogform.name.$model"
					:state="validateState('name')"
					aria-describedby="registerdog-name-live-feedback"
					placeholder="Ange hundens namn"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="registerdog-name-live-feedback"
					v-if="!$v.registerdogform.name.required"
				>
					{{ this.registerdogformErrorMsg.name.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the length criteria -->
				<b-form-invalid-feedback
					id="register-name-firstname-live-feedback"
					v-if="
						$v.registerdogform.name.required &&
							!$v.registerdogform.name.validName
					"
				>
					{{ this.registerdogformErrorMsg.name.isNotAlpha }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, correct length but has characters that are not UNICODE-approved letters -->
			</b-input-group>
		</b-form-group>
		<b-form-group
			label="Kön"
			label-for="registerdog-gender"
			label-align="left"
			class="formgroup-middle"
			><div class="flex-radio">
				<b-form-radio
					id="registerdog-gender-female"
					v-model="$v.registerdogform.gender.$model"
					name="registerdog-gender"
					:state="validateState('gender')"
					aria-describedby="registerdog-gender-live-feedback"
					value="female"
					>{{ this.genders.female }}
				</b-form-radio>
				<b-form-radio
					id="registerdog-gender-male"
					v-model="$v.registerdogform.gender.$model"
					name="registerdog-gender"
					:state="validateState('gender')"
					aria-describedby="registerdog-gender-live-feedback"
					value="male"
					>{{ this.genders.male }}
				</b-form-radio>
			</div>
		</b-form-group>
		<b-form-group
			id="registerdog-age-formgroup"
			label="Ålder"
			label-for="registerdog-age"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="calendar-alt"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="registerdog-age"
					type="text"
					name="registerdog-age"
					v-model="$v.registerdogform.age.$model"
					:state="validateState('age')"
					aria-describedby="registerdog-age-live-feedback"
					placeholder="Ange hundens ålder"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="registerdog-age-live-feedback"
					v-if="!$v.registerdogform.age.required"
				>
					{{ this.registerdogformErrorMsg.age.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the length criteria -->
				<b-form-invalid-feedback
					id="register-age-firstname-live-feedback"
					v-if="
						$v.registerdogform.age.required &&
							!$v.registerdogform.age.numeric
					"
				>
					{{ this.registerdogformErrorMsg.age.isNotNumeric }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, correct length but has characters that are not UNICODE-approved letters -->
			</b-input-group>
		</b-form-group>
		<b-form-group
			label="Storlek"
			label-for="registerdog-size"
			label-align="left"
			class="formgroup-middle"
			><div class="flex-radio">
				<b-form-radio
					id="registerdog-size-small"
					v-model="$v.registerdogform.size.$model"
					name="registerdog-size"
					:state="validateState('size')"
					aria-describedby="registerdog-size-live-feedback"
					value="small"
					>{{ this.sizes.small }}
					<div class="dogsize-option dogsize-small">
						<img src="./../../assets/dogsize.svg" alt="Small dog" />
						<img
							src="./../../assets/dogowner.svg"
							alt="Dog owner"
						/>
					</div>
				</b-form-radio>
				<b-form-radio
					id="registerdog-size-medium"
					v-model="$v.registerdogform.size.$model"
					name="registerdog-size"
					:state="validateState('size')"
					aria-describedby="registerdog-size-live-feedback"
					value="medium"
					>{{ this.sizes.medium }}
					<div class="dogsize-option dogsize-medium">
						<img
							src="./../../assets/dogsize.svg"
							alt="Medium dog"
						/>
						<img
							src="./../../assets/dogowner.svg"
							alt="Dog owner"
						/>
					</div>
				</b-form-radio>
				<b-form-radio
					id="registerdog-size-large"
					v-model="$v.registerdogform.size.$model"
					name="registerdog-size"
					:state="validateState('size')"
					aria-describedby="registerdog-size-live-feedback"
					value="large"
					>{{ this.sizes.large }}
					<div class="dogsize-option dogsize-large">
						<img src="./../../assets/dogsize.svg" alt="Large dog" />
						<img
							src="./../../assets/dogowner.svg"
							alt="Dog owner"
						/>
					</div>
				</b-form-radio>
				<div class="dogsize-container"></div>
			</div>
		</b-form-group>
		<b-form-group
			id="registerdog-breed-formgroup"
			label="Ras"
			label-for="registerdog-breed"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="dog"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="registerdog-breed"
					type="text"
					name="registerdog-breed"
					v-model="$v.registerdogform.breed.$model"
					:state="validateState('breed')"
					aria-describedby="registerdog-breed-live-feedback"
					placeholder="Ange hundens ras"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="registerdog-breed-live-feedback"
					v-if="!$v.registerdogform.breed.required"
				>
					{{ this.registerdogformErrorMsg.breed.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the length criteria -->
				<b-form-invalid-feedback
					id="register-breed-firstname-live-feedback"
					v-if="
						$v.registerdogform.breed.required &&
							!$v.registerdogform.breed.validBreed
					"
				>
					{{ this.registerdogformErrorMsg.breed.isNotAlpha }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, correct length but has characters that are not UNICODE-approved letters -->
			</b-input-group>
		</b-form-group>
		<b-button type="submit" variant="outline-tassabtnred"
			>Ladda upp bild</b-button
		>
		<b-alert
			variant="danger"
			v-model="submit.showLoginFailed"
			dismissible
			>{{ this.submit.failedMsg }}</b-alert
		>
		<b-button
			type="submit"
			variant="tassabtnred"
			class="btn-register--bottom"
			:disabled="submit.showBtnSpinner"
			><b-spinner
				style="width: 1.5em; height: 1.5em;"
				v-if="submit.showBtnSpinner"
			></b-spinner
			>{{ this.submit.btnText }}</b-button
		>
	</b-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, numeric } from "vuelidate/lib/validators";
import ApiHandler from "../../util/ApiHandler";

export default {
	name: "RegisterDogForm",
	mixins: [validationMixin],
	data() {
		return {
			registerdogform: {
				name: null,
				gender: null,
				age: null,
				size: null,
				breed: null
			},
			registerdogformErrorMsg: {
				name: {
					isRequired: "Du måste ange hundens namn.",
					isNotAlpha: "Hundens namn får endast innehålla bokstäver."
				},
				gender: {
					isRequired: "Du måste ange hundens kön."
				},
				age: {
					isRequired: "Du måste ange hundens ålder.",
					isNotNumeric: "Du får enbart använda siffror."
				},
				size: {
					isRequired: "Du måste ange hundens storlek."
				},
				breed: {
					isRequired: "Du måste ange hundens ras.",
					isNotAlpha: "Hundras får endast innehålla bokstäver."
				}
			},
			genders: {
				female: "Tik",
				male: "Hane"
			},
			sizes: {
				small: "< 30 cm",
				medium: "31-45 cm",
				large: "> 46 cm"
			},
			submit: {
				showLoginFailed: false,
				failedMsg: "",
				btnText: "Gå med",
				showBtnSpinner: false
			}
		};
	},
	validations: {
		registerdogform: {
			name: {
				validName: name => {
					return /^[\p{L} .'-]+$/gu.test(name);
				},
				required
			},
			gender: {
				required
			},
			age: {
				required,
				numeric
			},
			size: {
				required
			},
			breed: {
				required,
				validBreed: breed => {
					return /^[\p{L} .'-]+$/gu.test(breed);
				}
			}
		}
	},
	methods: {
		// Validates the userinput in all fields connected to this method.
		validateState(inputResponse) {
			const { $dirty, $error } = this.$v.registerdogform[inputResponse];
			return $dirty ? !$error : null;
		},
		async submitNewDog(doginfo) {
			try {
				const res = await ApiHandler.createDog(doginfo);
				console.log("submit dogres ", res);
			} catch (error) {
				console.log("error in dogsubmit ", error);
			}
		},
		async submitNewUser(userinfo) {
			console.log("in submitnewuser ", userinfo);
			try {
				const userRes = await ApiHandler.createUser(userinfo);
				const doginfo = {
					accountId: userRes.result.__id,
					name: this.registerdogform.name,
					gender: this.registerdogform.gender,
					age: this.registerdogform.age,
					size: this.registerdogform.size,
					breed: this.registerdogform.breed
				};
				const dogRes = await this.submitNewDog(doginfo);
				console.log("end of submit ", dogRes);
			} catch (error) {
				console.log("error in submitnewuser ", error);
			}
		},
		onSubmit(event) {
			this.$v.registerdogform.$touch();
			event.preventDefault();
			this.submit.btnText = "Laddar...";
			this.submit.showBtnSpinner = true;
			// let registerdogform = this.registerdogform;
			// Changes color of checkboxlabel to red if state is unchecked.
			if (this.$v.registerdogform.$anyError) {
				console.log("ERROR");
			}
			// Sends userinput to Store, sets color of checkboxlabel to white and re-routes user to RegisterDog-view.
			else {
				console.log("newuser ");
				let userinfo = {
					firstName: this.$route.params.registeruserform.firstname,
					lastName: this.$route.params.registeruserform.lastname,
					age: 15,
					gender: "woman",
					email: this.$route.params.registeruserform.email,
					phoneNumber: this.$route.params.registeruserform.phone,
					gdpr: true,
					geoPosition: this.$route.params.registeruserform.area,
					password: this.$route.params.registeruserform.password
				};
				this.submitNewUser(userinfo);
			}
		}
	}
};
</script>

<style scoped>
#registerdog-gender {
	text-align: left;
}

.input-group-text {
	min-width: 40px;
}

.btn-register--bottom {
	margin: 1em 0 13vh 0;
}

.dogsize-option {
	display: flex;
	align-items: flex-end;
	justify-content: center;
	flex: 1 1 33%;
	height: 10vh;
	margin-top: 0.5em;
	margin-left: -2em;
}

.dogsize-small > img:nth-child(1) {
	height: 25%;
}
.dogsize-medium > img:nth-child(1) {
	height: 35%;
}
.dogsize-large > img:nth-child(1) {
	height: 50%;
}
.dogsize-small > img:nth-child(2),
.dogsize-medium > img:nth-child(2),
.dogsize-large > img:nth-child(2) {
	height: 10vh;
}

#registerdog-size {
	font-size: 0.9em;
	display: flex;
	justify-content: space-evenly;
}
</style>
