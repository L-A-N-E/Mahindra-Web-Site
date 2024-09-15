import styled from 'styled-components';
import Colors from '../constant/Colors';
import Font from '../constant/Font';
import Pilot1 from '../assets/home/pilots/pilot-1.png'
import Pilot2 from '../assets/home/pilots/pilot-2.png'


export const RaceTrackStyle = styled.main `
    height:100dvh;
    width: 100%;
    display: flex;
`

// Conteudo Principal
export const RaceTrackContent = styled.div `
    width: 100%;
    background: radial-gradient(#131313, ${Colors.black});
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.white};
`

export const RaceTrackCenter = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const RaceTrackCity = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.red_1};

    h1 {
        font-size: ${Font.txt_2rem};
        font-weight: ${Font.txt_300w};
    }
`

// Imagem Circuito
export const RaceTrackCircuit = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        width: 100%;
    }
`

// Informações Sobre o Circuito
export const RaceTrackAboutInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    gap: 3rem;
`

// Informações
export const RaceTrackTextInfo = styled.div `
    text-align: center;
    text-transform: uppercase;
    
    h1 {
        font-size: ${Font.txt_1_5rem};
    }

    p {
        font-size: ${Font.txt_1rem};
    }
`


// Coluna Direita
export const RaceTrackContainerPilots = styled.div `
    width: 400px;
    background-color: ${Colors.dark_gray};
    
    .card-1 {
        background-image: url(${Pilot1});
        background-size: cover;
        background-position: center;
    }
    
    .card-2 {
        background-image: url(${Pilot2});
        background-size: cover;
        background-position: center;
    }

    @media (max-width: 1000px){
        display: none;
    }
`

// Cards
export const RaceTrackCardsRight = styled.div `
    width: 100%;
    height: 50%;
    cursor: pointer;
    opacity: 0.7;
    transition: ease-in-out 0.3s;

    &:hover {
        opacity: 1;
    }
`