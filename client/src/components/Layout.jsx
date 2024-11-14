import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout({user, setUser}) {
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <section className="container mt-5 vh-100">
        <Outlet />
      </section>
      <Footer/>
    </>
  );
}

export default Layout;
