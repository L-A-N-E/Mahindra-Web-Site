import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/app_mobile/celularObliquo.png'
import image2 from '../assets/app_mobile/celularSection.png'
import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile } from '../styles/AppMobileStyle';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

function App() {

    const handleLinkClick = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de redirecionar
        window.open("/", "_blank"); // Abre a rota em uma nova aba
    };

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
            <div className="middle-section">
                <img src={image2} alt="Celular Gigante" />
            </div>
        </MidAppMobile>

        <BotAppMobile>
            <div className="final-section">
                <h1>FAÇA O DOWNLOAD</h1>
                <div className='final-section-buttons'>
                    <Link to={'/sign-up'} onClick= {handleLinkClick} className='txt-none link'><button>SIGN-UP</button></Link>
                    <Link to={'/login'} onClick= {handleLinkClick} className='txt-none link'><button>LOGIN</button></Link>
                </div>
                <h2>BAIXE O APP</h2>
                <h1><span>NOW</span></h1>
            </div>
        </BotAppMobile>
    </BackgroundAppMobile>
    </>
);
}

export default App;
