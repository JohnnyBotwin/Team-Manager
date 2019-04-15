<template>
  <div id="create-teams">
    <h2 class="title">Create new team</h2>
    <label for="team-title">Name</label>
    <input type="text" name="team-title" id="team-title" v-model="team.name">
    <label for="team-points">Points</label>
    <input type="text" name="team-points" id="team-points" v-model="team.points" disabled>
    <button @click="createTeam">Create team</button>
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "BOCreateteam",
  data() {
    return {
      team: { points: 0 },
      errors: []
    };
  },
  created() {},
  beforeMount: function() {},
  methods: {
    createTeam() {
      if (this.checkForm()) {
        let me = this;
        me.$root.teams().createTeam(
          {
            name: me.team.name,
            points: me.team.points
          },
          function(response) {
            console.log(response);
            me.$router.push("/backoffice/team/list");
          },
          function(error) {
            console.log(error);
          }
        );
      }
    },
    checkForm() {
      if (this.team.name) {
        return true;
      }
      if (!this.team.name) {
        this.errors.push("Name required.");
        return false;
      }
    }
  }
};
</script>


