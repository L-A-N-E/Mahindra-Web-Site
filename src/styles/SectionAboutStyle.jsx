import styled from 'styled-components'  //Styled Components
import Colors from '../constant/Colors' //Var Colors
import Font from '../constant/Font' //Var Fonts
import backgroundAbout from '../assets/home/about/teste.png' //Background Section

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

    @media (max-width: 700px) {
        height: 100dvh;
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

            a {
                button {
                    width: 100%;
                    padding: 1rem 3rem;
                    background-color: ${Colors.red_1};
                    background-image: linear-gradient(to left, ${Colors.red_1} 50%, ${Colors.red_hover} 50%);
                    background-position: right bottom;
                    background-size: 200% 100%;
                    border: none;
                    border-radius: 10px;
                    color: ${Colors.white};
                    cursor: pointer;
                    font-size: ${Font.txt_12};
                    font-weight: ${Font.txt_400w};
                    text-transform: uppercase;
                    transition: background-position 0.5s ease-in-out;
                }

    
                button:hover {
                    background-position: left bottom;
                }
        }

    @media (max-width: 700px) {
        gap: 1.3rem;
    }   
`