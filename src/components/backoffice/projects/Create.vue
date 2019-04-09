<template>

    <div id="project-create">
        <input v-model="id"
               type="text"
               name="id"
               value="{{ id }}" disabled>

        <input v-model="name"
               type="text"
               name="name"
               value="{{ name }}"
               placeholder="Insert project name...">

        <input v-model="title"
               type="text"
               name="title"
               value="{{ title }}"
               placeholder="Insert project title...">

        <input v-model="description"
               type="text"
               name="description"
               value="{{ description }}"
               placeholder="Insert description...">

    </div>

</template>

<script type="text/javascript">
    import Database from 'database';

    export default {
        el: 'project-create',
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
            create(project) {
                this.project.name        = project.name;
                this.project.title       = project.title;
                this.project.description = project.description;

                // push to database
                var _db = db('project').connect();

                try {
                    _db.database().create(this.project);
                } catch (e) {
                    throw e;
                }
            },

        }
    }


</script>