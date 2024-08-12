import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// route-level code splitting
const AboutView = () => import('../views/About.vue');
const ResumeView = () => import('../views/Resume.vue')
const GameView = () => import('../views/GameProjects.vue')
const ContactView = () => import('../views/Contact.vue')
const E404View = () => import('../views/404.vue')

export function createRouter(){
  return _createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'Root',
        component: GameView
      },
      {
        path: '/about-me',
        name: 'About',
        component: AboutView
      },
      {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactView
      },
      {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: E404View
      }
    ]
  })
}
