<template>

    <div id="project-create">
        <input v-model="id"
               type="text"
               name="id"
               disabled>

        <input v-model="name"
               type="text"
               name="name"
               placeholder="Insert name...">

        <input v-model="title"
               type="text"
               name="title"
               placeholder="Insert title...">

        <input v-model="description"
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
                id: null,
                name: '',
                title: '',
                description: ''
            }
        },
        created() {

        },
        methods : {
            create() {
                let me = this;

                me.$root.projects().createProject(
                    {
                        name: me.name,
                        title: me.title,
                        description: me.description
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