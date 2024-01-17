import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(MyContext);
  const navigation = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    try {
      const data = { login: login, password: password };
      axios
        .post("http://localhost:3001/api/user/login", data)
        .then((response) => {
          if (response.data.token) {
            navigation("/");
            context.setData({
              role: response.data.role,
              name: login,
              isLogin: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => loginSubmit(e)}>
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
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
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
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
