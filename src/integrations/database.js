/* PouchDB Integration */

// database global methods
const database = {

	name: 'Database',

	data() {

		return {

			sources : {

				// remote : 'http://127.0.0.1:5984',
				remote : 'http://188.166.26.132:8976',
				local  : null,
			},
			dbconn : {
				remote : null,
				local  : null,
			}

		};

	},

	created() {

		let me = this;

	},


	updated() {

		let me = this;

	},


	methods: {

		db(namespace) {

			let me = this;

			me.$root.sources.local = namespace;

			return {

				connect() {

					me.$root.dbconn.remote = new PouchDB(me.sources.remote + '/' + namespace);

					// me.$root.dbconn.local = new PouchDB(namespace);

					// me.$root.database().sync();

					return {

						// local  : me.$root.dbconn.local,
						remote : me.$root.dbconn.remote

					};

				},

				disconnect() {

					me.$root.dbconn.remote.close().then(function () {

						me.dbconn.remote = null;

					});

					/* me.$root.dbconn.local.close().then(function () {

						me.dbconn.local = null;

						me.sources.local = null;

					}); */

				},

			};

		},

		database() {

			let me = this;


			return {

				sync() {

					// PouchDB.sync(me.$root.sources.local, me.$root.sources.remote + '/' + me.$root.sources.local);

				},

				get(docId, respCallback, failCallback) {

					me.$root.dbconn.remote.get(docId)

							.then(function(doc) {

								me.$root.database().sync();

								respCallback(doc);

							}).catch(failCallback);

				},

				find(obj, respCallback, failCallback) {

					me.$root.dbconn.remote.find(obj)

									.then(respCallback)

									.catch(failCallback);


				},

				create(obj, respCallback, failCallback) {

					me.$root.dbconn.remote.put(obj)
							
							.then(function(response) {

								me.$root.database().sync();

								respCallback(response);

							}).catch(failCallback);



				},

				update(obj, respCallback, failCallback) {

					me.$root.dbconn.remote.get(obj._id)

							.then(function(doc) {

								Object.assign(obj, {
									_rev: doc._rev,
								});

								return me.$root.dbconn.remote.put(obj);

							}).then(function(response) {

								me.$root.database().sync();

								respCallback(response);

							}).catch(failCallback);


				},

				getAll(respCallback, failCallback) {

					me.$root.dbconn.remote.allDocs({

						include_docs: true,

					})

						.then(respCallback)
						
						.catch(failCallback);

				},

				delete(docId, respCallback, failCallback) {

					me.$root.dbconn.remote.get(docId)

									.then(function(doc) {

										return me.$root.dbconn.remote.remove(doc);

									}).then(function(response) {

										me.$root.database().sync();

										respCallback(response);

									}).catch(failCallback);				

				} 

			};

		}

	}
};


