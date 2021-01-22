<template>
	<b-form @submit.stop.prevent="onSubmit">
		<b-form-group
			id="register-firstname-formgroup"
			label="Förnamn"
			label-for="register-firstname"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="id-card"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-firstname"
					type="text"
					name="register-firstname"
					v-model="$v.registeruserform.firstname.$model"
					:state="validateState('firstname')"
					aria-describedby="register-firstname-live-feedback"
					placeholder="Ange ditt förnamn"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-name-firstname-live-feedback"
					v-if="!$v.registeruserform.firstname.required"
				>
					{{ this.registeruserformErrorMsg.firstname.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the length criteria -->
				<b-form-invalid-feedback
					id="register-name-firstname-live-feedback"
					v-if="
						($v.registeruserform.firstname.required &&
							!$v.registeruserform.firstname.minLength) ||
							($v.registeruserform.firstname.required &&
								!$v.registeruserform.firstname.maxLength)
					"
				>
					{{
						this.registeruserformErrorMsg.firstname
							.isNotCorrectLength
					}}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, correct length but has characters that are not UNICODE-approved letters -->
				<b-form-invalid-feedback
					id="register-name-firstname-live-feedback"
					v-if="
						$v.registeruserform.firstname.required &&
							$v.registeruserform.firstname.minLength &&
							$v.registeruserform.firstname.maxLength &&
							!$v.registeruserform.firstname.validFirstName
					"
				>
					{{ this.registeruserformErrorMsg.firstname.isNotValidName }}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group
			id="register-lastname-formgroup"
			label="Efternamn"
			label-for="register-lastname"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="id-card"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-lastname"
					type="text"
					name="register-lastname"
					v-model="$v.registeruserform.lastname.$model"
					:state="validateState('lastname')"
					aria-describedby="register-lastname-live-feedback"
					placeholder="Ange ditt efternamn"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-name-lastname-live-feedback"
					v-if="!$v.registeruserform.lastname.required"
				>
					{{ this.registeruserformErrorMsg.lastname.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the length criteria -->
				<b-form-invalid-feedback
					id="register-name-lastname-live-feedback"
					v-if="
						($v.registeruserform.lastname.required &&
							!$v.registeruserform.lastname.minLength) ||
							($v.registeruserform.lastname.required &&
								!$v.registeruserform.lastname.maxLength)
					"
				>
					{{
						this.registeruserformErrorMsg.lastname
							.isNotCorrectLength
					}}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, correct length but has characters that are not UNICODE-approved letters -->
				<b-form-invalid-feedback
					id="register-name-lastname-live-feedback"
					v-if="
						$v.registeruserform.lastname.required &&
							$v.registeruserform.lastname.minLength &&
							$v.registeruserform.lastname.maxLength &&
							!$v.registeruserform.lastname.validLastName
					"
				>
					{{ this.registeruserformErrorMsg.lastname.isNotValidName }}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group
			id="register-email-formgroup"
			label="E-postadress"
			label-for="register-email"
			label-align="left"
			class="formgroup--middle"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="at"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-email"
					type="email"
					name="register-email"
					v-model="$v.registeruserform.email.$model"
					:state="validateState('email')"
					aria-describedby="register-email-live-feedback"
					placeholder="Ange din e-postadress"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-email-live-feedback"
					v-if="!$v.registeruserform.email.required"
				>
					{{ this.registeruserformErrorMsg.email.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the criteria for being an e-mailadress -->
				<b-form-invalid-feedback
					id="register-email-live-feedback"
					v-if="
						$v.registeruserform.email.required &&
							$v.registeruserform.email.email
					"
				>
					{{ this.registeruserformErrorMsg.email.isNotEmail }}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group
			id="register-phone-formgroup"
			label="Mobilnummer"
			label-for="register-phone"
			label-align="left"
			class="formgroup--middle"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="mobile-alt"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-phone"
					type="text"
					name="register-phone"
					v-model="$v.registeruserform.phone.$model"
					:state="validateState('phone')"
					aria-describedby="register-phone-live-feedback"
					placeholder="Ange ditt mobilnummer"
					trim
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-phone-live-feedback"
					v-if="!$v.registeruserform.phone.required"
				>
					{{ this.registeruserformErrorMsg.phone.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not contain a valid swedish cellphone number -->
				<b-form-invalid-feedback
					id="register-phone-live-feedback"
					v-if="
						$v.registeruserform.phone.required &&
							(!$v.registeruserform.phone.minLength ||
								!$v.registeruserform.phone.swedishPhoneNumber)
					"
				>
					{{ this.registeruserformErrorMsg.phone.isNotValidPhone }}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group
			label="Kön"
			label-for="register-gender"
			label-align="left"
			class="formgroup-middle"
			id="formgroup--gender"
			><div class="flex-radio">
				<b-form-radio
					id="register-gender-male"
					v-model="$v.registeruserform.gender.$model"
					name="register-gender"
					:state="validateState('gender')"
					aria-describedby="register-gender-live-feedback"
					value="male"
				>
					{{ this.genders.male }}
				</b-form-radio>
				<b-form-radio
					id="register-gender-female"
					v-model="$v.registeruserform.gender.$model"
					name="register-gender"
					:state="validateState('gender')"
					aria-describedby="register-gender-live-feedback"
					value="female"
				>
					{{ this.genders.female }}
				</b-form-radio>
				<b-form-radio
					id="register-gender-other"
					v-model="$v.registeruserform.gender.$model"
					name="register-gender"
					:state="validateState('gender')"
					aria-describedby="register-gender-live-feedback"
					value="other"
				>
					{{ this.genders.other }}
				</b-form-radio>
			</div>
		</b-form-group>
		<b-form-group
			label="Kommun"
			label-for="register-area"
			label-align="left"
			class="formgroup-middle"
		>
			<b-form-select
				v-model="$v.registeruserform.area.$model"
				:options="areas"
				name="register-area"
				:state="validateState('area')"
				aria-describedby="register-area-live-feedback"
			></b-form-select>
			<!-- Shows validation errormessage if field is blank after being touched -->
			<b-form-invalid-feedback
				id="register-area-live-feedback"
				v-if="!$v.registeruserform.area.required"
				>{{
					this.registeruserformErrorMsg.area.isRequired
				}}</b-form-invalid-feedback
			>
		</b-form-group>
		<b-form-group
			id="register-password-formgroup"
			label="Lösenord"
			label-for="register-password"
			label-align="left"
			class="formgroup--middle"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="lock"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-password"
					type="password"
					name="register-password"
					v-model="$v.registeruserform.password.$model"
					:state="validateState('password')"
					aria-describedby="register-password-live-feedback"
					placeholder="Ange önskat lösenord"
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-password-live-feedback"
					v-if="!$v.registeruserform.password.required"
				>
					{{ this.registeruserformErrorMsg.password.isRequired }}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not meet the criteria for a strong password. -->
				<b-form-invalid-feedback
					id="register-password-live-feedback"
					v-if="
						$v.registeruserform.password.required &&
							!$v.registeruserform.password.goodPassword
					"
				>
					{{
						this.registeruserformErrorMsg.password.isNotGoodPassword
					}}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group
			id="register-repeat-password-formgroup"
			label="Upprepa lösenordet"
			label-for="register-repeat-password"
			label-align="left"
			class="formgroup--middle"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="lock"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-repeat-password"
					type="password"
					name="register-repeat-password"
					v-model="$v.registeruserform.repeatPassword.$model"
					:state="validateState('repeatPassword')"
					aria-describedby="register-repeat-password-live-feedback"
					placeholder="Ange lösenordet igen"
				></b-form-input>
				<!-- Shows validation errormessage if field is blank after being touched -->
				<b-form-invalid-feedback
					id="register-repeat-password-live-feedback"
					v-if="!$v.registeruserform.repeatPassword.required"
				>
					{{
						this.registeruserformErrorMsg.repeatPassword.isRequired
					}}
				</b-form-invalid-feedback>
				<!-- Shows validation errormessage if field is filled in, but does not match the previous "Password"-field -->
				<b-form-invalid-feedback
					id="register-repeat-password-live-feedback"
					v-if="
						!$v.registeruserform.repeatPassword.sameAsPassword &&
							$v.registeruserform.repeatPassword.required
					"
				>
					{{
						this.registeruserformErrorMsg.repeatPassword
							.isNotSameAsPassword
					}}
				</b-form-invalid-feedback>
			</b-input-group>
		</b-form-group>
		<b-form-group id="consent-formgroup" class="formgroup--middle">
			<b-form-checkbox-group>
				<b-form-checkbox
					id="consent"
					name="consent-checkbox"
					v-model="consent"
					class="form-control move-left checkbox-form-control"
					>Jag samtycker till behandling av mina
					personuppgifter</b-form-checkbox
				>
			</b-form-checkbox-group>
		</b-form-group>
		<b-button type="submit" variant="outline-tassabtnred"
			>Ladda upp bild</b-button
		>
		<b-button
			type="submit"
			variant="tassabtnred"
			class="btn-register--bottom"
			>{{ ctabtntext }}</b-button
		>
	</b-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
	required,
	email,
	sameAs,
	minLength,
	maxLength
} from "vuelidate/lib/validators";

export default {
	name: "RegisterUserForm",
	mixins: [validationMixin],
	data() {
		return {
			registeruserform: {
				firstname: null,
				lastname: null,
				email: null,
				phone: null,
				gender: null,
				area: null,
				password: null,
				repeatPassword: null
			},
			// Validation error messages to be shown if validation fails.
			registeruserformErrorMsg: {
				firstname: {
					isRequired: "Du måste ange ditt förnamn.",
					isNotCorrectLength:
						"Förnamn måste vara mellan 2-256 bokstäver.",
					isNotValidName: "Förnamn får endast innehålla bokstäver."
				},
				lastname: {
					isRequired: "Du måste ange ditt efternamn.",
					isNotCorrectLength:
						"Efternamn måste vara mellan 2-256 bokstäver.",
					isNotValidName: "Efternamn får endast innehålla bokstäver."
				},
				email: {
					isRequired: "Du måste ange din e-postadress.",
					isNotEmail: "E-postadressen är inte giltig."
				},
				phone: {
					isRequired: "Du måste ange ditt mobilnummer.",
					isNotValidPhone:
						"Telefonnumret måste vara 10 siffror utan mellanslag och bindestreck."
				},
				gender: {
					isRequired: "Du måste ange kön."
				},
				area: {
					isRequired: "Du måste ange område."
				},
				password: {
					isRequired: "Du måste ange ett lösenord.",
					isNotGoodPassword:
						"Lösenordet måste vara minst 10 tecken, innehålla en gemen, en versal, en siffra och ett specialtecken."
				},
				repeatPassword: {
					isRequired: "Du måste upprepa lösenordet.",
					isNotSameAsPassword: "Lösenorden matchar inte."
				}
			},
			consent: false,
			genders: {
				male: "Man",
				female: "Kvinna",
				other: "Annat"
			},
			areas: [
				{ text: "-- Ange din kommun --", value: null, disabled: true },
				{ text: "Botkyrka", value: "botkyrka" },
				{ text: "Huddinge", value: "huddinge" },
				{ text: "Solna", value: "solna" },
				{ text: "Sundbyberg", value: "sundbyberg" },
				{ text: "Ekerö", value: "ekero" }
			]
		};
	},
	props: ["ctabtntext"],
	validations: {
		registeruserform: {
			firstname: {
				// Checks so the name only contains UNICODE-approved letters
				validFirstName: firstname => {
					return /^[\p{L} .'-]+$/gu.test(firstname);
				},
				minLength: minLength(2),
				maxLength: maxLength(256),
				required
			},
			lastname: {
				// Checks so the name only contains UNICODE-approved letters
				validLastName: lastname => {
					return /^[\p{L} .'-]+$/gu.test(lastname);
				},
				minLength: minLength(2),
				maxLength: maxLength(256),
				required
			},
			email: {
				required,
				email
			},
			phone: {
				minLength: minLength(10),
				// Removes all special characters and whitespaces if phone is not null. Then checks if the number starts with 0046, 0 or 46, followed by 7, followed by 8 digits 0-9.
				swedishPhoneNumber: phone => {
					if (phone != null) {
						phone = phone.replace(/-|\s|\+/g, "");
					}
					return /^(?:0046|0|46)7(\d{8})$/.test(phone);
				},
				required
			},
			gender: {
				required
			},
			area: {
				required
			},
			password: {
				required,
				// Checks so the password contains at least one lowercase letter, one uppercase letter, one digit and a special character. Password also has to be a minimum of 10 characters.
				goodPassword: password => {
					return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !@#$%^&*])(?=.{10,}$)/.test(
						password
					);
				}
			},
			repeatPassword: {
				required,
				// Checks so the repeated password is an exact match for previously input password.
				sameAsPassword: sameAs("password")
			}
		}
	},
	methods: {
		// Changes color on label to notify user of invalid checkbox state.
		checkboxLabelColor(newColor) {
			let inputElement = document.getElementById("consent");
			let labelElement = inputElement.nextElementSibling;
			labelElement.style.color = newColor;
		},
		// Validates the userinput in all fields connected to this method.
		validateState(inputResponse) {
			const { $dirty, $error } = this.$v.registeruserform[inputResponse];
			return $dirty ? !$error : null;
		},
		onSubmit() {
			this.$v.registeruserform.$touch();
			let registeruserform = this.registeruserform;
			// Changes color of checkboxlabel to red if state is unchecked.
			if (this.consent == false) {
				this.checkboxLabelColor("#FF2942");
			}
			// Changes color of checkboxlabel to white if state is checked, but the form has other invalid fields.
			else if (this.$v.registeruserform.$anyError) {
				this.checkboxLabelColor("white");
			}
			// Sends userinput to Store, sets color of checkboxlabel to white and re-routes user to RegisterDog-view.
			else {
				this.$store.commit({
					type: "saveUserForm",
					registeruserform
				});
				this.checkboxLabelColor("white");
				this.$router.push("/registrera-hund");
			}
		}
	}
};
</script>

<style scoped>
#register-gender {
	text-align: left;
}

.input-group-text {
	min-width: 40px;
}

.btn-register--bottom {
	margin: 1em 0 13vh 0;
}
</style>
