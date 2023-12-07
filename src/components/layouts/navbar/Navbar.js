import React from "react";
import'./navbar.styles.css';
import { Link } from "react-router-dom";

const Navbar=({ darkTheme, darkText}) => {

    return(
        <section className={ `navbar-container  ${darkTheme ? 'background-dark relative' : 'background-transparent'}`}>
            <div className="container flex justify-between align-center">
                <a href="/" className="logo"> RFC <span className="text-primary">SkillHub</span> </a>
                <nav className="nav-links-container">
                    <Link to="/" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home</Link>
                    <Link to="/courses" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Courses</Link>
                    <Link to="/certifications" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Certifications</Link>
                    <Link to="/login" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Login</Link>
                    <Link to="/signup" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Signup</Link>
                </nav>
            </div>
        </section>
    );
        
}

export default Navbar;