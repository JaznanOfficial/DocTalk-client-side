import React from 'react';
import Footer from './Footer/Footer';
import MainBanner from './MainBanner/MainBanner';
import Services from './Services/Services';
import FirstShortAbout from './ShortAbout/FirstShortAbout';
import SecondShortAbout from './ShortAbout/SecondShortAbout';


const Homepage = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <FirstShortAbout></FirstShortAbout>
            <SecondShortAbout></SecondShortAbout>
            <Services></Services>
            
            <Footer></Footer>
        </div>
    );
};

export default Homepage;