<template>
    <div id="">
        <h1>Projects</h1>

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

                me.$root.projects().getProjects(function(projects) {
                    me.projects = projects;

                    console.log(projects);
                }, function(error) {
                    console.log(error);
                });
            },

        }
    }


</script>