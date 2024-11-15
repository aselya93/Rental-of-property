import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, {setAccessToken} from "../axiosInstance";

function Auth({setUser}) {
  const [email, setEmail] = useState ('testtest@mail.ru');
  const [password, setPassword] = useState ('123');
  const navigate = useNavigate();

    async function authUser(event) {
      event.preventDefault();

      try {
        const { data, status } = await axiosInstance.post("/auth/login", {
          email,
          password,
        }); 
        setUser(data.user);
        setAccessToken(data.accessToken)
        navigate('/')
       } catch (error){
          alert(error.message);
       }
      
    }

return (
    <>
      <h2>Авторизация</h2>

      <form onSubmit={authUser} className="mt-5">
        <div className="mb-3">
          <input
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Войти
        </button>
      </form>
    </>
  );
}

export default Auth