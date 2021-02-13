<template>
	<b-container fluid class="mh-100 mw-100">
		<RegisterTitle title="Registrera dig" />
		<RegisterUserForm />
	</b-container>
</template>

<script>
import RegisterUserForm from "@/components/RegisterComponents/RegisterUserForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";

export default {
	name: "RegisterUser",
	components: {
		RegisterUserForm,
		RegisterTitle
	}
};
</script>

<style scoped></style>
