import React from "react";
import './certifListingCard.styles.css';
import CourseImage from "../../../../assets/Courses-img/k8s.png";

const CourseListingCard =() => {
  return (
    
    <div className="course-listing-card">
        <div className="course-Listing-img-container">
         <img src={CourseImage} alt="course-listing-image"
           classeName="course-listing-image"/>
        </div>
        <div className="course-Listing-details-container">
          <h3>Kubernetes course</h3>
          <p classeName="level-of-complexity">Intermediate</p>
          <p className="course-assets">Total assets</p>
          <p>up to 20h</p>
          <a href="#" className="course-listing-button">Button</a>
        </div>
    </div>

   )



}
export default CourseListingCard ;