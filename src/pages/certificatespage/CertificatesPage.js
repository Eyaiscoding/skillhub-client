import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm'
import './certificatesPage.style.css'
import CertifListingAll from "../../components/layouts/certif-listing-all/CertifListingAll";

const CertificatesPage = () =>  {
    return(
        <section>
            <Navbar darkTheme={true}/>
            <div className="search-container">
                <h2>Find the certification exam session that suits you</h2>
                <SearchInputForm darkTheme={false}/>
            </div>
            <CertifListingAll />
        </section>
    );
}

export default CertificatesPage;