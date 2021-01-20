<template>
	<b-container fluid class="mh-100 mw-100">
		<RegisterTitle title="Registrera dig" />
		<RegisterUserForm />
		<RegisterButtons ctabtntext="Nästa" />
		<NavBar />
	</b-container>
</template>

<script>
import RegisterButtons from "@/components/RegisterComponents/RegisterButtons";
import RegisterUserForm from "@/components/RegisterComponents/RegisterUserForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";
import NavBar from "@/components/NavBar";

export default {
	name: "RegisterUser",
	components: {
		RegisterButtons,
		RegisterUserForm,
		RegisterTitle,
		NavBar
	}
};
</script>

<style scoped></style>
