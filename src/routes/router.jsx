import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Queries from '../pages/Queries';
import Home from '../pages/Home';
import MyQueries from '../pages/MyQueries';
import MyRecommendation from '../pages/MyRecommendation';
import RecommendationForYou from '../pages/RecommendationForYou';
import QueryDetails from '../pages/QueryDetails';
import UpdateQuery from '../pages/UpdateQuery';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
      },
        {
            path: "/queries",
            element: <Queries></Queries>,
            loader: () => fetch("http://localhost:5000/queries")
        },
        {
          path: "/myqueries",
          element: <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>,
        },
        {
          path: "/myrecommendations",
          element:<PrivateRoute>
             <MyRecommendation></MyRecommendation>
          </PrivateRoute>,
        },
        {
          path: "/recommendations",
          element: <PrivateRoute>
            <RecommendationForYou></RecommendationForYou>
          </PrivateRoute>,
        },
      ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
              path: "/auth/register",
              element: <Register></Register>
          }
        ]
      },
      {
        path: "/querydetails/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/querydetails/${params.id}`)
      },
      {
        path: "/queryupdate/:id",
        element: <UpdateQuery></UpdateQuery>,
      }

  ]);

export default router;