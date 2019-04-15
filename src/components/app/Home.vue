<template>

	<div class="app" id="home">
 		<datepicker format="dd/MM/yyyy"></datepicker>
		Search by title:<input class="form-control" v-model="search" type="text" name="text" style="width:400px;">
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(taining , index) in tainingsList" v-if="taining.doc.title.includes(search)">
					<th scope="row">{{ index }}</th>
					<td>{{ taining.doc.title}}</td>
					<td>{{ taining.doc.description }}</td>
				</tr>
			</tbody>
		</table>

	
	</div>

</template>

<script type="text/javascript">
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  components: {
    Datepicker
  },
  name: "Home",
  data() {
    return {
      tainingsList: [],
      scheduleList: [],
      search: "",
      dateFrom: "",
      dateTo: ""
    };
  },
  created() {
    this.listTrainings();
  },

  methods: {
    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    listTrainings() {
      let me = this;

      me.$root.trainings().getTrainings(
        function(training) {
          me.tainingsList = training.rows;
          training.rows.forEach(function(element) {
            me.$root.schedules().createSchedule({
              training: element.id,
              scheduled_at: "2019-01-01",
              duration: "02:00"
            });
          });
        },
        function(error) {
          console.log("not training found");
        }
      );
    },

    getSchedules(training) {
      let me = this;
      me.$root
        .schedules()
        .trainingSchedules(training.doc.title, function(schedules) {
         // me.scheduleList = schedules;
        });
        me.scheduleList.push({id: '1', scheduled_at: '2019-01-01', duration: '02:00'});
    }
  }
};
</script>

<style>
@import "../../assets/styles/home.css";
</style>


