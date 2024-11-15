import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Layout  from './components/Layout';
import Home from './components/Home';
import Registration from './components/Registration';
import Auth from './components/Auth';
import RentaCard from './components/Renta/RentaCard';
import RentaFormAdd from './components/Renta/RentaFormAdd';
import RentaUpdate from './components/Renta/RentaUpdate';
import RentaPage from './components/Renta/RentaPage';
import axiosInstance from "./axiosInstance";

function App() {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const response = await axiosInstance.get("/auth/refresh");
      if (response.status === 200) {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
      }
    } catch ({ response }) {
      return response.data.message;
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/users",
        //   element: <UserPage />,
        // },
        {
          path: "/registration",
          element: <Registration setUser={setUser} />,
        },
        {
          path: "/authorization",
          element: <Auth setUser={setUser} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
