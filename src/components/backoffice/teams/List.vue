<template>
  <div id="teams-list">
    <table>
      <thead>
        <th scope="col"># ID</th>
        <th scope="col">Name</th>
        <th scope="col">Points</th>
      </thead>
      <tbody>
        <tr v-for="team in teams" v-bind:key="team.id">
          <td>{{ team.doc.name }}</td>
          <td>{{ team.doc.points }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="showTeam(team)"
            >&nbsp;&nbsp;show&nbsp;&nbsp;</button>
            <button
              type="button"
              class="btn btn-warning"
              @click="updateTeam(team)"
            >&nbsp;update&nbsp;</button>
            <button type="button" class="btn btn-danger" @click="deleteTeam(team)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListTeams",
  data() {
    return { teams: [] };
  },

  created() {
    this.listTeams();
  },
  methods: {
    listTeams() {
      let me = this;

      me.$root.teams().getTeams(
        function(response) {
          me.teams = response.rows;

          console.log(me.teams);
        },
        function(error) {
          console.log(error);
        }
      );
    },
    showTeam(team) {
      this.$router.push({ name: "ShowTeam", params: { id: team.id } });
    },
    updateTeam(team) {
      this.$router.push({ name: "UpdateTeam", params: { id: team.id } });
    }
  }
};
</script>
