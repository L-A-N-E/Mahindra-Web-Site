import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/app_mobile/celularObliquo.png'
import image2 from '../assets/app_mobile/celularSection.png'
import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile } from '../styles/AppMobileStyle';

import { useInView } from 'react-intersection-observer';

function App() {

const {ref:cellImage, inView:cellVisible} = useInView();

return (
    <>
    <BackgroundAppMobile>
        <TopAppMobile>
            <div className="top-section">
                <div className="titulo-wrapper">
                    <h1 className="titulo">MOBILE APP</h1>
                </div>
                <div className="image-wrapper">
                    <img
                    className={cellVisible ? 'animate-img' : ''}
                    ref={cellImage}
                    src={image1}
                    alt="Celular Oblíquo">
                    </img>
                </div>
            </div>
        </TopAppMobile>
        
        <ContainerArrow>
            <ArrowAnimated>
                <div className="center">
                    <div className="arrow">
                    </div>
                </div>
            </ArrowAnimated>
        </ContainerArrow>

        <MidAppMobile>
            <div class="middle-section">
                <img src={image2} alt="Celular Gigante" />
            </div>
        </MidAppMobile>

        <div class="final-section">
            <h1>Faça o Download</h1>
            <button>Login</button>
            <button>Signup</button>
            <h2>Baixe o APP</h2>
            <span>NOW</span>
        </div>
    </BackgroundAppMobile>
    </>
);
}

export default App;
