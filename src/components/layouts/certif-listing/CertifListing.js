import React from 'react';
import './certifListing.styles.css';
import CertifListingCard from '../cards/certif-listing-card/CertifListingCard';

const CertifListing =() => {
   return (

      <div className="certif-listing-container">
          <div className="container">
             <h2>Here are some <span className="text-primary">certifications</span> that might interest you</h2>
             <div className="listing-container">
                  <CertifListingCard/>
                  <CertifListingCard/>
                  <CertifListingCard/>
                  <CertifListingCard/>

                 
                 
                 
             </div>
          </div>
      </div>
   )
}

export default CertifListing ;