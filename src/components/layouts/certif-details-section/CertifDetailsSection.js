import React from 'react';
import './certifDetailsSection.styles.css';
import CertifDetailImg from '../../../assets/Certif-Images/CKS.png'
const CertifDetailsSection =() =>{
     return(

        <section className="details-section-container">
            <div className='container'>
                <div className="flex-container">
                   <div className='certif-img-container'>
                      <img src={CertifDetailImg} alt="Certif"/>
                   </div>
                   <div className='certif-detail-container'>
                      <h2>CKS</h2>
                      <p>Security specialist</p>
                      <p>English,French</p>
                   </div>
                </div>
            </div>
        </section>
     )

}
export default CertifDetailsSection; 