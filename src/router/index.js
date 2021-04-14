import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import TodosIssues from '../views/TodosIssues.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: TodosIssues
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
