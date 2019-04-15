<template>
    <div id="tasks">
        <h1>Projects</h1>
        <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col"># ID</th>
                <th scope="col">Project ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Is Assigned</th>
                <th scope="col">Is Completed</th>
                <th scope="col">Team ID</th>
                <th scope="col">Points</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks" :data-task-id="task.id">
                <th :data-id="task.id" scope="row">{{ task.id }}</th>
                <td>{{ task.doc.name }}</td>
                <td>{{ task.doc.description }}</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>
                    <button :data-id="task.id"
                            type="button"
                            class="btn btn-primary"
                            @click="showProject(task)">&nbsp;&nbsp;show&nbsp;&nbsp;</button>
                    <button :data-id="task.id"
                            type="button"
                            class="btn btn-warning"
                            @click="updateProject(task)">&nbsp;update&nbsp;</button>
                    <button :data-id="task.id"
                            type="button"
                            class="btn btn-danger"
                            @click="deleteProject(task)">delete</button>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'ListTask',
        data() {
            return {
                tasks: []
            }
        },
        created() {
            this.list();
        },
        methods : {
            list() {
                // push from database
                let me = this;

                me.$root.tasks().getTasks(function(response) {
                    console.log(response);
                    me.tasks = response.rows;
                }, function(error) {
                    console.log(error);
                });
            },
            /*
            deleteProject(task) {
                let me = this;

                var el = document.querySelectorAll("[data-task-id='" + task.id + "']");

                console.log(task);

                this.tasks.filter(function(item) { return item.id !== task.id });

                me.$root.tasks().deleteProject(task.doc.name, function (res) {
                    console.log('res', res);

                    el[0].remove();
                }, function (error) {
                    console.log(error);
                });
            },
            showProject(task) {
                this.$router.push({name : 'ShowProject', params: {id : task.id}});
            },
            updateProject(task) {
                this.$router.push({name : 'UpdateProject', params: {id : task.id}});
            }
            */
        }
    }


</script>