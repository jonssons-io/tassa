<template>
	<b-container class="bv-example-row">
		<b-col>
			<h2 class="segment--title">Matchningar</h2>
		</b-col>
		<b-row>
			<b-col cols="4">
				<label class="match-label">Namn</label>
				<b-col
					class="B-C-A"
					v-for="(person, index) in this.persons"
					v-bind:key="index"
				>
					<h6>{{ person.firstName }} {{ person.lastName }}</h6>
					<span class="match-list"> </span>
				</b-col>
			</b-col>
			<b-col cols="4">
				<label class="match-label">Område</label>
				<b-col
					class="B-C-A"
					v-for="(area, index) in this.areas"
					v-bind:key="index"
					>{{ area }} <span class="match-list"></span
				></b-col>
			</b-col>
			<b-col cols="4">
				<label class="match-label">Familj</label>
				<b-col
					class="B-C-A"
					v-for="(dog, index) in this.dogs"
					v-bind:key="index"
					><h6>{{ dog.name }} {{ dog.age }}År</h6>
					<span class="match-list"></span
				></b-col>
			</b-col>
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
				lastName: false,
				area: false,
				age: false,
				name: false
			},
			persons: [],
			dogs: []
		};
	},
	methods: {
		getData() {
			ApiHandler.getUsers().then(res => {
				this.persons = res.data.result;
				console.log(res.data.result);
			});
		},
		getDogs() {
			ApiHandler.getDogs().then(res => {
				this.dogs = res.data.result;
			});
		},

		getLocation() {
			ApiHandler.getAreas().then(res => {
				this.areas = res.data.result;
				console.log(res.data.result);
			});
		}
	},
	mounted: function() {
		this.getData();
		this.getDogs();
		this.getLocation();
	}
};
import "./../../assets/css/matchingPage.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
