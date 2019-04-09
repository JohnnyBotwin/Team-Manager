<template>
  <div class="list-trainings">
    <h2 class="title">List Trainings</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="training in trainings" v-bind:key="training.id">
          <td>{{training.doc.title}}</td>
          <td>{{training.doc.description}}</td>
          <td><a href="#" @click="deleteTraining(training.doc.title)">X</a></td>
        </tr>
      </tbody>
    </table>
    <button @click="createTraining">Create New Training</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BOListTraining",

  data() {
    return {
      trainings: []
    };
  },
  mounted () {
    this.listTrainings();
  },
  created() {},

  methods: {
    listTrainings() {
      let me = this;

      me.$root.trainings().getTrainings(
        function(trainings) {
          me.trainings = trainings.rows;
        },
        function(error) {
          console.log(error);
        }
      );
    },
    deleteTraining(title) {
      let me = this;

      me.$root.trainings().deleteTraining(title,
        function(response) {
          console.log(response)
          me.listTrainings();
        },
        function(error) {
          console.log(error);
        }
      );
    },
    createTraining() {
      this.$router.push('/backoffice/training/create')
    }
  }
};
</script>


