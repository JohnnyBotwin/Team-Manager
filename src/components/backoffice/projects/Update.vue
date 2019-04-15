<template>
    <div id="projects">
        <h1>Project # {{ project._id }}</h1>

        <input name="name" v-model="project.name">
        <input name="name" v-model="project.description">
        <button @click="update" class="btn btn-primary">Submit</button>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'UpdateProject',
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
            },
            update() {
                console.log(this.project);

                let me = this;

                me.$root.projects().update(me.project, function (res) {
                    console.log(res);
                }, function (error) {
                    console.log(error);
                });
            }
        }
    }


</script>