import React, { useContext, useState } from "react";
import "../styles/Credintial.css";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import logo from "../assets/images/logo.png";
import { Authcontext } from "../context/Login_context";
function Credintial() {
  const [isSignup, setIssignup] = useState(false);
  const [msg, setmsg] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(Authcontext);
  function setsignup() {
    setIssignup(!isSignup);
  }
  function handlemessage() {
    setmsg("Successfully registered!✅");
    setIssignup(false);
    setTimeout(() => setmsg(null), 1000);
  } 
  const handlesubmit=(e)=>{
   e.preventDefault();
   login(email,username,password);
  }
  return (
    <div className="credintial">
      <div className={isSignup ? "cred_container_signup" : "cred_container"}>
        <div className={isSignup ? "cred_txt_signup" : "cred_txt"}>
          <img src={logo} alt="" className="logo" />
          {isSignup ? (
            <span className="txt1">Signup with </span>
          ) : (
            <span className="txt1">Login with </span>
          )}
          <span className="txt2">Username or</span>
          <span className="txt3">Email</span>
          {msg ? <div className="cred_msg">{msg}</div> : null}
        </div>

        <div className={isSignup ? "cred_input_signup" : "cred_input"}>
          {isSignup ? (
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="inp"
              value={email[0]}
              onChange={(value)=>setEmail(value)}
            />
          ) : null}
          <input
            type="text"
            name=""
            id=""
            placeholder="Username or Email"
            className="inp"
            value={username[0]}
            onChange={(value)=>setUsername(value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Pass****"
            className="inp"
            value={password[0]}
            onChange={(value)=>setPassword(value)}
          />
          {isSignup ? (
            <button type="submit" onClick={handlemessage}>
              Signup
            </button>
          ) : (
            <button type="submit" onClick={handlesubmit}>SignIn</button>
          )}

          {isSignup ? (
            <div>
              <span>I have account? </span>
              <span className="signup" onClick={setsignup}>
                Signin.
              </span>
            </div>
          ) : (
            <div>
              <span>I have no account? </span>
              <span className="signup" onClick={setsignup}>
                Signup.
              </span>
            </div>
          )}

          <div className="icon_cont">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credintial;
