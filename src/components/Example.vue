<template>

	<div>
		
		<!-- Example component -->

	</div>

</template>

<script type="text/javascript">
	
	export default {

		name: 'Example',

		created() {

			const me = this;
			console.log("calling trainings");
				
			/*me.$root.trainings().getTrainings(function(response) {

				console.log(response);

			}, function(error) {

				console.log(error);

			});*/

			me.$root.schedules.createSchedule({
				training: 'teste-training',
				scheduled_at : 'hello-world',
			}, function(response) {
				console.log(response);
			}, function(error) {
				console.log(error);
			});



			// this.howToGetUser();
			// this.howToGetAllUsers();
			
		},

		methods : {

			howToRandom() {

				const me = this;

				me.$root.roles().createRole({

					name : 'Developer',
					title : 'Developer',
					short_title : 'Dev',

				}, function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},


			howToCreateUser() {

				const me = this;

				me.$root.users().createUser({

					email : 'joao@example.pt',
					field1: 'value1',
					field2: 'value2',

				}, function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},

			howToGetUser() {

				const me = this;

				me.$root.users().getUser('joao@example.pt', function(user) {

					console.log(user);

				}, function(error) {

					console.log(error);

				});

			},

			howToGetAllUsers() {

				const me = this;

				me.$root.users().getUsers(function(users) {

					console.log(users);

				}, function(error) {

					console.log(error);

				});

			},

			howToCreateTeam() {

				const me = this;

				me.$root.teams().createTeam({

					name: 'teste'
					
				}, function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});

			},

			howToAssignUserToTeam() {

				const me = this;

				me.$root.userTeams().assign('joao@example.pt', 'teste', function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},


			howToUnassignUserToTeam() {

				const me = this;

				me.$root.userTeams().unassign('joao@example.pt', 'teste', function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},

			howToGetUserTeams() {

				const me = this;

				me.$root.userTeams().userTeams('joao@example.pt',  function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				})


			}


		}



	}


</script>