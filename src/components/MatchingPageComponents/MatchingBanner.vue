<template>
	<b-container class="bv-example-row">
		<b-col>
			<h2 class="segment--title">Matchningar</h2>
		</b-col>
		<b-list-group>
			<b-list-group-item
				class="flex-column align-items-start B-C-A"
				v-for="(person, index) in this.persons"
				v-bind:key="index"
				:to="{ name: 'ProfilePage', params: { id: person._id } }"
				action
			>
				<h5 class="matchHeader">
					{{ person.firstName }} {{ person.lastName }}
				</h5>

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
			dogs: [],
			signedinUser: {}
		};
	},
	//Filter on user for dogsize preference criteria
	methods: {
		getData() {
			ApiHandler.getPerson("me").then(res => {
				var user = res.data.result;
				console.log(user);
				ApiHandler.getUsers(
					"?" + encodeURI("include=dog&sysquery=area=" + user.area)
				).then(res => {
					var persons = res.data.result;
					for (const key in persons) {
						var person = persons[key];
						persons[key].dog = person.dog
							.filter(
								x =>
									(x.size === "small" &&
										user.preference.size.small === true) ||
									(x.size === "medium" &&
										user.preference.size.medium === true) ||
									(x.size === "large" &&
										user.preference.size.large === true) ||
									(x.dogGender === "female" &&
										user.preference.preferredDogGender
											.female === true) ||
									(x.dogGender === "male" &&
										user.preference.preferredDogGender ===
											true)
							)
							.map(x => x);
						console.log(person.gender);
						if (
							persons[key].dog.length == 0 ||
							(person.gender === "man" &&
								user.preference.preferredGender.man === false) ||
							(person.gender === "woman" &&
								user.preference.preferredGender.woman === false) ||
							(person.gender === "other" &&
								user.preference.preferredGender.other === false)
						) {
							persons.splice(key, 1);
							console.log("he");
							//delete persons[key];
						}
					}

					this.persons = persons;
				});
			});
		},
		getDogs() {
			//ApiHandler.getDogs().then(res => {
			//	this.dogs = res.data.result;
			//});
		},

		getLocation() {
			ApiHandler.getAreas("me").then(res => {
				this.areas = res.data.result;
			});
		},
		getDog(accountId) {
			return this.dogs.filter(x => x.accountId === accountId).map(x => x);
		}
	},
	mounted: function() {
		this.getData("me");
		//this.getDogs();
		this.getLocation("me");
	}
};
import "./../../assets/css/matchingPage.css";
import ApiHandler from "../../util/ApiHandler";
</script>

<style scoped lang="sass"></style>
