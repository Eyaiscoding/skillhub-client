import React from "react";
import './showcase.styles.css';
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";
const Showcase =() =>{
    return (
        <section className="showcase-container">

            <Navbar darkTheme={false} />
            <div className="overlay"></div>
                <div className="showcase-content">
                    <h1>Welcome to <span className="text-primary">SkillHub</span> by RFC</h1>
                    <p>Plan your learning journey today</p>
                    <SearchInputForm darkTheme={true}/>
                </div>
            </section>
    );
}

export default Showcase;