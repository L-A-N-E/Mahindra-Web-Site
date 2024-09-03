import styled from 'styled-components'  //Styled Components
import Colors from '../constant/Colors' //Var Colors
import Font from '../constant/Font' //Var Fonts
import backgroundAbout from '../assets/about/bg.png' //Background Section

export const SectionAboutStyle = styled.section `
    section {
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        background-image: url(${backgroundAbout});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        #about-container {
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            padding:  2rem 0 2rem 2rem;

            #about-content {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                h1 {
                    color: ${Colors.red_1};
                    font-size: ${Font.txt_30};
                    text-transform: uppercase;
                    font-weight: 200;
                }

                p {
                    font-size: ${Font.txt_14};
                    text-align: justify;
                }

                button {
                    width: 200px;
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
                    font-weight: 700;
                    text-transform: uppercase;
                    transition: background-position 0.5s ease-in-out;
                }

                    
                button:hover {
                    background-position: left bottom;
                }


            }

        }
    }

    @media (max-width: 700px) {
        section {
            height: 100vh;

            #about-container{
                width: 100%;
                padding:  2rem;

                #about-content {
                    align-items: center;
                    gap: 1.3rem;
                }
            }
        }
    }
`