//homepage component
import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import CertifListing from "../../components/layouts/certiflisting/CertifListing";
const HomePage=() => {
    return(
        <section>
            <Showcase/>
            <CertifListing/>
        </section>
    );
        
}

export default HomePage;
//routing is done in js files
//styling is done is jsx files