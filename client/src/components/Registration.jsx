import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, { setAccessToken } from "../axiosInstance";

function Registration({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    try {
      const { data, status } = await axiosInstance.post("/user", {
        name,
        email,
        password,
      });
      if (status === 201) {
        setUser(data.user);
        setAccessToken(data.accessToken)
        navigate("/renta");
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>Регистрация</h2>
      <form onSubmit={createUser} className="mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Имя
          </label>
          <input
            onChange={({ target }) => setName(target.value)}
            type="text"
            name="name"
            className="form-control"
            id="exampleInputPassword1"
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export default Registration;
