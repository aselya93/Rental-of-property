import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


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
        element: <UsersPage />,
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
