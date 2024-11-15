import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout  from './components/Layout';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Registration from './components/Registration';
import Auth from './components/Auth';
import Favorites from './components/Favorites';


function App() {
const [user, setUser] = useState({})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout user={user} setUser={setUser} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/authorization",
        element: <Auth setUser={setUser} />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
return <RouterProvider router={router} />;
}



export default App
