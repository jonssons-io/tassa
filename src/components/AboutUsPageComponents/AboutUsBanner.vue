<template>
	<b-container class="bv-example-row aboutus--container">
		<b-row class="text-center">
			<b-col></b-col>
			<b-col cols="12">
				<h2>Vår idé</h2>
			</b-col>
			<b-col></b-col>
		</b-row>
		<b-row class="text-center">
			<b-col cols="12">
				<p>
					Idén med Tassa kommer från ett problem som lyftes av en
					bekant till oss, som uttryckte oro och otrygghet inför sena
					kvällspromenader med hund när det nu är mörkt ute större
					delen av dygnet.
				</p>
				<p>
					Lösningen blev då en portal där hundägare kan mötas och
					knyta kontakter.
				</p>
				<p>
					Tassa skapades som ett projekt i vårt examensarbete under
					början av 2021.
				</p>
			</b-col>
		</b-row>

		<div>
			<b-col cols="12">
				<h3>Kontakta oss</h3>
			</b-col>
		</div>
		<div class="social-media-icons">
			<a href="https://www.facebook.com/TassaApp" target="_blank">
				<font-awesome-icon
					class="fa-xs fa-sm fa-lg icon_color"
					:icon="{
						prefix: 'fab',
						iconName: 'facebook-square'
					}"
				/>
			</a>
			<a href="https://www.instagram.com/tassaapp/" target="_blank">
				<font-awesome-icon
					class="fa-xs fa-sm fa-lg icon_color"
					:icon="{
						prefix: 'fab',
						iconName: 'instagram'
					}"
				/>
			</a>
			<a href="https://twitter.com/TassaApp" target="_blank">
				<font-awesome-icon
					class="fa-xs fa-sm fa-lg icon_color"
					:icon="{
						prefix: 'fab',
						iconName: 'twitter'
					}"
				/>
			</a>
		</div>
	</b-container>
</template>

<script>
export default {
	name: "AboutUsBanner"
};
</script>

<style scoped>
@import "./../../assets/css/aboutUsPage.css";
</style>
