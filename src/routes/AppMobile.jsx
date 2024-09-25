
import image1 from '../assets/app_mobile/celularObliquo.png'
import image2 from '../assets/app_mobile/celularSection.png'

import { BackgroundAppMobile, TopAppMobile, ArrowAnimated, ContainerArrow, MidAppMobile, BotAppMobile, Buttons } from '../styles/AppMobileStyle';
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
const {ref:cellText, inView:textVisible} = useInView({
    triggerOnce:true
});

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

                    <div className='container-texts'>
                        <div className={textVisible ? 'textbox1 animate-txt-r' : 'textbox1'} ref={cellText}>
                            <h2>O que é o TRacer?</h2>
                            <br />
                            <p>O TRacer é o primeiro aplicativo que transforma a paixão pela Fórmula E em uma competição interativa e emocionante. Você escala seus pilotos favoritos, participa de Clubs com outros fãs e acumula pontos com base no desempenho real dos corredores. A cada corrida, você pode subir no ranking global e mostrar que entende mais de Fórmula E do que qualquer outra pessoa.</p>
                        </div>
                        
                        <div className={textVisible ? 'textbox1 animate-txt-l' : 'textbox1'} >
                        <h2>Como Funciona?</h2>
                        <br />
                        <p>O TRacer é simples, mas altamente competitivo. Aqui está como funciona:</p>
                        <br />
                        <ul>
                            <li><strong>Monte Seu Time:</strong> Escolha dois pilotos da Fórmula E para representar sua equipe a cada corrida.</li><br />
                            <li><strong>Pontuação Dinâmica:</strong> A cada corrida, você acumula pontos baseados no desempenho real dos pilotos, levando em conta vitórias, voltas rápidas e posições finais.</li><br />
                            <li><strong>Desafie Fãs no Club:</strong> Participe de competições em grupo, chamados Clubs, onde você compete com outros usuários e recebe recompensas por sua performance.</li><br />
                            <li><strong>Ranking Global:</strong> Seus pontos determinam sua posição no ranking global. Prove que você é o maior fã de Fórmula E do mundo!</li><br />
                        </ul>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-r' : 'textbox1'}>
                            <h2>Viva a Emoção da Fórmula E de Onde Estiver!</h2>
                            <br/>
                            <p>Com TRacer, cada corrida importa. Acompanhe as performances em tempo real e veja seu time brilhar!</p>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-l' : 'textbox1'}>
                            <h2>Junte-se aos CLUBS e Desafie os Maiores Fãs!</h2>
                            <br/>
                            <p>Forme alianças ou entre em competições acirradas. Prove sua paixão pela Fórmula E e domine o cenário dos Clubs.</p>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-r' : 'textbox1'}>
                            <h2>Entre na Corrida e Prove que Você é o Melhor!</h2>
                            <br/>
                            <p>Acompanhe a Fórmula E de um jeito único. Seus pilotos, suas escolhas, suas vitórias. Você está pronto para o desafio?</p>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-l' : 'textbox1'}>
                            <h2>Seja o Chefe de Equipe da Fórmula E!</h2>
                            <br/>
                            <p>No TRacer, você assume o controle. Escale seus corredores e acumule pontos a cada volta, rumo à glória!</p>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-r' : 'textbox1'}>
                            <h2>Compita Globalmente. Marque Presença no Ranking!</h2>
                            <br/>
                            <p>Seu time pode ser o próximo a dominar o mundo da Fórmula E. Participe, desafie e lidere o ranking mundial de fãs.</p>
                        </div>

                        <div className={textVisible ? 'textbox1 animate-txt-l' : 'textbox1'}>
                            <h2>Funcionalidades Adicionais</h2>
                            <br/>
                            <ul>
                                <li><strong>Notificações Personalizadas:</strong> Receba alertas sobre as corridas e atualizações de pontuação em tempo real.</li><br/>
                                <li><strong>Estatísticas Detalhadas:</strong> Veja o desempenho dos seus pilotos com gráficos e dados de cada corrida.</li><br/>
                                <li><strong>Personalização de Perfil:</strong> Crie um perfil personalizado com avatares, estatísticas e conquistas.</li><br/>
                            </ul>
                        </div>
                </div>
            </div>
        </MidAppMobile>

        <BotAppMobile>
            <div className="final-section">
                <h1>FAÇA O DOWNLOAD</h1>
                <Buttons>
                    <div className='final-section-buttons'>
                        <Link to={'/sign-up'} onClick= {handleLinkClickSignUp} className='txt-none link'><button>SIGN-UP</button></Link>
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
