import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import car from '../components/project/car'
import center from '../components/project/center'
import EmptyCar from '../components/project/EmptyCar'
import forget from '../components/project/forget'
import Hrdetails from '../components/project/Hrdetails'
import login from '../components/project/login'
import LoginPhone from '../components/project/LoginPhone'
import module from '../components/project/module'
import MotorPartsTown from '../components/project/MotorPartsTown'
import MotorPartsTownDetails from '../components/project/MotorPartsTownDetails'
import News from '../components/project/News'
import NewsDetails from '../components/project/NewsDetails'
import OrderDetails from '../components/project/OrderDetails'
import Pay from '../components/project/Pay'
import ProductManagement from '../components/project/ProductManagement'
import Project from '../components/project/Project'
import ProjectDetails from '../components/project/ProjectDetails'
import Recruitment from '../components/project/Recruitment'
import RecruitmentDetails from '../components/project/RecruitmentDetails'
import Rent from '../components/project/Rent'
import RentDetails from '../components/project/RentDetails'
import Serve from '../components/project/Serve'
import ServeDetails from '../components/project/ServeDetails'
import TeachnicalDetails from '../components/project/TeachnicalDetails'
import TechnicalAssistance from '../components/project/TechnicalAssistance'

// import footer from '../components/footer'
// import Nav from '../components/Nav'
// import TopNav from '../components/TopNav'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {require(['@/components/Index'], resolve)},
      children: [
        {
          name: 'car',
          path: '/car',
          component: car
        },
        {
          name: 'center',
          path: '/center',
          component: center
        },
        {
          name: 'EmptyCar',
          path: '/EmptyCar',
          component: EmptyCar
        },
        {
          name: 'forget',
          path: '/forget',
          component: forget
        },
        {
          name: 'Hrdetails',
          path: '/Hrdetails',
          component: Hrdetails
        },
        {
          name: 'LoginPhone',
          path: '/LoginPhone',
          component: LoginPhone
        },
        {
          name: 'module',
          path: '/module',
          component: module
        },
        {
          name: 'MotorPartsTown',
          path: '/MotorPartsTown',
          component: MotorPartsTown
        },
        {
          name: 'MotorPartsTownDetails',
          path: '/MotorPartsTownDetails',
          component: MotorPartsTownDetails
        },
        {
          name: 'News',
          path: '/News',
          component: News
        },
        {
          name: 'NewsDetails',
          path: '/NewsDetails',
          component: NewsDetails
        },
        {
          name: 'OrderDetails',
          path: '/OrderDetails',
          component: OrderDetails
        },
        {
          name:'Pay',
          path:'/Pay',
          component:Pay
        },
        {
          name:'ProductManagement',
          path:'/ProductManagement',
          component:ProductManagement
        },
        {
          name:'Project',
          path:'/Project',
          component:Project
        },
        {
          name: 'ProjectDetails',
          path: '/ProjectDetails',
          component: ProjectDetails
        },
        {
          name: 'Recruitment',
          path: '/Recruitment',
          component: Recruitment
        },
        {
          name: 'RecruitmentDetails',
          path: '/RecruitmentDetails',
          component: RecruitmentDetails
        },
        {
          name: 'Rent',
          path: '/Rent',
          component: Rent
        },
        {
          name: 'RentDetails',
          path: '/RentDetails',
          component: RentDetails
        },
        {
          name: 'Serve',
          path: '/Serve',
          component: Serve
        },
        {
          name: 'ServeDetails',
          path: '/ServeDetails',
          component: ServeDetails
        },
        {
          name: 'TeachnicalDetails',
          path: '/TeachnicalDetails',
          component: TeachnicalDetails
        },
        {
          name: 'TechnicalAssistance',
          path: '/TechnicalAssistance',
          component: TechnicalAssistance
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
      ]
    },
  ]
})
