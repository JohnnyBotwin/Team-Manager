<template>
	<div class="app" id="home">
 		<datepicker format="dd/MM/yyyy"></datepicker>
		<p>Search by title:</p>
    <input type="text" name="text" class="form-control" v-model="searchTitleText" @input="onSearchTitleTextChange(searchTitleText)" style="width:400px;">
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr class="training-item" v-for="(taining, index) in filteredTrainingsList" :key="index" @click="getSchedules(taining)">
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
  name: "Home",
  components: {
    Datepicker
  },
  data() {
    return {
      tainingsList: [],
      scheduleList: [],
      searchTitleText: "",
      dateFrom: "",
      dateTo: ""
    };
  },
  computed: {
    filteredTrainingsList() {
      const search = this.searchTitleText.toLowerCase().trim();

      if (!search) {
        return this.tainingsList;
      }

      return this.tainingsList.filter(l => l.doc.title.toLowerCase().indexOf(search) > -1);
    }
  },
  created() {
    this.listTrainings();
  },

  methods: {
    onSearchTitleTextChange(searchTitleText) {
      console.log(searchTitleText);
    },

    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    listTrainings() {
      const me = this;

      me.$root.trainings().getTrainings(
        (training => {
          me.tainingsList = training.rows;
          training.rows.forEach(function(element) {
            me.$root.schedules().createSchedule({
              id: '999',
              training_id: element.id,
              training: element.doc.title,
              scheduled_at: "20190101",
              duration: "0200"
            });
          });
        }),
        (error => {
          console.log("No trainings found.");
        })
      );
    },

    getSchedules(training) {
      const me = this;

      me.$root
        .schedules()
        .trainingSchedules(training.doc.title, function(schedules) {
          me.scheduleList = schedules;
        });
        me.scheduleList.push({id: '1', scheduled_at: '2019-01-01', duration: '02:00'});
    }
  }
};
</script>

<style>
  @import "../../assets/styles/home.css";
</style>


