import React from "react";
import "./Login.css";
import { useState } from "react";
import Home from "./Home";
import {Link} from 'react-router-dom'

const Login = () => {
  const[pass,setPass]=useState("");
  const[eml,setEml]=useState("");
  const[isCorrect,setIsCorrect]=useState(true)
  let password="12345678"
  let email="goguedukondal@gmail.com"
const Evaluation = () =>{
if(password===pass&&email===eml){
  setIsCorrect(true)
}
else{
  setIsCorrect(false)
}
}
  return (
    <div className="login">
      <div className="loginform_container">
        <h1>Welcome back to Pretty Login</h1>
        <p>It's great to have you back!</p>
        <form className="login_form">
          <label>EMAIL</label>
          <input onChange={(e)=>{
            setEml(e.target.value)
          }} className="email" type={"email"} />
          <label>PASSWORD</label>
          <input onChange={(e)=>{
            setPass(e.target.value)
          }}
          className="password" type={"password"} />
          <div className="rememberme">
            <div>
              <input type={"checkbox"} className='check_box' />
              <label>Remember me?</label>
            </div>

            <p>Forget password?</p>
          </div>
          <div className="login-part">
            {isCorrect?(
                 <Link to='/Home' onClick={Evaluation} className="login-button" type="submit">
                 LOGIN
               </Link>
            ):(
              <div>{alert("eneter valid details")}</div>
            )

            }
           
            <button className="createaccount-button">CREATE ACCOUNT</button>
          </div>
          <p className="login-with">Or login with</p>
          <p className="facebook">Facebook Google</p>
        </form>
      </div>
      <div className="image_part">
        <img
          className="imag"
          alt="pic"
          src="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        />
      </div>
      {/* {isCorrect?(<Link to='/Home'></Link>):<div>{alert("eneter valid details")}</div>} */}
    </div>
  );
};

export default Login;
