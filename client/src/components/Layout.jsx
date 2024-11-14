import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout({user, setUser}) {
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <section className="container mt-5">
        <Outlet />
      </section>
    </>
  );
}

export default Layout;
