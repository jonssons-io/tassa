<template>
	<b-form>
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
				<b-form-invalid-feedback
					id="register-name-firstname-live-feedback"
					v-if="!$v.registeruserform.firstname.required"
				>
					{{ this.registeruserformErrorMsg.firstname.isRequired }}
				</b-form-invalid-feedback>
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
				<b-form-invalid-feedback
					id="register-name-lastname-live-feedback"
					v-if="!$v.registeruserform.lastname.required"
				>
					{{ this.registeruserformErrorMsg.lastname.isRequired }}
				</b-form-invalid-feedback>
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
				<b-form-invalid-feedback
					id="register-email-live-feedback"
					v-if="!$v.registeruserform.email.required"
				>
					{{ this.registeruserformErrorMsg.email.isRequired }}
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
				<b-form-invalid-feedback
					id="register-phone-live-feedback"
					v-if="!$v.registeruserform.phone.required"
				>
					{{ this.registeruserformErrorMsg.phone.isRequired }}
				</b-form-invalid-feedback>
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
		>
			<b-form-radio-group
				id="register-gender"
				v-model="$v.registeruserform.gender.$model"
				:options="genders"
				name="register-gender"
				:state="validateState('gender')"
				aria-describedby="register-gender-live-feedback"
			>
			</b-form-radio-group>
			<b-form-invalid-feedback
				id="register-gender-live-feedback"
				v-if="!$v.registeruserform.gender.required"
			>
				{{ this.registeruserformErrorMsg.gender.isRequired }}
			</b-form-invalid-feedback>
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
				<b-form-invalid-feedback
					id="register-password-live-feedback"
					v-if="!$v.registeruserform.password.required"
				>
					{{ this.registeruserformErrorMsg.password.isRequired }}
				</b-form-invalid-feedback>
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
				<b-form-invalid-feedback
					id="register-repeat-password-live-feedback"
					v-if="!$v.registeruserform.repeatPassword.required"
				>
					{{
						this.registeruserformErrorMsg.repeatPassword.isRequired
					}}
				</b-form-invalid-feedback>
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
			genders: [
				{ text: "Man", value: "male" },
				{ text: "Kvinna", value: "female" },
				{ text: "Annat", value: "other" }
			],
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
	validations: {
		registeruserform: {
			firstname: {
				// Kontrollerar så att namnet enbart innehåller bokstäver enligt UNICODE's bokstavsblock, inkluderar europeiska specialbokstäver.
				validFirstName: firstname => {
					return /^[\p{L} .'-]+$/gu.test(firstname);
				},
				minLength: minLength(2),
				maxLength: maxLength(256),
				required
			},
			lastname: {
				// Kontrollerar så att namnet enbart innehåller bokstäver enligt UNICODE's bokstavsblock, inkluderar europeiska specialbokstäver.
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
				// Tar bort alla specialtecken och whitespaces, kontrollerar sedan om numret börjar på 0046, 0 eller 46, följt av 7, följt av 8 siffror 0-9.
				swedishPhoneNumber: phone => {
					phone = phone.replace(/-|\s|\+/g, "");
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
				goodPassword: password => {
					return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !@#$%^&*])(?=.{10,}$)/.test(
						password
					);
				}
			},
			repeatPassword: {
				required,
				sameAsPassword: sameAs("password")
			}
		}
	},
	methods: {
		validateState(inputResponse) {
			const { $dirty, $error } = this.$v.registeruserform[inputResponse];
			return $dirty ? !$error : null;
		},
		onSubmit(event) {
			event.preventDefault();
			alert(JSON.stringify(this.registeruserform));
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
</style>
