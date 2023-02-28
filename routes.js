import AboutPage, { AboutTeam, AboutServices } from './pages/AboutPage.js'

import HomePage from './pages/HomePage.js'
import BookAdd from './pages/BookAdd.js'
import BookIndex from './pages/BookIndex.js'
import BookDetails from './pages/BookDetails.js'
import BookEdit from './pages/BookEdit.js'

const { createRouter, createWebHashHistory } = VueRouter
const options = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage,

      children: [
        {
          path: 'team',
          component: AboutTeam,
        },
        {
          path: 'services',
          component: AboutServices,
        },
      ],
    },
    {
      path: '/book',
      component: BookIndex,
    },
    {
      path: '/book/:bookId',
      component: BookDetails,
    },
    {
      path: '/book/edit/:bookId?',
      component: BookEdit,
    },
    {
      path: '/book/bookAdd',
      component: BookAdd,
    },
    // Last fallback if no route was matched:
    {
      path: '/:catchAll(.*)',
      component: AboutPage,
    },
  ],
}
export const router = createRouter(options)
