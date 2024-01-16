import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg'
import Navbar from "../../components/layouts/navbar/Navbar";
import { useState } from "react";
import axios from "axios";


const Signup = () => {
    const [fullName,setFullName] = useState('');
    const [department,setDepartment] = useState('');
    const [phoneNbr,setPhoneNbr] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName,department,phoneNbr,email,password);
        axios.post('http://localhost:4000/auth/register',{
            fullName:fullName,
            department:department,
            phoneNbr:phoneNbr,
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
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" 
                                    className="form-input" 
                                    placeholder="Enter your full name" 
                                    value = {fullName}
                                    onChange={(e) =>{
                                        setFullName(e.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Department</label>
                                    <input type="text" 
                                    className="form-input" 
                                    placeholder="Enter your department"
                                    value = {department}
                                    onChange={(e) =>{
                                        setDepartment(e.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" 
                                    className="form-input" 
                                    placeholder="Enter your phone number" 
                                    value = {phoneNbr}
                                    onChange={(e) =>{
                                        setPhoneNbr(e.target.value)
                                    }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email"
                                     className="form-input" 
                                     placeholder="Enter your email address"
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