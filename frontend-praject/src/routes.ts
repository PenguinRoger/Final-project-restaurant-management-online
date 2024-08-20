// src/routes.ts
import React from 'react';

// Lazy load components
// const Login = React.lazy(() => import('./page/login'));
// const Register = React.lazy(() => import('./page/Register'));
const Dashboard = React.lazy(() => import('./page/Dashboard'));

//Menu
const Menu = React.lazy(() => import('./page/menu/Menu'));
const Category = React.lazy(() => import('./page/menu/Category'));
const Choice = React.lazy(() => import('./page/menu/Choice'));

//Tables
const Tables = React.lazy(() => import('./page/Tables'));



//Settings
const Setting = React.lazy(() => import('./page/setting/Setting-Tables'));



const routes = [
  // { path: '/login', exact: true, name: 'Login', element: Login },
  // { path: '/register', exact: true, name: 'Register', element: Register },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },

  //Menu
  { path: '/menu/menu', exact: true, name: 'Menu', element: Menu },
  { path: '/menu/category', exact: true, name: 'Category', element: Category },
  { path: '/menu/choice', exact: true, name: 'Choice', element: Choice },

  //Tables
  { path: '/tables', exact: true, name: 'Tables', element: Tables },



  //Settings
  { path: '/setting/setting-tables', exact: true, name: 'Setting', element: Setting },
];

export default routes;
