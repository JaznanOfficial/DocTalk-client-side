import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import Services from './Services/Services';
import FirstShortAbout from './ShortAbout/FirstShortAbout';
import SecondShortAbout from './ShortAbout/SecondShortAbout';
import SingleService from './SingleService/SingleService';


const Homepage = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <FirstShortAbout></FirstShortAbout>
            <SecondShortAbout></SecondShortAbout>
            <Services></Services>
            <SingleService></SingleService>
            
        </div>
    );
};

export default Homepage;