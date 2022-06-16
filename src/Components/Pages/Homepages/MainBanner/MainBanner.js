import React from 'react';

import "./MainBanner.css";
import borderWave from "../../../../images/border-wave.svg";
import bg1 from '../../../../images/bg1.png';
import bg2 from '../../../../images/bg2.png';
import bg4 from '../../../../images/bg4.png';
import bg3 from '../../../../images/bg3.png';
import bg5 from '../../../../images/bg5.png';
import Header from '../Header/Header';


const MainBanner = () => {
    return (
        <div>
            <div className="main-banner" sx={{height: '900'}}>
                <img src={bg1} alt="" className="bg1" />
                <img src={bg2} alt="" className="bg2" />
                <img src={bg3} alt="" className="bg3" />
                <img src={bg4} alt="" className="bg4" />
                <img src={bg5} alt="" className="bg5" />
                <Header></Header>
                </div>
                <img src={borderWave} alt="" />
        </div>
    );
};

export default MainBanner;