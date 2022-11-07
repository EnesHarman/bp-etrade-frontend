import React, { useState } from 'react';
import "./Login.css" ;
import * as loginService from "../../services/LoginService";
import bookImage from '../../images/bookstore.jpg';
import logo from '../../images/logo.png'
import {  useCookies } from "react-cookie";

const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies()
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUsername = (e) => {
        setUserName(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) =>{
        e.preventDefault();
        const response = await loginService.login(username, password);
        if(response.success){
            setCookie("user_info", response);
            console.log(cookies.user_info)
        }
    }

  return (
    <div className='login row'>
        <div id='login-form-area' className='col-md-4'>
            <div id='login-logo'>
                <img className='logo' src={logo}></img>
            </div>
            <form className='login-form' onSubmit={handleLogin}>
                <input id='username' placeholder='Username' onChange={handleUsername}></input>
                <input id='password' placeholder='Password' onChange={handlePassword}></input>
                <button type='submit' className='login-button'>Login</button>
            </form>
        </div>
        <div id='login-picture-area' className='col-md-8'>
            <img className='img-fluid' src={bookImage}></img>
        </div>
    </div>
  )
}

export default Login