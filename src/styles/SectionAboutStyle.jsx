import styled from 'styled-components';
import backgroundAbout from '../assets/about/bg.png'

export const SectionAboutStyle = styled.section `
    section {
        height: 90vh;
        width: 100%;
        background-image: url(${backgroundAbout});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;

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
                    font-size: 30px;
                    text-transform: uppercase;
                    font-weight: 200;
                    color: #ff0000;
                }

                p {
                    text-align: justify;
                }

                button {
                    font-weight: 700;
                    text-transform: uppercase;
                    background-color: #ff0000;
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    width: 200px;
                    padding: 1rem 3rem;
                    cursor: pointer;
                    background-image: linear-gradient(to left, #ff0000 50%, #880000 50%);
                    background-size: 200% 100%;
                    background-position: right bottom;
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