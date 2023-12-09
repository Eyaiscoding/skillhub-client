import React from 'react';
import './courseListingAll.styles.css';
import CourseListingCard from '../cards/course-listing-card/CourseListingCard'

const CourseListingAll = () => {
    return (
        <section className="course-listing-all-container">
            <h1>Course Listing All</h1>
            <div className="container"/>
               <div className="grid-container">
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CourseListingCard/>
                  </div>

               </div>
        </section>
    )
}

export default CourseListingAll;