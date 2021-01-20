<template>
	<b-container fluid class="login-register--container">
		<h3 class="formtitle">Logga in</h3>
		<b-form @submit="onSubmit">
			<b-form-group
				id="registered-email-formgroup"
				label="E-postadress"
				label-for="registered-email"
				label-align="left"
			>
				<b-input-group>
					<b-input-group-prepend is-text>
						<font-awesome-icon icon="at"></font-awesome-icon>
					</b-input-group-prepend>
					<b-form-input
						id="registered-email"
						type="email"
						name="registered-email"
						v-model="$v.loginform.email.$model"
						:state="validateState('email')"
						aria-describedby="registered-email-live-feedback"
						placeholder="Ange e-postadress"
						trim
					></b-form-input>
					<b-form-invalid-feedback
						id="registered-email-live-feedback"
						v-if="!$v.loginform.email.required"
					>
						{{ this.loginformErrorMsg.email.isRequired }}
					</b-form-invalid-feedback>
					<b-form-invalid-feedback
						id="registered-email-live-feedback"
						v-if="
							!$v.loginform.email.email &&
								$v.loginform.email.required
						"
					>
						{{ this.loginformErrorMsg.email.isNotEmail }}
					</b-form-invalid-feedback>
				</b-input-group>
			</b-form-group>
			<b-form-group
				id="registered-password-formgroup"
				label="Lösenord"
				label-for="registered-password"
				label-align="left"
				class="formgroup--middle"
			>
				<b-input-group>
					<b-input-group-prepend is-text>
						<font-awesome-icon icon="lock"></font-awesome-icon>
					</b-input-group-prepend>
					<b-form-input
						id="registered-password"
						type="password"
						name="registered-password"
						v-model="$v.loginform.password.$model"
						:state="validateState('password')"
						aria-describedby="registered-password-live-feedback"
						placeholder="Ange lösenord"
						trim
					></b-form-input>
					<b-form-invalid-feedback
						id="registered-password-live-feedback"
						v-if="!$v.loginform.password.required"
					>
						{{ this.loginformErrorMsg.password.isRequired }}
					</b-form-invalid-feedback>
				</b-input-group>
			</b-form-group>
			<b-form-group id="remember-me-formgroup" class="formgroup--middle">
				<b-form-checkbox-group>
					<b-form-checkbox
						id="remember-me"
						name="remember-me-checkbox"
						v-model="rememberMe"
						class="form-control move-left checkbox-form-control"
						>Kom ihåg mig</b-form-checkbox
					>
				</b-form-checkbox-group>
			</b-form-group>
			<b-button type="submit" variant="tassabtnred">Logga in</b-button>
		</b-form>
		<span class="forgot-password">Glömt lösenord? Klicka här!</span>
		<NavBar />
	</b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
	name: "LogIn",
	components: {
		NavBar
	},
	mixins: [validationMixin],
	data() {
		return {
			loginform: {
				email: null,
				password: null
			},
			loginformErrorMsg: {
				email: {
					isRequired: "Du måste ange din e-postadress.",
					isNotEmail: "E-postadressen är inte giltig."
				},
				password: {
					isRequired: "Du måste ange ditt lösenord."
				}
			},
			rememberMe: false
		};
	},
	validations: {
		loginform: {
			email: {
				required,
				email
			},
			password: {
				required
			}
		}
	},
	methods: {
		validateState(inputResponse) {
			const { $dirty, $error } = this.$v.loginform[inputResponse];
			return $dirty ? !$error : null;
		},
		onSubmit(event) {
			event.preventDefault();
			alert(JSON.stringify(this.loginform));
		}
	}
};
</script>

<style scoped>
.formtitle {
	padding-top: 2em;
	margin-bottom: 1em;
}
.formgroup--top {
	padding-top: 2em;
}
.forgot-password {
	position: absolute;
	bottom: 7em;
	left: 0;
	right: 0;
	margin: auto;
}
</style>
