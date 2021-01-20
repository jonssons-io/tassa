<template>
	<b-form>
		<b-form-group
			id="register-name-formgroup"
			label="Namn"
			label-for="register-name"
			label-align="left"
		>
			<b-input-group>
				<b-input-group-prepend is-text>
					<font-awesome-icon icon="at"></font-awesome-icon>
				</b-input-group-prepend>
				<b-form-input
					id="register-name"
					type="text"
					name="register-name"
					v-model="$v.registeruserform.name.$model"
					:state="validateState('name')"
					aria-describedby="register-name-live-feedback"
					placeholder="Ange ditt för- och efternamn"
					trim
				></b-form-input>
				<b-form-invalid-feedback
					id="register-name-live-feedback"
					v-if="!$v.registeruserform.name.required"
				>
					{{ this.registeruserformErrorMsg.name.isRequired }}
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
					<font-awesome-icon icon="at"></font-awesome-icon>
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
			label="Område"
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
				placeholder="Välj område"
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
					<font-awesome-icon icon="at"></font-awesome-icon>
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
					<font-awesome-icon icon="at"></font-awesome-icon>
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
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
	name: "RegisterUserForm",
	mixins: [validationMixin],
	data() {
		return {
			registeruserform: {
				name: null,
				email: null,
				phone: null,
				gender: null,
				area: null,
				password: null,
				repeatPassword: null
			},
			registeruserformErrorMsg: {
				name: {
					isRequired: "Du måste ange ditt för- och efternamn."
				},
				email: {
					isRequired: "Du måste ange din e-postadress.",
					isNotEmail: "E-postadressen är inte giltig."
				},
				phone: {
					isRequired: "Du måste ange ditt mobilnummer."
				},
				gender: {
					isRequired: "Du måste ange kön."
				},
				area: {
					isRequired: "Du måste ange område."
				},
				password: {
					isRequired: "Du måste ange ett lösenord."
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
				{ text: "-- Välj ett område --", value: null, disabled: true },
				{ text: "Norra Norrland", value: "north_norrland" },
				{ text: "Södra Norrland", value: "south_norrland" },
				{ text: "Östra Svealand", value: "east_svealand" },
				{ text: "Västra Svealand", value: "west_svealand" },
				{ text: "Norra Götaland", value: "north_gotaland" },
				{ text: "Södra Götaland", value: "south_gotaland" },
				{ text: "Gotland", value: "gotland" }
			]
		};
	},
	validations: {
		registeruserform: {
			name: {
				required
			},
			email: {
				required,
				email
			},
			phone: {
				required
			},
			gender: {
				required
			},
			area: {
				required
			},
			password: {
				required
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
</style>
