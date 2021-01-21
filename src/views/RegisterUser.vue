<template>
	<b-container fluid class="mh-100 mw-100">
		<RegisterTitle title="Registrera dig" />
		<RegisterUserForm ctabtntext="Nästa" />
		<NavBar />
	</b-container>
</template>

<script>
import RegisterUserForm from "@/components/RegisterComponents/RegisterUserForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";
import NavBar from "@/components/NavBar";

export default {
	name: "RegisterUser",
	components: {
		RegisterUserForm,
		RegisterTitle,
		NavBar
	}
};
</script>

<style scoped></style>
