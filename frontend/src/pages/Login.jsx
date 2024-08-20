import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/Dashboard");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-main">
        <img
          src="../../public/images/tekno-shadow.png"
          alt=""
          className="absolute-img"
        />
        <div className="login-section">
          <div className="title">
            <img src="../../public/images/teknomadya.png" alt="" />
            <h1>TEKNOMADYA</h1>
          </div>
          <div className="title-login">
            <h1>Log In</h1>
            <p>Log In to stay connected.</p>
          </div>
          <p className="centered-p">{msg}</p>

          <div className="login-form">
            <form action="" onSubmit={Auth}>
              <div className="form-text form-mb">
                <label htmlFor="text">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-text">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" name="remember" />
                  <p>Remember me?</p>
                </label>
                <a href="#">Forgot Password</a>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div className="right-main"></div>
    </div>
  );
};

export default Login;
