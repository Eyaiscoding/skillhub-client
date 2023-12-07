import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg'
const Signup = () => {
    return(
        <section className="signup-container">
            <div className="signup-img-container">
                <img src={AuthBgImg} alt="authentication-background" />
            </div>
            <div className="signup-content-container">
                <div className="content-wrapper">
                    <h2>Signup</h2>
                    <p>Create a new account on RFC SkillHub</p>

                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-input" placeholder="Enter your first name" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-input" placeholder="Enter your last name" />
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="tel" className="form-input" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input type="text" className="form-input" placeholder="Enter your department" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-input" placeholder="Enter your email address" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-input" placeholder="Enter your password" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Signup;