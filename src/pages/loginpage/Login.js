import React from "react";
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";
import './login.styles.css'
import { useState } from "react";
import axios from "axios";


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        axios.post('http://'+process.env.API_GATEWAY_URL+':4000/auth/login',{
            email:email,
            password:password,
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err.response);
             
        })
    }
    return (
        <React.Fragment>
            <Navbar darkText={true} />
            <section className="login-container">
                <div className="login-img-container">
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="login-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Log In</h2>
                            <p>Log In with an existing account</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email"
                                     className="form-input"
                                      placeholder="Enter your email address"
                                     autoComplete="off"
                                     value = {email}
                                    onChange={(e) =>{
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                     className="form-input"
                                      placeholder="Enter your password"
                                      value = {password}
                                    onChange={(e) =>{
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="button-primary" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default Login;