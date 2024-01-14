import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import CourseDetailsSection from "../../components/layouts/course-details-section/CourseDetailsSection";

const CourseDetails = () => {
    return(
    <section>
        <Navbar darkTheme={true }/>

        <CourseDetailsSection />
    </section>
    );
}
export default CourseDetails;