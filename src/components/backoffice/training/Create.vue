<template>
  <div class="create-training">
    <h2 class="title">{{createOrUpdateLabel}} Training</h2>
    <label for="project-title">Title</label>
    <input type="text" name="project-title" id="project-title" v-model="training.title">
    <label for="project-description">Description</label>
    <input
      type="text"
      name="project-description"
      id="project-description"
      v-model="training.description"
    >
    <button @click="createOrUpdateTraining">{{createOrUpdateLabel}} Training</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BOCreateTraining",
  props: { trainingToUpdate: Object },
  data() {
    return {
      training: {},
      createOrUpdateLabel: "Create"
    };
  },
  created() {},
  mounted() {
    this.training = this.trainingToUpdate || {};
    this.createOrUpdateLabel = this.trainingToUpdate ? "Update" : "Create";
  },
  watch:{
    trainingToUpdate: function (newValue, oldValue) {
      this.training = newValue;
    }
  },
  methods: {
    createOrUpdateTraining() {
      let me = this;
      if (this.trainingToUpdate) {
        me.$root.trainings().updateTraining(
          {
            title: me.trainingToUpdate.title,
            description: me.trainingToUpdate.description
          },
          function(response) {
            console.log(response);
            me.$emit('updated', me.trainingToUpdate)
          },
          function(error) {
            console.log(error);
          }
        );
      } else {
        me.$root.trainings().createTraining(
          {
            title: me.training.title,
            description: me.training.description
          },
          function(response) {
            console.log(response);
            me.$router.push("/backoffice/training/list");
          },
          function(error) {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>


