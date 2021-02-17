<template>
	<b-container class="bv-example-row">
		<b-col>
			<h2 class="segment--title">Matchningar</h2>
		</b-col>
		<b-list-group>
			<b-list-group-item
				href="#"
				class="flex-column align-items-start B-C-A"
				v-for="(person, index) in this.persons"
				v-bind:key="index"
				><h5 class="matchHeader">
					{{ person.firstName }} {{ person.lastName }}
				</h5>

				<div class="d-flex w-80 justify-content-between">
					<h5 class="mb-1"></h5>
				</div>

				<p
					class="matchDog"
					v-for="(dog, index) in person.dog"
					v-bind:key="index"
				>
					{{ dog.name }} {{ dog.age }} År <br />
					{{ dog.breed }} <br />
					{{ dog.gender }}
				</p>

				<small
					class="matchArea"
					v-for="(area, index) in person.area"
					v-bind:key="index"
					>{{ area }}</small
				>
				<div>
					<img
						class="matchPicture"
						src="./../../assets/paw-black-shape.svg"
						alt="paw"
					/>
				</div>
			</b-list-group-item>
		</b-list-group>
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
			ApiHandler.getUsers("?include=dog").then(res => {
				this.persons = res.data.result;
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
			});
		},
		getDog(accountId) {
			return this.dogs.filter(x => x.accountId === accountId).map(x => x);
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
