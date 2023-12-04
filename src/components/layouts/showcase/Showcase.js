import React from "react";
import './showcase.styles.css';
import Navbar from "../navbar/Navbar";
const Showcase =() =>{
    return (
        <section className="showcase-container">

            <Navbar />
            <div className="overlay"></div>
                <div className="showcase-content">
                    <h1>Welcome to SkillHub by RFC</h1>
                    <p>Plan your learning journey today</p>
                </div>
            </section>
    );
}

export default Showcase;