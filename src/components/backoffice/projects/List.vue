<template>
    <div id="projects">
        <h1>Projects</h1>
        <div v-for="project in projects">
            <button :data-id="project.id" @click="showProject">{{ project.doc.name }}</button>
            <p class="" style="display: none;">{{ project.doc.description }}</p>
        </div>

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
            showProject(e) {
                debugger;
            },
            list() {
                // push from database
                let me = this;

                me.$root.projects().getProjects(function(response) {
                    me.projects = response.rows;

                    console.log(projects);
                }, function(error) {
                    console.log(error);
                });
            },

        }
    }


</script>