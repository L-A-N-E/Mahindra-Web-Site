// Importando as imagens
import image1 from '../assets/app_mobile/celularObliquo.png'

// Importando os componentes
import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile } from '../styles/AppMobileStyle';

// Importando as dependências
import { Link } from 'react-router-dom';

// Importando os Hooks
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import { ButtonRedStyle } from '../styles/ButtonRedStyle'

function App() {

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Função para mudar o Login
    const handleLinkClickLogin = (e) => {
        e.preventDefault();
        window.open("/login", "_blank");
    };
    const handleLinkClickSignUp = (e) => {
        e.preventDefault();
        window.open("/sign-up", "_blank");
    };

    // Animações usando o React-Intersection-Observer
    const { ref: cellImage, inView: cellVisible } = useInView({
        triggerOnce: true
    });

    const { ref: cellText, inView: textVisible } = useInView({
        triggerOnce: true
    });


    return (
        <>
            <BackgroundAppMobile>
                {/* Parte de cima do mobile */}
                <TopAppMobile>
                    <div className="image-wrapper">
                        <img
                            className={cellVisible ? 'animate-img' : ''}
                            ref={cellImage}
                            src={image1}
                            alt="Celular Oblíquo">
                        </img>
                    </div>
                </TopAppMobile>

                {/* Parte do meio do mobile */}
                <MidAppMobile>
                    <div className="middle-section">
                        <div className='card' ref={cellText}>
                            <div className="btn1"></div>
                            <div className="btn2"></div>
                            <div className="btn3"></div>
                            <div className="btn4"></div>

                            <div className="card-int">
                                <div className={textVisible ? 'hello text-animated-l padding-top' : 'hello'} ref={cellText} >
                                    {t('what')}
                                    <span className="hidden">
                                        {t('desc1')}
                                    </span>
                                </div>


                                <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText} >
                                    {t('thrill')}
                                    <span className="hidden">
                                        {t('desc2')}
                                    </span>
                                </div>


                                <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText}>
                                    {t('clubs')}
                                    <span className="hidden">
                                        {t('desc3')}
                                    </span>
                                </div>

                                <div className='width-50'>
                                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                                        {t('challenge')}
                                        <span className="hidden">
                                            {t('desc4')}
                                        </span>
                                    </div>
                                </div>

                                <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText}>
                                    {t('how')}
                                    <span className="hidden">

                                        <li><strong className='red'>{t('howDesc1t')}</strong> <strong className='black'>{t('howDesc1')}</strong></li><br />
                                        <li><strong className='red'>{t('howDesc2t')}</strong> <strong className='black'>{t('howDesc2')}</strong></li><br />
                                        <li><strong className='red'>{t('howDesc3t')}</strong> <strong className='black'>{t('howDesc3')}</strong></li><br />
                                        <li><strong className='red'>{t('howDesc4t')}</strong> <strong className='black'>{t('howDesc4')}</strong></li><br />
                                    </span>
                                </div>

                            </div>
                            <div className="top">
                                <div className="camera">
                                    <div className="int"></div>
                                </div>
                                <div className="speaker"></div>
                            </div>
                        </div>
                    </div>
                </MidAppMobile>

                {/* Parte de baixo do mobile */}
                <BotAppMobile>
                    <h1>{t('download-faca')}</h1>
                    <div className='final-section-buttons'>
                        <Link to={'/sign-up'} onClick={handleLinkClickSignUp} className='txt-none link'>
                            <ButtonRedStyle>{t("signup")}</ButtonRedStyle>
                        </Link>
                        <Link to={'/login'} onClick={handleLinkClickLogin} className='txt-none link'>
                            <ButtonRedStyle>{t('login')}</ButtonRedStyle>
                        </Link>
                    </div>
                </BotAppMobile>


            </BackgroundAppMobile>
        </>
    );
}

export default App;
