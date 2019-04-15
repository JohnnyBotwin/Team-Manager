<template>

    <div id="project-create">
        <input v-model="project.id"
               type="text"
               name="id"
               disabled>

        <input v-model="project.name"
               type="text"
               name="name"
               placeholder="Insert name...">

        <input v-model="project.title"
               type="text"
               name="title"
               placeholder="Insert title...">

        <input v-model="project.description"
               type="text"
               name="description"
               placeholder="Insert description...">

        <button @click="create">Create Project</button>

    </div>

</template>

<script type="text/javascript">
    export default {
        name: 'CreateProject',
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
            create() {
                let me = this;

                me.$root.projects().createProject(
                    {
                        name: me.project.name,
                        title: me.project.title,
                        description: me.project.description
                    },
                    function(response) {
                        console.log(response);

                        me.$router.push({name : 'ShowProject', params: {id : response.id}});
                    },
                    function(error) {
                        console.log(me);
                        console.log(error);
                    }
                );
            },
        }
    }

</script>