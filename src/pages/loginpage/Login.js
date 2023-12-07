import React from "react";
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";
import './login.styles.css'
import AuthForm from "../../components/forms/authForm/AuthForm";

const Login = () => {
    return(
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="login-container">
                <div className="login-img-container">
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="login-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                        <h2>Log In</h2>
                        <p>Log In with an existing account</p>
                        <AuthForm/>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default Login;