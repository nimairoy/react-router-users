import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import FirstPage from './components/FirstPage/FirstPage';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>This is the home page</h1>
//   },
//   {
//     path: 'about',
//     element: <h1>This is the About page</h1>
//   },
//   {
//     path: 'contact',
//     element: <h1>This is the Contact us page</h1>
//   },
//   {
//     path: 'card',
//     element: <App />
//   }

// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <FirstPage />
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')       
      },
      {
        path: '/user/:userId',
        element: <UserDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/post/:postId',
        element: <PostDetails ></PostDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact /> 
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
