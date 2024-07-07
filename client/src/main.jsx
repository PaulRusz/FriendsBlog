import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import NotFound from '../src/pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Friends from '../src/pages/Friends.jsx'
import Post from '../src/pages/Post.jsx'
import Profile from '../src/pages/Profile.jsx'
import Logout from '../src/pages/Logout.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from '../src/pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search',
        element: <Friends />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [{ 
          path: ':id',
          element: <Profile />
        }]
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);