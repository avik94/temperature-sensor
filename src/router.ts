import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Details from './views/Details/Details.vue';
import Statistics from './views/Statistics/Statistics.vue';
import User from './views/Users/User.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:name/:id',
      name: 'home',
      component: Statistics,
    },
    {
      path: '/:companyId',
      name: 'home',
      component: Statistics,
    },
    {
      path: '/satatistics/all-data/data-table',
      name: 'details',
      component: Details,
    },
    {
      path: '/satatistic/all-data/user-data',
      name: 'users',
      component: User,
    },
  ],
});
