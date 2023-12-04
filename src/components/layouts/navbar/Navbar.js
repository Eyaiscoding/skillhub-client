import React from "react";
import'./navbar.styles.css';

const Navbar=() => {
    return(
        <section className="navbar-container">
            <div className="container flex justify-between align-center">
                <a href="#" className="logo"> RFC <span className="text-primary">SkillHub</span> </a>
                <nav className="nav-links-container">
                    <a href="#" className="nav-links" >Home</a>
                    <a href="#" className="nav-links" >Courses</a>
                    <a href="#" className="nav-links" >Certifications</a>
                </nav>
            </div>
        </section>
    );
        
}

export default Navbar;