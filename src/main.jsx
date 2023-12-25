// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Register/Register.jsx';
import TaskManagement from './Pages/TaskManagement/TaskManagement.jsx';
import All from './Pages/TaskManagement/SubPages/All/All.jsx';
import ToDo from './Pages/TaskManagement/SubPages/ToDo/ToDo.jsx';
import OnGoing from './Pages/TaskManagement/SubPages/onGoing/OnGoing.jsx';
import Completed from './Pages/TaskManagement/SubPages/Completed/Completed.jsx';
import PrivateRoutes from './Providers/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path: "/taskmanagement",
        element: <TaskManagement/>,
        children: [
          {
            path: "/taskmanagement/all",
            element: <PrivateRoutes><All/></PrivateRoutes>
          },
          {
            path: "/taskmanagement/todo",
            element: <PrivateRoutes><ToDo/></PrivateRoutes>,
          },
          {
            path: "/taskmanagement/ongoing",
            element: <PrivateRoutes><OnGoing/></PrivateRoutes>
          },
          {
            path: "/taskmanagement/Complete",
            element: <PrivateRoutes><Completed/></PrivateRoutes>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  // {/* </React.StrictMode>, */}
)
