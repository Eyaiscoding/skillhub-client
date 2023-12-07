import React from 'react';
import "./certifListing.styles.css"
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';
const CertifListing =() => {
    return (

       <div className="Certif-listing-container">
           <div className="container">
              <h2>Here are some <span className="text-primary">certifications</span> that might interest you</h2>

              <div className="listing-container">
              {CertifData.slice(0,4).map((certif) => (
               <ProductListingCard key={certif.id} CertifData={certif} />
                ))}
              </div>
           </div>
       </div>
    )




}

export default CertifListing ;