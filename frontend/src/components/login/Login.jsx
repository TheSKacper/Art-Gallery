import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const context = useContext(MyContext);
  const navigation = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = { login: login, password: password };
    if (isRegister === false) {
      try {
        axios
          .post("http://localhost:3001/api/user/login", data)
          .then((response) => {
            if (response.data.token) {
              navigation("/");
              context.notify('Welcome ' + login, {type:'success'} )
              context.setData({
                role: response.data.role,
                name: login,
                isLogin: true,
              });
            }
          })
          .catch((error) => {
            context.notify('Wrong login or password', {type:'error'})
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else if (isRegister === true) {
      try {
        axios
          .post("http://localhost:3001/api/user/", data)
          .then((response) => {
            context.notify('Registed', {type:'success'} )
            navigation("/");
            console.log(data)
          })
          .catch((error) => {
            context.notify('Something wrong', {type:'error'})
            console.log(error);
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="containerLogin">
      <div className="leftSide">
        <h1>Welcome</h1>
        {isRegister === false ? (
          <p>If you don't have an account ? create it now</p>
        ) : (
          <p>Do you have account? Log In</p>
        )}
        {isRegister === false ? (
          <button className="btn" onClick={() => setIsRegister(true)}>
            Register
          </button>
        ) : (
          <button className="btn" onClick={() => setIsRegister(false)}>
            Login
          </button>
        )}
      </div>
      <div className="rightSide">
        {isRegister === false ? <h1>Login</h1> : <h1>Register</h1>}
        <form className="loginForm" onSubmit={(e) => loginSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
