<template>
	<b-container class="bv-example-row">
		<b-col>
			<h2 class="segment--title">Matchningar</h2>
		</b-col>
		<b-row>
			<b-col>
				<label class="match-label">Namn</label>
			</b-col>
			<b-col>
				<label class="match-label">Område</label>
			</b-col>
			<b-col>
				<label class="match-label">Familj</label>
			</b-col>
			<div class="w-30">
				<b-col
					class="B-C-A"
					v-for="(person, index) in this.persons"
					v-bind:key="index"
				>
					<h6>{{ person.firstName }} {{ person.lastName }}</h6>
					<span class="match-list"> </span>
				</b-col>
			</div>
			<b-col class="B-C-A"><span class="match-list">.</span></b-col>
			<b-col class="B-C-A"><span class="match-list">.</span></b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "Match",
	data() {
		return {
			areas: [],
			information: {
				firstName: false,
				lastName: false
			},
			persons: []
		};
	},
	methods: {
		getData() {
			ApiHandler.getUsers().then(res => {
				this.persons = res.data.result;
				console.log(this.persons.firstName);
			});
		},
		getLocation() {
			ApiHandler.getAreas().then(res => {
				this.areas = res.data.result;
			});
		}
	},
	mounted: function() {
		this.getData();
	}
};
import "./../../assets/css/matchingPage.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
