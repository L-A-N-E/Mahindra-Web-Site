import styled from 'styled-components';
import Font from '../constant/Font'
import Colors from '../constant/Colors'

import Background from '../assets/home/banners/banner-3.png'

export const SectionRacesStyle = styled.section `
    
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        height: 110dvh;
        background-color: ${Colors.dark_gray};
        
        /* Title */
        #title-race {
            text-transform: uppercase;
            font-size: ${Font.txt_3rem};
            color: ${Colors.red_hover};
            font-style: italic;
            
            h1{
                font-weight: bolder;
            }
            
        }
        
        /* Swiper */
        .swiper{
            width: 100%;
            height: 500px;
            
            /* Slides */
            .swiper-slide{
                width: 40%;
                height: 450px;
                background: transparent;
                
                .main-card {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    gap: 1rem;
                    -webkit-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
                    -moz-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
                    box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
                    
                    /*  */
                    .top-card {
                        width: 100%;
                        height: 50px;
                        
                        .info-card{
                            display: flex;
                            width: 100%;
                            height: 100%;
                            gap: 1rem;
                            
                            .flag-card {
                                .flag{
                                    height: 50px;
                                }
                            }
                            
                            .name-data {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-evenly;
                                
                                .data {
                                    font-size: ${Font.txt_16};
                                    font-weight:${Font.txt_400w};
                                    font-style: italic;
                                    color: ${Colors.off_white};
                                }
                                
                                .name {
                                    font-size: ${Font.txt_1rem};
                                    font-weight: ${Font.txt_700w};
                                    text-transform: uppercase;
                                    color: ${Colors.white};
                                }
                            }
                        }
                    }
                    
                    /* End */
                    .end-card {
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        align-items: center;
                        justify-content: center;
                        background: rgb(23,23,23);
                        background: linear-gradient(328deg, rgba(23,23,23,1) 0%, rgba(71,71,71,1) 50%, rgba(23,23,23,1) 100%);
                        
                        .city {
                            h1 {
                                font-weight: ${Font.txt_900w};
                                text-transform: uppercase;
                                font-size: ${Font.txt_3rem};
                                color: ${Colors.white};
                            }
                        }

                        .btn-card {
                            button {
                                background: transparent;
                                border: none;
                                display: flex;
                                align-items: center;
                                height: 100%;
                                gap: 0.3rem;
                                color: ${Colors.white};
                                cursor: pointer;
                                text-transform: uppercase;
                            }

                            /* Effect Rotation Arrow */
                            .arrow-rotation {
                                transition: transform 0.3s ease-in-out;
                            }

                            &:hover .arrow-rotation {
                                transform: rotate(90deg);
                            }
                        }
                        
                    }
                }
            }
            
            /* Next Slide */
            .swiper-slide-next, .swiper-slide-prev{
                filter: blur(2px);
            }
        }
    }

    @media (max-width: 1024px){
        section {
            .swiper {
                .swiper-slide{
                    width: 80%;
                }
            }
        }
    }

    @media (max-width: 600px){
        section {
            .swiper {
                .swiper-slide{
                    width: 90%;
                    height: 400px;
                }
            }
        }
    }
`