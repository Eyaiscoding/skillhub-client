import React from "react";
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";
import './login.styles.css'


const Login = () => {
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
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-input" placeholder="Enter your email address" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-input" placeholder="Enter your password" />
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