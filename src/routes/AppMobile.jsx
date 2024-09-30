// Importando as imagens
import image1 from '../assets/app_mobile/celularObliquo.png'

// Importando os componentes
import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile, Buttons} from '../styles/AppMobileStyle';

// Importando as dependências
import { Link } from 'react-router-dom';

// Importando os Hooks
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

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
    const {ref:cellImage, inView:cellVisible} = useInView({
        triggerOnce:true
    });

    const {ref:cellText, inView:textVisible} = useInView({
        triggerOnce:true
    });


return (
    <>
    <BackgroundAppMobile>
        {/* Parte de cima do mobile */}
        <TopAppMobile>
            <div className="top-section">
                <div className="titulo-wrapper">
                    <h1 className="titulo">{t("mobile-appU")}</h1>
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

        {/* Container  */}
        <ContainerArrow>
            <ArrowAnimated>
                <div className="center">
                    <div className="arrow">
                    </div>
                </div>
            </ArrowAnimated>
        </ContainerArrow>

        {/* Parte do meio do mobile */}
        <MidAppMobile>
            <div className="middle-section">
            <div className='card' ref={cellText}>
                <div className="btn1"></div>
                <div className="btn2"></div>
                <div className="btn3"></div>
                <div className="btn4"></div>
                <div className="card-int">

                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText} >
                        {t('what')}
                        <span className="hidden">
                        {t('desc1')}
                            </span>
                    </div>


                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText} >
                    {t('thrill')}
                        <span className="hidden">
                        {t('desc2')}
                            </span>
                    </div>

                    
                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                    {t('clubs')}
                        <span className="hidden">
                        {t('desc3')}
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText}>
                    {t('challenge')}
                        <span className="hidden">
                        {t('desc4')}
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                    {t('how')}
                        <span className="hidden">
                        
                            <li><strong>{t('howDesc1t')}</strong> {t('howDesc1')}</li><br />
                            <li><strong>{t('howDesc2t')}</strong> {t('howDesc2')}</li><br />
                            <li><strong>{t('howDesc3t')}</strong> {t('howDesc3')}</li><br />
                            <li><strong>{t('howDesc4t')}</strong> {t('howDesc4')}</li><br />
                        
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
            <div className="final-section">
                <h1>{t('download-faca')}</h1>
                <Buttons>
                    <div className='final-section-buttons'>
                        <Link to={'/sign-up'} onClick= {handleLinkClickSignUp} className='txt-none link'><button>{t("signup")}</button></Link>
                        <Link to={'/login'} onClick= {handleLinkClickLogin} className='txt-none link'><button>{t('login')}</button></Link>
                    </div>
                </Buttons>
                <h2>{t('baixe')}</h2>
                <span>
                    <button className="button" data-text="Awesome">
                        <span className="actual-text">&nbsp;{t("now")}&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;{t("now")}&nbsp;</span>
                    </button>
                </span>
            </div>
        </BotAppMobile>
    </BackgroundAppMobile>
    </>
);
}

export default App;
