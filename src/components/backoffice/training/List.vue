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
          <td>{{training.title}}</td>
          <td>{{training.description}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <button @click="createTraining">Create Training</button> -->
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
          me.trainings = me.getTrainingsFromPouchDBRows(trainings);
        },
        function(error) {
          console.log(error);
        }
      );
    },
    getTrainingsFromPouchDBRows (trainings){
      return trainings;
      // trainings.rows.forEach(element => {
        
      // });
    }
  }
};
</script>


