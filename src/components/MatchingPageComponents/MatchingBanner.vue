<template>
	<b-container class="bv-example-row">
		<b-col>
			<h2 class="segment--title">Matchningar</h2>
		</b-col>
		<table>
			<tr class="matchTable--headers">
				<th>
					<h4 class="match-label">Namn</h4>
				</th>
				<th>
					<h4 class="match-label">Område</h4>
				</th>
				<th>
					<h4 class="match-label">Familj</h4>
				</th>
			</tr>
			<tr>
				<td
					class="B-C-A"
					v-for="(person, index) in this.persons"
					v-bind:key="index"
				>
					<h6 class="matchTable--headings">
						{{ person.firstName }} {{ person.lastName }}
					</h6>
					<div
						v-for="(area, index) in person.area"
						v-bind:key="index"
					>
						<h6>{{ area.area }}</h6>
					</div>

					<div v-for="(dog, index) in person.dog" v-bind:key="index">
						<h6 class="matchTable--headingsThird">
							{{ dog.name }} {{ dog.age }} År <br />
							{{ dog.breed }} {{dog.gender}}
						</h6>
					</div>
				</td>
			</tr>
		</table>
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
