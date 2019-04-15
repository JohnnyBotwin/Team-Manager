<template>
  <div class="app container" id="home">
    <datepicker format="dd/MM/yyyy"></datepicker>
    <p>Search by title:</p>
    <input
      type="text"
      name="text"
      class="form-control"
      v-model="searchTitleText"
      @input="onSearchTitleTextChange(searchTitleText)"
      style="width:400px;"
    >
    <div class="form-group">
      <div class="row training-header">
        <div class="col-md-4">#</div>
        <div class="col-md-4">Title</div>
        <div class="col-md-4">Description</div>
      </div>
      <div>
        <div v-for="(taining, index) in filteredTrainingsList" :key="index">
          <div class="row training-item">
            <div class="col-md-2">{{ index }}</div>
            <div class="col-md-4">{{ taining.doc.title}}</div>
            <div class="col-md-2">{{ taining.doc.description }}</div>
            <div class="col-md-4">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#scheduleModal"
                @click="getUserTeam(taining)"
              >Join here</button>
              <button class="btn btn-secondary" @click="getSchedules(taining)">View schedules</button>
            </div>
          </div>
          <div
            class="row schedules"
            v-for="(schedule, index) in scheduleList"
            v-if="scheduleList.length > 0 && taining.id === schedule.training_id"
          >
            <div class="col-md-6">{{ schedule.scheduled_at }}</div>
            <div class="col-md-6">{{ schedule.duration}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
    </div>

    <div class="modal" id="scheduleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button type="button" class="btn btn-primary">Team A</button>
            <button type="button" class="btn btn-primary">Team B</button>
            <button type="button" class="btn btn-primary">Create Team</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
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
      dateTo: "",
      teamList: [],
      userEmail: "",
      canCreateTeam: true,
      teams: [],
      trainingTeams: []
    };
  },
  computed: {
    filteredTrainingsList() {
      const search = this.searchTitleText.toLowerCase().trim();

      if (!search) {
        return this.tainingsList;
      }

      return this.tainingsList.filter(
        l => l.doc.title.toLowerCase().indexOf(search) > -1
      );
    }
  },
  created() {
    this.listTrainings();
    this.userEmail = this.$route.params.userEmail;
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
        training => {
          me.tainingsList = training.rows;
        },
        error => {
          console.log("No trainings found.");
        }
      );
    },

    getSchedules(training) {
      const me = this;
      if (me.scheduleList.length > 0) me.scheduleList = [];
      else {
        me.$root
          .schedules()
          .trainingSchedules(training.doc.title, function(schedules) {
            me.scheduleList = schedules.docs;
            console.log(schedules);
          });
      }
    },

    getUserTeam(training) {
      const me = this;
      me.$root.userTeams().userTeams(me.userEmail, function(teams) {
        console.log("teams");
        console.log(teams);
        me.teams = teams.docs;
        me.$root
          .trainingTeams()
          .trainingTeam(training.doc.title, function(trainingTeams) {
            me.trainingTeams = trainingTeams;
            console.log("trainingteams");
            console.log(trainingTeams);
            if (trainingTeams.length === 2) me.canCreateTeam = false;
            else me.canCreateTeam = true;
          });
      });
    }
  }
};
</script>

<style>
@import "../../assets/styles/home.css";
</style>


