<template>
	<b-container fluid class="mh-100 mw-100">
		<RegisterTitle title="Registrera din hund" />
		<RegisterDogForm :userForm="userForm" ctabtntext="Gå med" />
		<NavBar />
	</b-container>
</template>

<script>
import RegisterDogForm from "@/components/RegisterComponents/RegisterDogForm";
import RegisterTitle from "@/components/RegisterComponents/RegisterTitle";
import NavBar from "@/components/NavBar";

export default {
	name: "RegisterDog",
	components: {
		RegisterDogForm,
		RegisterTitle,
		NavBar
	},
	props: ["userForm"]
};
</script>

<style scoped></style>
