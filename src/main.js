/**
 * Welcome to Leveling up on VueJS,
 * Author(s): João Morais
 * Trainees: { Team _ : [ ___, ___, ___ ], 
 			   Team _ : [ ___, ___, ___ ], 
 			 }
 * 
 * Team Objectives:
 * Team _: Develop user application.
 * Team _: Develop backoffice.
 * In order to complete those tasks, both teams
 * need to cooperate with each other.
 * You'll also need to know that a first
 * level integration with PouchDB is already developed!
 * Read the integrations/database.js and get acquainted
 * with all the available methods. You can also read the 
 * components/Example.vue to see how to access the 
 * public database.
 * 
 * Any question or any advice that you require, 
 * feel free to ask. Don't get stucked.
 * 
 * Date: 8th, 9th, 11th and 15th of Abril, 2019.
 * Time: 19h - 21h
 */


// Window Scopes
import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';

window.PouchDB = PouchDB;
window.PouchDB.plugin(PouchdbFind);

window.md5 = require('md5');

// Vue and foreign components
import Vue from 'vue';
import router from './router';

// Main layout files
import App from './components/layouts/App';
import Backoffice from './components/layouts/Backoffice';


// Mixins and helpers
import {
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
	teamTraining
} from './integrations/database';

// Example Mixin:
// import { example } from './mixins/example';


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mixins : [
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
  ],
});
