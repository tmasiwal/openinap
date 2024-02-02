import React from "react";
import "./Login.css";
import logoImage from "../../assets/logo.svg";
import { GoogleLogin } from "@react-oauth/google";
import blueVector from "../../assets/blueVector.svg";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";
import logo3 from "../../assets/logoFor300.png"
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
      <div className="nav-login">
        <img src={logo3} alt="" />
      </div>
      <div className="part2">
        <p className="signText">Sign In</p>
        <p className="signText2">Sign in to your account</p>

        <div className="buttons">
          <button>
            {" "}
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
          </button>
          <button>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                fill="#999999"
              />
            </svg>
            Sign in with Apple
          </button>
        </div>
        <div onSubmit={(e)=>handlesubmit(e)} id="loginForm">
          <form>
            <p>Email Address</p>
            <input type="text" placeholder="Enter your email" />
            <p>Password</p>
            <input type="text" placeholder="Enter your password" />
            <p id="link">Forgot Password?</p>
            <input type="submit" value="Sign In" />
          </form>
        </div>
        <div className="additional-links">
          Don’t have an account?
          <a href="#">Register here</a>
        </div>
      </div>
      <div className="logodiv2">
        <i
          className="bx bxl-github"
          style={{ color: "#858585", fontSize: "44px" }}
        ></i>
        <i
          class="bx bxl-twitter"
          style={{ color: "#858585", fontSize: "44px" }}
        ></i>
        <i
          class="bx bxl-linkedin-square"
          style={{ color: "#858585", fontSize: "44px" }}
        ></i>
        <i
          class="bx bxl-discord-alt"
          style={{ color: "#858585", fontSize: "44px" }}
        ></i>
      </div>
    </div>
  );
};

export default Login;
