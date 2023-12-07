import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";

const Signup = () => {
    return(
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className="signup-img-container">
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                        <h2>Sign Up</h2>
                        <p>Create a new account on RFC SkillHub</p>
                        <AuthForm/>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default Signup;