<template>
	<b-container fluid class="login-register--container">
		<h2 class="segment--title">Logga in</h2>
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
			<b-alert
				variant="danger"
				v-model="login.showLoginFailed"
				dismissible
				>{{ this.login.failedMsg }}</b-alert
			>
			<b-button
				type="submit"
				variant="tassabtnred"
				:disabled="login.showBtnSpinner"
				><b-spinner
					style="width: 1.5em; height: 1.5em;"
					v-if="login.showBtnSpinner"
				></b-spinner
				>{{ this.login.btnText }}</b-button
			>
		</b-form>
		<NavBar />
	</b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
// import ApiHandler from "@/util/ApiHandler.js";
import CookieHandler from "@/util/CookieHandler.js";
import ApiHandler from "../util/ApiHandler";

export default {
	name: "LogIn",
	components: {
		NavBar
	},
	mounted() {
		let email = CookieHandler.getCookie("userEmail");
		this.loginform.email = email;
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
			rememberMe: false,
			login: {
				showLoginFailed: false,
				failedMsg: "",
				btnText: "Logga in",
				showBtnSpinner: false
			}
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
			console.log(this.loginform.email);
			this.login.btnText = "Laddar...";
			this.login.showBtnSpinner = true;
			if (this.rememberMe[0] == true) {
				CookieHandler.setCookie("userEmail", this.loginform.email);
			}
			let loginform = {
				email: this.loginform.email,
				password: this.loginform.password
			};
			ApiHandler.userAuth(loginform).then(res => {
				console.log(res);
				this.$router
					.push({
						name: "ProfilePage",
						params: {
							id: CookieHandler.getCookie("userid")
						}
					})
					.catch(error => {
						console.log("errorresponse ", error.response);
						console.log("error ", error);
						this.login.showLoginFailed = true;
						this.login.showBtnSpinner = false;
						this.login.btnText = "Logga in";
						switch (error.response.status) {
							case 401:
								this.login.failedMsg =
									"Fel inloggningsuppgifter";
								break;
							default:
								this.login.failedMsg =
									"Det går inte att logga in just nu. Försök igen om en stund.";
								break;
						}
					});
			});
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
</style>
