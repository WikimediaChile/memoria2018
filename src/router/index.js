import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Educacion from '@/components/Educacion'
import Difusion from '@/components/Difusion'
import Gestion from '@/components/Gestion'
import Defecto from '@/components/Defecto'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/educacion',
      name: 'Educacion',
      component: Educacion
    },
    {
      path: '/difusion',
      name: 'Difusion',
      component: Difusion
    },
    {
      path: '/gestion',
      name: 'Gestion',
      component: Gestion
    },
    {
      path: '*',
      name: "Defecto",
      component: Defecto
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash == '#top' || to.hash.length == 0) {
      return {
        x: 0,
        y: 0
      }
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Defecto') {
    next('/');
  }
  next();
});

export default router
