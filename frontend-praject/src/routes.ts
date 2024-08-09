// src/routes.ts
import React from 'react';

// Lazy load components
// const Login = React.lazy(() => import('./page/login'));
// const Register = React.lazy(() => import('./page/Register'));
const Dashboard = React.lazy(() => import('./page/Dashboard'));

// Define route configuration
const routes = [
  // { path: '/login', exact: true, name: 'Login', element: Login },
  // { path: '/register', exact: true, name: 'Register', element: Register },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
];

export default routes;
