import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm'
import './coursesPage.style.css'
import CourseListingAll from "../../components/layouts/courselistingall/CourseListingAll";

const CoursesPage = () => {
    return(
        <section>
            <Navbar darkTheme={true}/>
            <div className="search-container">
                <h2>Find the courses that you want</h2>
                <SearchInputForm  darkTheme={false}/>
            </div>
            <CourseListingAll />
        </section>
    );
}
export default CoursesPage;