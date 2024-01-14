import React from "react";
import "./certifListingCard.styles.css";
import CertifImage from "../../../../assets/Courses-img/BAT-Course.jpg";

const CertifListingCard = () => {
  return (
    <div className="certif-listing-card">
      <div className="certif-Listing-img-container">
        <img
          src={CertifImage}
          alt="certif-listing-image"
          className="certif-listing-image"
        />
      </div>
      <div className="certif-Listing-details-container">
        <h3>BAT Certification</h3>
        <p className="date-of-exam">Date : 25/03/2024</p>
        <p className="place-of-exam">Place : Online</p>
        <p className="duration-of-exam">Duration : 2 Hours</p>
        <p className="target-of-exam">Target : Commerce Team</p>
        <a href="#" className="certif-listing-button">
          Button
        </a>
      </div>
    </div>
  );
};
export default CertifListingCard;
