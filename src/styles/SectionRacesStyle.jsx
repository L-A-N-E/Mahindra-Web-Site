import styled from 'styled-components';
import Font from '../constant/Font'
import Colors from '../constant/Colors'

import Background from '../assets/home/banners/banner-3.png'

export const SectionRacesStyle = styled.section `
    
    section {
        .flag {
            height: 50px;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        height: 100dvh;
        background-color: ${Colors.dark_gray};
        /* background: rgb(204,204,204);
        background: linear-gradient(200deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 50%, rgba(204,204,204,1) 100%); */
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
            
            /* Slides */
            .swiper-slide{
                width: 600px;
                height: 450px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;

                .main-card {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    gap: 1rem;

                    /*  */
                    .top-card {
                        width: 100%;
                        height: 50px;

                        .info-card{
                            display: flex;
                            width: 100%;
                            height: 100%;
                            gap: 1rem;

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
                                    font-weight: ${Font.txt_700w};
                                    text-transform: uppercase;
                                    color: ${Colors.white};
                                }
                            }
                        }
                    }

                    /* End */
                    .mid-card {
                        display: flex;
                        flex-grow: 1;
                        align-items: center;
                        justify-content: center;
                        background: rgb(23,23,23);
                        background: linear-gradient(328deg, rgba(23,23,23,1) 0%, rgba(71,71,71,1) 50%, rgba(23,23,23,1) 100%);

                        h1 {
                            font-weight: ${Font.txt_900w};
                            text-transform: uppercase;
                            font-size: ${Font.txt_60};
                            color: ${Colors.white};
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

`