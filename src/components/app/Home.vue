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
          class="training-item"
          v-for="(training , index) in tainingsList"
          v-if="training.doc.title.toLowerCase().includes(search.toLowerCase())"
          @click="getSchedules(training)"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ training.doc.title}}</td>
          <td>{{ training.doc.description }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row col-md-12">Schedules</div>
    <div class="row col-md-12" v-for="(schedule, index) in scheduleList">
      <div class="col-md-4">{{schedule.id}}</div>
      <div class="col-md-4">{{schedule.scheduled_at}}</div>
      <div class="col-md-4">{{schedule.duration}}</div>
    </div>
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


