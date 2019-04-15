<template>

    <div id="task-create">
        <input v-model="task.id"
               type="text"
               name="id"
               disabled>

        <input v-model="task.name"
               type="text"
               name="name"
               placeholder="Insert name...">

        <input v-model="task.description"
               type="text"
               name="description"
               placeholder="Insert description...">

        <button @click="create">Create Task</button>
    </div>

</template>

<script type="text/javascript">
    export default {
        name: 'CreateTask',
        props: ['project'],
        data() {
            return {
                task: {
                    id: null,
                    name: '',
                    description: '',
                    project_id: null,
                }
            }
        },
        created() {
            this.task.project_id = this.project.title;

            console.log(this.task);
        },
        methods : {
            create() {
                let me = this;

                me.$root.tasks().createTask(
                    {
                        name: me.task.name,
                        description: me.task.description,
                        project_id: me.project.title
                    },
                    function(response) {
                        console.log(response);

                    },
                    function(error) {
                        console.log(me);
                        console.log(error);
                    }
                );

            }
        }
    }

</script>