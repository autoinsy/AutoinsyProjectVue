import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import car                    from '../components/project/car'
import center                 from '../components/project/center'
import EmptyCar               from '../components/project/EmptyCar'
import forget                 from '../components/project/forget'
import Enroll                 from '../components/project/Enroll'
import login                  from '../components/project/login'
import LoginPhone             from '../components/project/LoginPhone'
import module                 from '../components/project/module'
import Pay                    from '../components/project/Pay'
import ProductManagement      from '../components/project/ProductManagement'
import TeachnicalDetails      from '../components/project/TeachnicalDetails'
import TechnicalAssistance    from '../components/project/TechnicalAssistance'
import SHindex                from '../components/project/SHindex'
import resume                 from '../components/project/resume'
import talkAbout                 from '../components/project/im/TalkAbout'

import MotorPartsTown         from '../components/tables/MotorPartsTown'
import News                   from '../components/tables/News'
import Recruitment            from '../components/tables/Recruitment'
import Project                from '../components/tables/Project'
import Rent                   from '../components/tables/Rent'
import Serve                  from '../components/tables/Serve'
import ornament               from '../components/tables/Ornament'

import Hrdetails              from '../components/details/Hrdetails'
import MotorPartsTownDetails  from '../components/details/MotorPartsTownDetails'
import NewsDetails            from '../components/details/NewsDetails'
import OrderDetails           from '../components/details/OrderDetails'
import ProjectDetails         from '../components/details/ProjectDetails'
import RecruitmentDetails     from '../components/details/RecruitmentDetails'
import RentDetails            from '../components/details/RentDetails'
import ServeDetails           from '../components/details/ServeDetails'
import ornamentDetail         from '../components/details/OrnamentDetail'

// import footer from '../components/footer'
// import Nav from '../components/Nav'
// import TopNav from '../components/TopNav'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require(['@/components/Index'], resolve)
      },
      children: [
        // {
        //   name: '',
        //   path: 'indexDetail',
        //   component:indexDetail
        // },
        {
          name: 'Enroll',
          path: '/Enroll',
          component: Enroll
        },
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
          name: 'Pay',
          path: '/Pay',
          component: Pay
        },
        {
          name: 'ProductManagement',
          path: '/ProductManagement',
          component: ProductManagement
        },
        {
          name: 'Project',
          path: '/Project',
          component: Project
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
        {
          name: 'SHindex',
          path: '/SHindex',
          component: SHindex
        },
        {
          name: 'resume',
          path: '/resume',
          component: resume
        },
        {
          name: 'ornament',
          path: '/ornament',
          component: ornament
        },
        {
          name: 'ornamentDetail',
          path: '/ornamentDetail',
          component: ornamentDetail
        },
      ]
    },
    {
      path: '/talkAbout',
      name: 'talkAbout',
      component: talkAbout,
    }
  ]
})
