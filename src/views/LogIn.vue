<template>
	<div class="login-register--container">
		<b-form-group
			id="registered-email-formgroup"
			description="Skriv in din e-postadress"
			label="E-postadress"
			label-for="registered-email"
		>
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
				v-if="!$v.loginform.email.email && $v.loginform.email.required"
			>
				{{ this.loginformErrorMsg.email.isNotEmail }}
			</b-form-invalid-feedback>
		</b-form-group>
		<NavBar />
	</div>
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
				email: null
			},
			loginformErrorMsg: {
				email: {
					isRequired: "Du måste ange din e-postadress.",
					isNotEmail: "E-postadressen är inte giltig."
				}
			}
		};
	},
	validations: {
		loginform: {
			email: {
				required,
				email
			}
		}
	},
	methods: {
		validateState(inputResponse) {
			const { $dirty, $error } = this.$v.loginform[inputResponse];
			return $dirty ? !$error : null;
		}
	}
};
</script>

<style scoped></style>
