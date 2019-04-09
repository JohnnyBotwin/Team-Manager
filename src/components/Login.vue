<template>
	
	<div class="app" id="login">

		<input v-model='user.name' type='textfield' name='username'>
		<input v-model='user.password' type='password' name='password'>
		<input type='submit'>  


	</div>

</template>

<script type="text/javascript">

export default {

	name : 'Login',

	data() {
		return {
			user: {
				name: '',
				password: ''
			}
		}
	},

	created() {
		const me = this;
	},

	mounted() {

	},

	methods : {
		login() {

		}
	},

}

</script>


