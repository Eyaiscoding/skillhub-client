import React from 'react';
import './courseDetailsSection.styles.css'
import CourseDetailImg from '../../../assets/Courses-img/micro.png';
const CourseDetailsSection =() =>{
     return(

        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                   <div className='course-img-container'>
                      <img src={CourseDetailImg} alt="Course"/>
                   </div>
                   <div className='course-detail-container'>
                        <h2>DevOps Course</h2>
                        <p>Description</p>
                        <p>self-paced: 15h </p>
                        <p>Intermediate</p>
                   </div>
                </div>
            </div>
        </section>
     )

}
export default CourseDetailsSection; 