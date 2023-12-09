import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";


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
                        <form>
                        <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-input" placeholder="Enter your first name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-input" placeholder="Enter your email address" />
                                    <label>Full Name</label>
                                    <input type="text" className="form-input" placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <input type="text" className="form-input" placeholder="Enter your department" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-input" placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-input" placeholder="Enter your email address" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-input" placeholder="Enter your password" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="button-primary" value="Sign up" />
                                </div>
                            </form>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default Signup;