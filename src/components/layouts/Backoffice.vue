<template>
  <div id="backoffice">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Backoffice</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/backoffice">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/backoffice/training/list">List Training</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/backoffice/training/create">Create Training</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/backoffice/users/list">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/backoffice/project/list">List Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/backoffice/team/list">List Teams</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Backoffice"
};
</script>