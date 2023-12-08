import React from 'react';
import "./certifListing.styles.css"
import CertifImage from "../../../assets/Certif-Images/AZURE.png"


const CertifListing =() => {
    return (

       <div className="listing-container">
           <div className="certif-listing-card">
              <h2>Here are some <span className="text-primary">certifications</span> that might interest you</h2>
              <div className="listing-container">
                       <div className="certif-Listing-img-container">
                         <img src={CertifImage} alt="certif-listing-image"/>
                       </div>
                       <div className="certif-Listing-details-container">
                          <h3>CKA</h3>
                          <p>self paced</p>
                          <p>up to 20h</p>
                          <a href="#">Button</a>
                       </div>
              </div>
           </div>
       </div>
    )




}

export default CertifListing ;