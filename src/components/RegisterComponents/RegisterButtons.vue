<template>
	<div>
		<b-button type="submit" variant="outline-tassabtnred"
			>Ladda upp bild</b-button
		>
		<b-button
			type="submit"
			variant="tassabtnred"
			class="btn-register--bottom"
			>{{ ctabtntext }}</b-button
		>
	</div>
</template>

<script>
export default {
	name: "RegisterButtons",
	props: ["ctabtntext"]
};
</script>

<style scoped>
.btn-register--bottom {
	margin: 1em 0 13vh 0;
}
</style>
