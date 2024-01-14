import React from "react";
import "./courseListingCard.styles.css";
import CourseImage from "../../../../assets/Courses-img/BAT-Course.jpg";

const CourseListingCard = () => {
  return (
    <div className="course-listing-card">
      <div className="course-Listing-img-container">
        <img
          src={CourseImage}
          alt="course-listing-image"
          className="course-listing-image"
        />
      </div>
      <div className="course-Listing-details-container">
        <h3>Business Accounting & Taxation Course</h3>
        <p className="level-of-complexity">Level : Beginner</p>
        <p className="course-description">Description : Learn GST, Income tax, Balance Sheet, Tally, Excel, Payroll, MIS Reporting</p>
        <p className="course-duration">Duration : Up to 120h</p>
        <p className="course-target">Target : Commerce Team</p>
        <a href="#" className="course-listing-button">
          Button
        </a>
      </div>
    </div>
  );
};
export default CourseListingCard;