// user methods
const users = {

	methods: {

		users() {

			let me = this;

			me.$root.db('users').connect();

			return {

				createUser(user, respCallback, failCallback) {

					if(typeof user.email === 'undefined') {

						return failCallback('Error - Invalid email address!');

					}

					Object.assign(user, {
						_id : user.email,
					});

					me.$root.database().create(user, respCallback, failCallback);

				},

				getUsers(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getUser(email, respCallback, failCallback) {

					me.$root.database().get(email, respCallback, failCallback);

				},

				deleteUser(email, respCallback, failCallback) {

					me.$root.database().delete(email, respCallback, failCallback);

				}

			};

		}

	}


};

// teams methods
const teams = {

	methods: {

		teams() {

			let me = this;

			me.$root.db('teams').connect();

			return {

				createTeam(team, respCallback, failCallback) {

					if(typeof team.name === 'undefined') {

						return failCallback('Error - Invalid name identifier!');

					}

					Object.assign(team, {
						_id : md5(team.name),
					});

					me.$root.database().create(team, respCallback, failCallback);

				},

				getTeams(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getTeam(name, respCallback, failCallback) {

					me.$root.database().get(md5(name), respCallback, failCallback);

				},

				deleteTeam(name, respCallback, failCallback) {

					me.$root.database().delete(md5(name), respCallback, failCallback);

				}

			};

		}

	}


};

// user teams methods
const userTeams = {

	methods: {

		userTeams() {

			let me = this;

			me.$root.db('user_teams').connect();

			return {

				assign(email, teamName, respCallback, failCallback) {

					let relation = {
						_id : md5(email + teamName),
						user: email,
						team: md5(teamName)
					};

					me.$root.database().create(relation, respCallback, failCallback);

				},

				unassign(email, teamName, respCallback, failCallback) {

					let _id = md5(email + teamName);

					me.$root.database().delete(_id, respCallback, failCallback);

				},

				userTeams(email, respCallback, failCallback) {

					console.log(email);

					me.$root.database().find({
						selector: { user : email },
					}, respCallback, failCallback);

				},

			};

		}

	}

};

// training methods
const trainings = {

	methods: {

		trainings() {

			let me = this;

			me.$root.db('trainings').connect();

			return {

				createTraining(training, respCallback, failCallback) {

					if(typeof training.title === 'undefined') {

						return failCallback('Error - Invalid title address!');

					}

					Object.assign(training, {
						_id : md5(training.title),
					});

					me.$root.database().create(training, respCallback, failCallback);

				},


				updateTraining(training, respCallback, failCallback) {

					if(typeof training.title === 'undefined') {

						return failCallback('Error - Invalid title address!');

					}

					Object.assign(training, {
						_id : md5(training.title),
					});

					me.$root.database().update(training, respCallback, failCallback);

				},


				getTrainings(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getTraining(title, respCallback, failCallback) {

					me.$root.database().get(md5(title), respCallback, failCallback);

				},

				deleteTraining(title, respCallback, failCallback) {

					me.$root.database().delete(md5(title), respCallback, failCallback);

				},

			};

		}

	}


};

const schedules = {

	methods: {

		schedules() {

			let me = this;

			me.$root.db('schedules').connect();

			return {

				createSchedule(schedule, respCallback, failCallback) {

					if(typeof schedule.training === 'undefined'
						|| typeof schedule.scheduled_at === 'undefined'
						) {

						return failCallback('Error - Invalid training and/or scheduled_at keys address!');

					}

					Object.assign(schedule, {
						_id : md5(schedule.training + scehdule.scheduled_at),
					});

					schedule.training = md5(schedule.training);

					me.$root.database().create(schedule, respCallback, failCallback);

				},

				getSchedules(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getSchedule(training, scheduled_at, respCallback, failCallback) {

					me.$root.database().get(md5(training + scheduled_at), respCallback, failCallback);

				},

				deleteSchedule(training, scheduled_at, respCallback, failCallback) {

					me.$root.database().delete(md5(training + scheduled_at), respCallback, failCallback);

				},

				trainingSchedules(training) {

					me.$root.database().find({
						selector: { training : md5(training) },
					});

				},

			};

		}

	}


};


const projects = {

	methods: {

		projects() {

			let me = this;

			me.$root.db('projects').connect();

			return {

				createProject(project, respCallback, failCallback) {

					if(typeof project.name === 'undefined') {

						return failCallback('Error - Invalid name keys!');

					}

					Object.assign(project, {
						_id : md5(project.name),
					});

					me.$root.database().create(project, respCallback, failCallback);

				},

				getProjects(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getProject(name, respCallback, failCallback) {

					me.$root.database().get(md5(name), respCallback, failCallback);

				},
                get(id, respCallback, failCallback) {
                    me.$root.database().get(id, respCallback, failCallback);
                },
                update(project, respCallback, failCallback) {
                    Object.assign(project, {
                        _id : project._id
                    });

                    me.$root.database().update(project, respCallback, failCallback);
                },
				deleteProject(name, respCallback, failCallback) {

					me.$root.database().delete(md5(name), respCallback, failCallback);

				},

			};

		}

	}


};


const roles = {

	methods: {

		roles() {

			let me = this;

			me.$root.db('roles').connect();

			return {

				createRole(role, respCallback, failCallback) {

					if(typeof role.name === 'undefined') {

						return failCallback('Error - Invalid name keys!');

					}

					Object.assign(role, {
						_id : md5(role.name),
					});

					me.$root.database().create(role, respCallback, failCallback);

				},

				getRoles(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getRole(name, respCallback, failCallback) {

					me.$root.database().get(md5(name), respCallback, failCallback);

				},

				deleteRole(name, respCallback, failCallback) {

					me.$root.database().delete(md5(name), respCallback, failCallback);

				}

			};

		}

	}


};



const tasks = {

	methods: {

		tasks() {

			let me = this;

			me.$root.db('tasks').connect();

			return {

				createTask(task, respCallback, failCallback) {

					if(typeof task.name === 'undefined'
						|| typeof task.project === 'undefinde'
						) {

						return failCallback('Error - Invalid name or project keys!');

					}

					Object.assign(task, {
						_id : md5(task.name + task.project),
					});

					task.project = md5(task.project);

					me.$root.database().create(task, respCallback, failCallback);

				},

				getTasks(respCallback, failCallback) {

					me.$root.database().getAll(respCallback, failCallback);

				},

				getTask(task, project, respCallback, failCallback) {

					me.$root.database().get(md5(task + project), respCallback, failCallback);

				},

				deleteTask(task, project, respCallback, failCallback) {

					me.$root.database().delete(md5(task + project), respCallback, failCallback);

				},

				projectTasks(project) {

					me.$root.database().find({
						selector: { project : md5(project) },
					});

				},


			};

		}

	}


};



const userRoles = {

	methods: {

		userRoles() {

			let me = this;

			me.$root.db('user_roles').connect();

			return {

				assign(email, roleName, respCallback, failCallback) {

					let relation = {
						_id : md5(email + roleName),
						user: email,
						role: md5(roleName)
					};

					me.$root.database().create(relation, respCallback, failCallback);

				},

				unassign(email, roleName, respCallback, failCallback) {

					let _id = md5(email + roleName);

					me.$root.database().delete(_id, respCallback, failCallback);

				},

				userRoles(email, respCallback, failCallback) {

					me.$root.database().find({
						selector: { user : email },
					}, respCallback, failCallback);

				},

			};

		}

	}

};


const projectRoles = {

	methods: {

		projectRoles() {

			let me = this;

			me.$root.db('project_roles').connect();

			return {

				assign(projectName, roleName, respCallback, failCallback) {

					let relation = {
						_id : md5(projectName + roleName),
						project: md5(projectName),
						role: md5(roleName)
					};

					me.$root.database().create(relation, respCallback, failCallback);

				},

				unassign(projectName, roleName, respCallback, failCallback) {

					let _id = md5(projectName + roleName);

					me.$root.database().delete(_id, respCallback, failCallback);

				},

				projectRoles(projectName, respCallback, failCallback) {

					me.$root.database().find({
						selector: { project : md5(projectName) },
					}, respCallback, failCallback);

				},

			};

		}

	}

};


const teamTraining = {

	methods: {

		teamTraining() {

			let me = this;

			me.$root.db('team_training').connect();

			return {

				assign(teamName, training, respCallback, failCallback) {

					let relation = {
						_id : md5(teamName + training),
						team: md5(teamName),
						training: md5(training)
					};

					me.$root.database().create(relation, respCallback, failCallback);

				},

				unassign(teamName, training, respCallback, failCallback) {

					let _id = md5(teamName + training);

					me.$root.database().delete(_id, respCallback, failCallback);

				},

				teamTraining(teamName, respCallback, failCallback) {

					me.$root.database().find({
						selector: { team : md5(teamName) },
					}, respCallback, failCallback);

				},

			};

		}

	}

};




export {
	database,
	users,
	teams,
	userTeams,
	trainings,
	schedules,
	projects,
	roles,
	tasks,
	userRoles,
	projectRoles,
	teamTraining,
}