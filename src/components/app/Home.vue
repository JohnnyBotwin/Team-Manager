<template>

	<div class="app" id="home">
 		<datepicker></datepicker>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(taining , index) in tainingsList">
					<th scope="row">{{ index }}</th>
					<td>{{ taining.doc.title}}</td>
					<td>{{ taining.doc.description }}</td>
				</tr>
			</tbody>
		</table>

	
	</div>

</template>

<script type="text/javascript">

import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
    },
  name : 'Home',
	data (){
			return {
				tainingsList : [],
			}
	},
	created() {

		this.listTrainings();


	},

	methods : {

		listTrainings(){
			let me = this;

			me.$root.trainings().getTrainings(
        function(training) {
					console.log('seucces!!')
					console.log(training.rows)
					me.tainingsList = training.rows;
        },
        function(error) {
          console.log('not training found')
        }
      );
		}
	},

	

}

</script>


