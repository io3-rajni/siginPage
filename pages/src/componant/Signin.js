import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import {
  FaUserAlt,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

import "./signin.css";
const Signin = () => {
  const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newentry, setAllEntry] = useState([]);
  const [enterValidEmail, setEnterValidEmail] = useState("");
  const [enterValidPass, setEnterValidPass] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const handleEmail = (event) => {
    if (event.target.value?.match(emailRegex)) {
      setEnterValidEmail("");
    } else {
      setEnterValidEmail("Please enter a valid email id");
    }
    setEmail(event.target.value);
    console.log(
      "emailRegex.match(event.target.value)",
      event.target.value?.match(emailRegex)
    );
  };

  const handlePassword = (event) => {
    if (event.target.value) {
      setEnterValidPass("");
      // console.log('setEnterValidPass', setEnterValidPass)
    }
    // console.log('setEnterValidPass', setEnterValidPass)clr

    setPassword(event.target.value);
  };
  const sPassword = () => {
    setShowPassword("text");
    console.log("f,df");
  };
  const sPassword1 = () => {
    setShowPassword("password");
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!email && !password) {
      // console.log('email', email, password)
      setEnterValidEmail("Enter valid Email");
      setEnterValidPass("Enter valid Password");
    }
    if (email) {
      setEnterValidEmail("");
      console.log("email1", email, password);
    } else {
      setEnterValidEmail("Enter valid Email");
      console.log("email2", email, password);
    }
    if (password) {
      setEnterValidPass("");
    } else {
      setEnterValidPass("Enter valid Password");
    }
    if (email?.match(emailRegex) && password) {
      console.log("email", email, password);
      console.log("4", email);

      navigate("/home");
    } else {
      setEnterValidEmail("Please enter a valid email");
      console.log("last", email);
    }
  };
  const arr = "dhfdjcvdgjvgsdv6";
  console.log(arr.split());
  return (
    <>
      <div className="mainDiv">
        <Navbar />

        <form className="signinform" action="" onSubmit={submitForm}>
          <div className="input-group userNameBox" style={{ display: "flex" }}>
            <input
              type="text"
              name="email"
              placeholder="Enter User Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              className="form-control user-name"
              // autoComplete="on"
              value={email}
              onChange={(event) => handleEmail(event)}
            />
            <div>
              {" "}
              <FaUserAlt
                className="icon"
                style={{
                  position: "relative",
                  right: "2px",
                  // top: '11px',
                  height: "2rem",
                  boxShadow: "2px 2px 0px #575B8A",
                  background: "white",
                  color: "#575B8A",
                  width: "2rem",
                }}
                width="10rem"
                color="white"
              />
            </div>
          </div>
          <p
            style={{
              color: "red",
            }}
          >
            {enterValidEmail}
          </p>
          <div className="passwordDiv" style={{ display: "flex" }}>
            <div className="input-group mb-3 password">
              <input
                type={showPassword}
                name="password"
                placeholder="Password"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                className="form-control pswrd pswrdBox"
                autocomplte="on"
                value={password}
                onChange={(event) => {
                  handlePassword(event);
                }}
              />
            </div>

            <div>
              {showPassword === "password" ? (
                <AiFillEyeInvisible
                  className="showBtn"
                  onClick={sPassword}
                  style={{
                    position: "relative",
                    right: "2px",

                    height: "2rem",
                    boxShadow: "2px 2px 0px #575B8A",
                    background: "white",
                    color: "#575B8A",
                    width: "2rem",
                    height: "34px",
                  }}
                  width="10rem"
                  color="white"
                />
              ) : (
                <AiFillEye
                  className="showBtn"
                  onClick={sPassword1}
                  style={{
                    position: "relative",
                    right: "2px",
                    // top: "8px",
                    height: "2rem",
                    boxShadow: "2px 2px 0px #575B8A",
                    background: "white",
                    color: "#575B8A",
                    width: "2rem",
                    height: "34px",
                  }}
                  width="10rem"
                  color="white"
                />
              )}
            </div>
            {/* <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                        >
                        </button> */}
          </div>
          <input className="signin-btn" type="submit" value="Submit" />

          {/* <button onMouseOver={() => console.log('test')}>btn</button> */}
          <IoIosArrowDropright
            className="icon"
            style={{
              position: "relative",
              right: "0px",
              top: "11px",
              height: "2rem",
              boxShadow: "2px 2px 0px #575B8A",
              background: "white",
              color: "#575B8A",
              width: "2rem",
              // top: "0.1rem"
            }}
            width="10rem"
            color="white"
            marginBottom="0.1rem"
          />
          <div className="font-icon">
            <br />
            <h5>Log In Via</h5>
            <div className="social-med-icon">
              <FaInstagram />
              <FaFacebookSquare />
              <FaTwitter />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signin;
