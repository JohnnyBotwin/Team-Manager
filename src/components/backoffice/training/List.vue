<template>
  <div class="list-trainings">
    <h2 class="title">List Trainings</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>description</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="training in trainings" v-bind:key="training.id">
          <td>{{training.doc.title}}</td>
          <td>{{training.doc.description}}</td>
          <td>
            <button @click="trainingToUpdate = copyObject(training.doc)">Update this training</button>
          </td>
          <td>
            <button @click="deleteTraining(training.doc.title)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    <updateTraining @updated="updated" v-if="trainingToUpdate" v-bind:trainingToUpdate="trainingToUpdate"></updateTraining>
    <a href="#" @click.prevent.stop="createTraining">Create New Training</a>
  </div>
</template>

<script type="text/javascript">
import updateTraining from "./Create";
export default {
  name: "BOListTraining",
  components: {
    updateTraining
  },
  data() {
    return {
      trainings: [],
      trainingToUpdate: null
    };
  },
  mounted() {
    this.listTrainings();
  },
  created() {},

  methods: {
    updated(training) {
      this.listTrainings();
      this.trainingToUpdate = null;
    },
    copyObject(src) {
      let target = {};
      for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
          target[prop] = src[prop];
        }
      }
      return target;
    },
    UpdateTraining() {},
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

      me.$root.trainings().deleteTraining(
        title,
        function(response) {
          console.log(response);
          me.listTrainings();
        },
        function(error) {
          console.log(error);
        }
      );
    },
    createTraining() {
      this.$router.push("/backoffice/training/create");
    }
  }
};
</script>


<style>
</style>
