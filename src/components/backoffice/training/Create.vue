<template>
  <div class="create-training">
    <h2 class="title">Create Trainings</h2>
    <label for="project-title">Title</label>
    <input type="text" name="project-title" id="project-title" v-model="title">
    <label for="project-description">Description</label>
    <input type="text" name="project-description" id="project-description" v-model="description">
    <button @click="createTraining">Create Training</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BOCreateTraining",

  data() {
    return {
      title: "",
      description: ""
    };
  },
  created() {},

  methods: {
    createTraining() {
      let me = this;

      me.$root.trainings().createTraining(
        {
          name: me.title,
          description: me.description
        },
        function(response) {
          console.log(response);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
</script>


