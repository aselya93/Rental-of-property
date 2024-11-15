import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import Category from "./Category";

function Nav({ user, setUser }) {
  const navigate = useNavigate()
  const logout = async () => {
    const res = await axiosInstance.delete("/auth/logout");
    navigate('/') 
    if (res.status === 200) {
      setUser(null);
    }
  };
  return (
    <header>
      <ul className="nav nav-pills container gap-3">
        <li className="nav-item w-25">
          <Link to={"/"} className="nav-link ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6676/6676674.png"
              alt="Active"
              className="img-fluid w-25"
            />
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Category/>
        </li>

        {user ? (
          <>
            {/* Условный рендеринг для администратора */}
            {user.isAdmin ? (
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Клиенты
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to={"/renta"} className="nav-link" aria-disabled="true">
                    Объявления 
                  </Link>
                </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                  <Link to={"/renta"} className="nav-link" aria-disabled="true">
                    Объявления 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Избранное ❤️
                  </Link>
                </li>
              </>
            ) }
            <li className="nav-item">
              <span className="nav-link disabled">Привет, {user.name}</span>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-danger" onClick={logout}>
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to={"/authorization"} className="btn btn-primary">
                Вход
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/registration"} className="btn btn-outline-primary">
                Регистрация
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Nav;
