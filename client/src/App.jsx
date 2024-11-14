import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout  from './components/Layout';
import Home from './components/Home';
import RentaPage from './components/Renta/RentaPage';
import Registration from './components/Registration';
import Auth from './components/Auth';


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
        path: "/renta",
        element: <RentaPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
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



export default App
