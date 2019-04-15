<template>
    <div id="projects">
        <h1>Projects</h1>
        <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col"># ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects" :data-project-id="project.id">
                <th :data-id="project.id" scope="row">{{ project.id }}</th>
                <td>{{ project.doc.name }}</td>
                <td>{{ project.doc.description }}</td>
                <td>
                    <button :data-id="project.id"
                            type="button"
                            class="btn btn-primary"
                            @click="showProject(project)">&nbsp;&nbsp;show&nbsp;&nbsp;</button>
                    <button :data-id="project.id"
                            type="button"
                            class="btn btn-warning"
                            @click="updateProject(project)">&nbsp;update&nbsp;</button>
                    <button :data-id="project.id"
                            type="button"
                            class="btn btn-danger"
                            @click="deleteProject(project)">delete</button>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'ListProject',
        data() {
            return {
                projects: []
            }
        },
        created() {
            this.list();
        },
        methods : {
            list() {
                // push from database
                let me = this;

                me.$root.projects().getProjects(function(response) {
                    me.projects = response.rows;
                }, function(error) {
                    console.log(error);
                });
            },
            deleteProject(project) {
                let me = this;

                var el = document.querySelectorAll("[data-project-id='" + project.id + "']");

                console.log(project);

                this.projects.filter(function(item) { return item.id !== project.id });

                me.$root.projects().deleteProject(project.doc.name, function (res) {
                    console.log('res', res);

                    el[0].remove();
                }, function (error) {
                    console.log(error);
                });
            },
            showProject(project) {
                this.$router.push({name : 'ShowProject', params: {id : project.id}});
            },
            updateProject(project) {
                this.$router.push({name : 'UpdateProject', params: {id : project.id}});
            }
        }
    }


</script>