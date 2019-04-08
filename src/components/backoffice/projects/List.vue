<template>

    <div id="project-list">


    </div>

</template>

<script type="text/javascript">
    export default {
        el: 'project-list',
        name: 'Project',
        data() {
            return {
                project: {
                    id: null,
                    name: '',
                    title: '',
                    description: ''
                }
            }
        },
        created() {



        },

        methods : {
            list() {

                // push to database
                let me = this;

                me.$root.projects().getProjects(function(project) {
                    console.log(project);
                }, function(error) {
                    console.log(error);
                });
            },

        }
    }


</script>