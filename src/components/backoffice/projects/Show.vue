<template>
    <div id="projects">
        <h1>Project # {{ project._id }}</h1>

        <h4>Name: {{ project.name }}</h4>
        <h4>Description: {{ project.description }}</h4>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'ShowProject',
        data() {
            return {
                project: {}
            }
        },
        created() {
            this.show();
        },
        methods : {
            show() {
                let me = this;

                var id = me.$route.params.id;

                me.$root.projects().get(id, function (res) {
                    console.log(res);

                    me.project = res;
                }, function (error) {
                    console.log(error);
                });
            }
        }
    }


</script>