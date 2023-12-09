import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import CertifDetailsSection from "../../components/layouts/certif-details-section/CertifDetailsSection"

const CertificateDetails = () => {
    return(
    <section>
        <Navbar darkTheme={true }/>

        <CertifDetailsSection />
    </section>
    );
}
export default CertificateDetails;