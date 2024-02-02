import React from "react";
import "./Login.css";
import logoImage from "../../assets/logo.svg";
import { GoogleLogin } from "@react-oauth/google";
import blueVector from "../../assets/blueVector.svg";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const navigate=useNavigate()
const handlesubmit=(e)=>{
  e.preventDefault();
  navigate("/upload")
}
  return (
    <div className="mainContainer">
      <div className="part1">
        <div className="logo">
          <img src={blueVector} className="blue-vector" alt="" />
          <img src={logoImage} className="logo-image" alt="" />
        </div>
        <div className="logoHeading">
          <p>BASE</p>
        </div>
        <div className="logodiv">
          <i
            className="bx bxl-github"
            style={{ color: "#FFFFFF", fontSize: "44px" }}
          ></i>
          <i
            class="bx bxl-twitter"
            style={{ color: "#FFFFFF", fontSize: "44px" }}
          ></i>
          <i
            class="bx bxl-linkedin-square"
            style={{ color: "#FFFFFF", fontSize: "44px" }}
          ></i>
          <i
            class="bx bxl-discord-alt"
            style={{ color: "#FFFFFF", fontSize: "44px" }}
          ></i>
        </div>
      </div>

      <div className="part2">
        <p className="signText">Sign In</p>
        <p className="signText2">Sign in to your account</p>

        <GoogleLogin
          style={{
            width: "197.6px",
            height: "32.93px",
            top: "338.51px",
            left: "813.18px",
          }}
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse);
            navigate("/upload");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <form>
          <div className="emaildiv">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

          <div className="emaildiv">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>

          <div className="additional-links">
            <a href="#">Forgot password?</a>
          </div>

          <button className="signInButton" onClick={(e) => handlesubmit(e)}>
            Sign In
          </button>
        </form>
        <div className="additional-links">
          Don’t have an account?
          <a href="#">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
