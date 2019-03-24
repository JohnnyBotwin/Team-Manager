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
  	userTeams
} from './integrations/database';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {

  },
  mixins : [
  	database, 
  	users,
  	teams,
  	userTeams
  ]
});
