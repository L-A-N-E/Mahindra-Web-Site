import styled from 'styled-components'  //Styled Components
import Colors from '../constant/Colors' //Var Colors
import Font from '../constant/Font' //Var Fonts
import backgroundAbout from '../assets/home/about/background.png' //Background Section

export const SectionAboutStyle = styled.section `
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundAbout});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 400px) {
        height: auto;
    }
`

export const AboutContainer = styled.section`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        width: 100%;
        padding:  2rem;
    }
`

export const AboutContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

        h1 {
            color: ${Colors.red_1};
            font-size: ${Font.txt_40};
            font-weight:${Font.txt_800w};
            text-transform: uppercase;
        }
                
            p {
                color: ${Colors.off_white};
                font-size: ${Font.txt_16};
                text-align: center;
                    
            }

    @media (max-width: 700px) {
        gap: 1.3rem;
    }   
`