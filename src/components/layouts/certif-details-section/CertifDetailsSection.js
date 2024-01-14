import React from 'react';
import './certifDetailsSection.styles.css';
import CertifDetailImg from '../../../assets/Courses-img/BAT-Course.jpg';
const CertifDetailsSection =() =>{
     return(

        <section className="details-section-container">
            <div className='container'>
                <div className="flex-container">
                   <div className='certif-img-container'>
                      <img src={CertifDetailImg} alt="Certif"/>
                   </div>
                   <div className='certif-detail-container'>
                      <h2>BAT Certification</h2>
                      <p><b>Suggested Course(s)</b> : Business Accounting & Taxation Course</p>
                        <p><b>Language(s)</b> : Englsih  </p>
                        <a href="#" className='add-button'>Add to my TODO List</a>
                   </div>
                </div>
            </div>
        </section>
     )

}
export default CertifDetailsSection; 