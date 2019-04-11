<template>
  <div class="app container" id="home">
    <div class="row form-group">
      <div class="col-md-3">
        <datepicker v-model="dateFrom" @closed="showDate()" :format="customFormatter"></datepicker>
      </div>
      <div class="col-md-3">
        <datepicker v-model="dateTo" @closed="showDate()" :format="customFormatter"></datepicker>
      </div>
    </div>
    <div class="row col-md-4 form-group">Search by title:</div>
    <div class="row col-md-4 form-group">
      <input class="form-control" v-model="search" type="text" name="text" style="width:400px;">
    </div>
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(taining , index) in tainingsList"
          v-if="taining.doc.title.toLowerCase().includes(search.toLowerCase())"
          @click="getSchedules(taining.doc.title)"
        >
          <th scope="row">{{ index + 1 }}</th>
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
          console.log("seucces!!");
          console.log(training.rows);
          me.tainingsList = training.rows;
        },
        function(error) {
          console.log("not training found");
        }
      );
    },

    getSchedules(training) {
      let me = this;
      me.$root.schedules().trainingSchedules(training, function(schedules){console.log(schedules)} );
    }
  }
};
</script>


