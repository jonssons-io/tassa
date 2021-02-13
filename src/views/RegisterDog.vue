<template>
	<b-container fluid class="mh-100 mw-100">
		<RegisterTitle title="Registrera din hund" />
		<RegisterDogForm />
	</b-container>
</template>

<script>
import RegisterDogForm from "@/components/RegisterComponents/RegisterDogForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";

export default {
	name: "RegisterDog",
	components: {
		RegisterDogForm,
		RegisterTitle
	}
};
</script>

<style scoped></style>
