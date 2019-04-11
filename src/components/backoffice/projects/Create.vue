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
                // JMORAIS: at some point youll need to start adding more variables in your data... so, youll need to start wrapping your properties into objects. example: return { user : { id: null, name: '', ... }, loaders: { checkingUsername: false, }, ... }
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
                        console.log(me);
                        console.log(response);
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