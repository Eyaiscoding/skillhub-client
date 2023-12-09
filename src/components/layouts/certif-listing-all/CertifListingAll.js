import React from 'react';
import './certifListingAll.styles.css';
import CertifListingCard from '../cards/certif-listing-card/CertifListingCard';
const CertifListingAll = () => {
    return (
        <section className="certif-listing-all-container">
            <h1>Certif Listing All</h1>
            <div className="container"/>
               <div className="grid-container">
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>
                  <div className="grid-Item">
                      <CertifListingCard/>
                  </div>


               </div>
        </section>
    )
}

export default CertifListingAll;