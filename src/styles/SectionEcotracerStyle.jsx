import styled from 'styled-components';
import BackgroundEcotracer from '../assets/home/ecotracer/background.png'
import Colors from '../constant/Colors';
import Font from '../constant/Font';

export const SectionEcotracerStyle = styled.section `
    height: 100dvh;
    width: 100%;
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        height: auto;
    }
`
export const EcotracerLeft = styled.section`
    width: 40%;
    background-image: url(${BackgroundEcotracer});
    background-position: center;
    background-size: cover;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.35);
    z-index: 10;

    @media (max-width: 600px) {
        display: none;
    }
`

export const EcotracerRight = styled.section`
    width: 60%;
    background-color: ${Colors.off_white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const EcotracerTitle = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: ${Font.txt_900w};
        font-size: ${Font.txt_3rem};
        color: ${Colors.dark_gray};
    }

    h2 {
        font-weight: ${Font.txt_900w};
        font-size: ${Font.txt_3rem};
        color: ${Colors.green}
    }

    @media (max-width: 600px) {
        text-align: center;
        
        h1 {
            font-size:${Font.txt_2rem};
        }

        h2 {
            font-size: ${Font.txt_2rem};
        }
    }
`

export const EcotracerParagraph = styled.div`
    p {
        font-size: ${Font.txt_16};
        text-align: justify;
    }
`

// @media (max-width: 600px){
//         #right-eco {
//             width: 100%;

//             .title-eco {
//                 text-align: center;

//                 h1 {
//                     font-size: ${Font.txt_2rem}
//                 }

//                 h2 {
//                     font-size: ${Font.txt_2rem}
//                 }
//             }
//         }
//     }
// }

