<template>
	<b-container fluid class="login-register--container mh-100 mw-100">
		<RegisterTitle title="Registrera din hund" />
		<RegisterDogForm />
		<RegisterButtons ctabtntext="Gå med" />
	</b-container>
</template>

<script>
import RegisterButtons from "@/components/RegisterComponents/RegisterButtons";
import RegisterDogForm from "@/components/RegisterComponents/RegisterDogForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";

export default {
	name: "RegisterDog",
	components: {
		RegisterButtons,
		RegisterDogForm,
		RegisterTitle
	}
};
</script>

<style scoped></style>
