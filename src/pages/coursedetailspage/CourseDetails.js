import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import CourseDetailsSection from "../../components/layouts/certif-details-section/CertifDetailsSection"

const CourseDetails = () => {
    return(
    <section>
        <Navbar darkTheme={true }/>

        <CourseDetailsSection />
    </section>
    );
}
export default CourseDetails;