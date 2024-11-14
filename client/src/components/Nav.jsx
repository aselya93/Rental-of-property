import React from 'react';
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function Nav({user}) {
    return (
        <div>
          <ul className="nav nav-pills container gap-3">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link active" aria-current="page" href="#">Active</Link>
              </li>
              <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</Link>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" href="#">Link</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
              {!user && (
              <>
              <li className="nav-item">
                <button type='button' className='btn btn-danger'>Выйти</button>
              </li>
              </>)}

              {user && (
                <>
                    <li className="nav-item">
                        <Link to={'/authorization'} className="btn btn-primary">Вход</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/registration'} className="btn btn-outline-primary">Регистрация</Link>
                    </li>
                </>
              )}


              
          </ul>
        </div>
    );
}

export default Nav;