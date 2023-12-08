import React from 'react';
import "./courseListing.styles.css"

import CourseListingCard from '../cards/course-listing-card/CourseListingCard';


const CourseListing =() => {
    return (

       <div className="course-listing-container">
           <div className="container">
              <h2>Here are some <span className="text-primary">courses</span> that might interest you</h2>
              <div className="listing-container">
                   <CourseListingCard/>
                   

              </div>
           </div>
       </div>
    )




}

export default CourseListing ;