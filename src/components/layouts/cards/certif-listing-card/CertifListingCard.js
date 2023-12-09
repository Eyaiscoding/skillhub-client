import React from "react";
import './certifListingCard.styles.css';
import CertifImage from "../../../../assets/Certif-Images/AZURE.png";

const CertifListingCard =() => {
  return (
    
    <div className="certif-listing-card">
        <div className="certif-Listing-img-container">
         <img src={CertifImage} alt="certif-listing-image"
           classeName="certif-listing-image"/>
        </div>
        <div className="certif-Listing-details-container">
          <h3>AZ-200</h3>
          <p classeName="level">Associate</p>
          <p className="certif-assets">Total assets</p>
          <p>up to 20h</p>
          <a href="#" className="certif-listing-button">Button</a>
        </div>
    </div>

   )



}
export default CertifListingCard;