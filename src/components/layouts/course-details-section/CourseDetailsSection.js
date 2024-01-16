import React from 'react';
import './courseDetailsSection.styles.css'
import CourseDetailImg from '../../../assets/Courses-img/BAT-Course.jpg';
const CourseDetailsSection =() =>{
     return(

        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                   <div className='course-img-container'>
                      <img src={CourseDetailImg} alt="Course"/>
                   </div>
                   <div className='course-detail-container'>
                        <h2>Business Accounting & Taxation Course</h2>

                        <p className='course-description'><b>Description</b> : Our explicit, exhaustive courseware is expertly designed and curated by industry leaders having years of experience in the disciplines of accounting and taxation. </p>
                        <p><b>Topics</b> : Section-1 Business Accounting , Section-2 Basics of GST , Section-3 Basics of TDS , Section-4 Basics Payroll </p>
                        <p className='text-primary'><b>Language(s)</b> : English  </p>
                        <a href="#" className='add-button'>Add to my TODO List</a>

                   </div>
                </div>
            </div>
        </section>
     )

}
export default CourseDetailsSection; 