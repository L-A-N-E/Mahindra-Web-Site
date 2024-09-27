
import image1 from '../assets/app_mobile/celularObliquo.png'
import image2 from '../assets/app_mobile/celularReto.png'


import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile, Buttons} from '../styles/AppMobileStyle';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function App() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleLinkClickLogin = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de redirecionar
        window.open("/login", "_blank"); // Abre a rota em uma nova aba
    };
    const handleLinkClickSignUp = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de redirecionar
        window.open("/sign-up", "_blank"); // Abre a rota em uma nova aba
    };

const {ref:cellImage, inView:cellVisible} = useInView({
    triggerOnce:true
});

const {ref:cellText, inView:textVisible} = useInView({
    triggerOnce:true
});


return (
    <>
    <BackgroundAppMobile>
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
            <div className='card' ref={cellText}>
                <div class="btn1"></div>
                <div class="btn2"></div>
                <div class="btn3"></div>
                <div class="btn4"></div>
                <div class="card-int">

                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText} >
                        {t('what')}
                        <span class="hidden">
                        {t('desc1')}
                            </span>
                    </div>


                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText} >
                    {t('thrill')}
                        <span class="hidden">
                        {t('desc2')}
                            </span>
                    </div>

                    
                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                    {t('clubs')}
                        <span class="hidden">
                        {t('desc3')}
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText}>
                    {t('challenge')}
                        <span class="hidden">
                        {t('desc4')}
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                    {t('how')}
                        <span class="hidden">
                        
                            <li><strong>{t('howDesc1t')}</strong> {t('howDesc1')}</li><br />
                            <li><strong>{t('howDesc2t')}</strong> {t('howDesc2')}</li><br />
                            <li><strong>{t('howDesc3t')}</strong> {t('howDesc3')}</li><br />
                            <li><strong>{t('howDesc4t')}</strong> {t('howDesc4')}</li><br />
                        
                            </span>
                    </div>

                </div>
                <div class="top">
                    <div class="camera">
                        <div class="int"></div>
                    </div>
                    <div class="speaker"></div>
                </div>
                </div>
            </div>
        </MidAppMobile>

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
                    <button class="button" data-text="Awesome">
                        <span class="actual-text">&nbsp;{t("now")}&nbsp;</span>
                        <span aria-hidden="true" class="hover-text">&nbsp;{t("now")}&nbsp;</span>
                    </button>
                </span>
            </div>
        </BotAppMobile>
    </BackgroundAppMobile>
    </>
);
}

export default App;
