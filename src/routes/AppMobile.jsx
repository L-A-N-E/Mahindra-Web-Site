
import image1 from '../assets/app_mobile/celularObliquo.png'
import image2 from '../assets/app_mobile/celularReto.png'
import cursor1 from '../assets/app_mobile/cursorCar.png'


import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile, Buttons, TopAppMobileImage} from '../styles/AppMobileStyle';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function App() {

    const handleLinkClickLogin = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de redirecionar
        window.open("/login", "_blank"); // Abre a rota em uma nova aba
    };
    const handleLinkClickSignUp = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de redirecionar
        window.open("/sign-up", "_blank"); // Abre a rota em uma nova aba
    };

const {ref:cellImage, inView:cellVisible} = useInView();

const {ref:cellText, inView:textVisible} = useInView();


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

        {/* <TopAppMobileImage>
            <div className="top-section">
                <div className="titulo-wrapper">
                    <h1 className="titulo">MOBILE APP</h1>
                </div>
                    <div className="image-wrapper">
                        <img
                        className={cellVisible ? 'animate-img' : ''}
                        ref={cellImage}
                        src={image2}
                        alt="Celular Oblíquo">
                        </img>
                    </div>
            </div>
        </TopAppMobileImage>  */}
        

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
                        O que é o TRacer?
                        <span class="hidden">
                        O TRacer é o primeiro aplicativo que transforma a paixão pela Fórmula E em uma competição interativa e emocionante.
                            </span>
                    </div>


                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText} >
                    Viva a Emoção da Fórmula E de Onde Estiver!
                        <span class="hidden">
                        Com TRacer, cada corrida importa. Acompanhe as performances em tempo real e veja seu time brilhar!
                            </span>
                    </div>

                    
                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                    Junte-se aos CLUBS e Desafie os Maiores Fãs!
                        <span class="hidden">
                        Forme alianças ou entre em competições acirradas. Prove sua paixão pela Fórmula E e domine o cenário dos Clubs.
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-l' : 'hello'} ref={cellText}>
                    Entre na Corrida e Prove que Você é o Melhor!
                        <span class="hidden">
                        Acompanhe a Fórmula E de um jeito único. Seus pilotos, suas escolhas, suas vitórias. Você está pronto para o desafio?
                            </span>
                    </div>

                    <div className={textVisible ? 'hello text-animated-r' : 'hello'} ref={cellText}>
                        Como Funciona?
                        <span class="hidden">
                        
                            <li><strong>Monte Seu Time:</strong> Escolha dois pilotos da Fórmula E para representar sua equipe a cada corrida.</li><br />
                            <li><strong>Pontuação Dinâmica:</strong> A cada corrida, você acumula pontos baseados no desempenho real dos pilotos, levando em conta vitórias, voltas rápidas e posições finais.</li><br />
                            <li><strong>Desafie Fãs no Club:</strong> Participe de competições em grupo, chamados Clubs, onde você compete com outros usuários e recebe recompensas por sua performance.</li><br />
                            <li><strong>Ranking Global:</strong> Seus pontos determinam sua posição no ranking global. Prove que você é o maior fã de Fórmula E do mundo!</li><br />
                        
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
                <div class="card">
                    <div class="shadow">⚠️ Follow traffic rules</div>
                </div>
                <h1>FAÇA O DOWNLOAD</h1>
                <Buttons>
                    <div className='final-section-buttons'>
                        <Link to={'/sign-up'} onClick= {handleLinkClickSignUp} className='txt-none link'><button>SIGNUP</button></Link>
                        <Link to={'/login'} onClick= {handleLinkClickLogin} className='txt-none link'><button>LOGIN</button></Link>
                    </div>
                </Buttons>
                <h2>BAIXE O APP</h2>
                <h1><span>NOW</span></h1>
            </div>
        </BotAppMobile>
    </BackgroundAppMobile>
    </>
);
}

export default App;
