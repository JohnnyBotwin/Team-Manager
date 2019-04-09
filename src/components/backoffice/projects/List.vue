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
                project: {
                    id: null,
                    name: '',
                    title: '',
                    description: ''
                }
            }
        },
        created() {
            this.list();


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