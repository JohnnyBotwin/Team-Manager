<template>

	<div>
		
		<!-- Example component -->

	</div>

</template>

<script type="text/javascript">
	
	export default {

		name: 'Example',

		created() {

			this.howToGetUserTeams();

		},

		methods : {


			howToCreateUser() {

				let me = this;

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

				let me = this;

				me.$root.users().getUser('joao@example.pt', function(user) {

					console.log(user);

				}, function(error) {

					console.log(error);

				});

			},

			howToGetAllUsers() {

				let me = this;

				me.$root.users().getUsers(function(users) {

					console.log(users);

				}, function(error) {

					console.log(error);

				});

			},

			howToCreateTeam() {

				let me = this;

				me.$root.teams().createTeam({

					name: 'teste'
					
				}, function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});

			},

			howToAssignUserToTeam() {

				let me = this;

				me.$root.userTeams().assign('joao@example.pt', 'teste', function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},


			howToUnassignUserToTeam() {

				let me = this;

				me.$root.userTeams().unassign('joao@example.pt', 'teste', function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				});


			},

			howToGetUserTeams() {

				let me = this;

				me.$root.userTeams().userTeams('joao@example.pt',  function(response) {

					console.log(response);

				}, function(error) {

					console.log(error);

				})


			}


		}



	}


</script>