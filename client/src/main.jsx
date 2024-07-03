import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
// import Home from "../src/pages/Home.jsx";
import HomePage from "../src/pages/HomePage.jsx";
import Navbar from "../src/components/Navbar.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Profile from "../src/pages/Profile.jsx";
import Post from "../src/pages/Post.jsx";
import Friends from "../src/pages/Friends.jsx";
import Login from "../src/pages/Login.jsx";
import Logout from "../src/pages/Logout.jsx";
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Navbar isLoggedIn={false} /> {/* Pass the authentication status here */}
  </RouterProvider>
);
