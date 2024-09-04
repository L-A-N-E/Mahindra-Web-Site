import styled from 'styled-components'; //Styled Components
import Colors from '../constant/Colors'; //Var Colors 
import Font from '../constant/Font'; //Var Fonts
import banner1 from '../assets/home/banners/banner-1.png'; //Banner 1 Section
import banner2 from '../assets/home/banners/banner-2-editada.png'; //Banner 2 Section
import banner3 from '../assets/home/banners/banner-3.png'; //Banner 3 Section
import banner4 from '../assets/home/banners/banner-4.png'; //Banner 4 Section

export const SectionHomeStyle = styled.section `

    section {
        background-color: ${Colors.black};

        .banner-welcome {
            width: 100%;
            height: 100dvh;

            .b1 {
                background-image: url(${banner3});
                background-position: center;
                background-size: cover;
            }

            .b2 {
                background-image: url(${banner2});
                background-position: center;
                background-size: cover;
            }

            .b3 {
                background-image: url(${banner1});
                background-position: center;
                background-size: cover;
            }

            .b4 {
                background-image: url(${banner4});
                background-position: center;
                background-size: cover;
            }

            .banner {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .txt-center-home {
                color: ${Colors.white};
                text-transform: uppercase;
                text-align: center;
                text-shadow: 2px 2px 10px ${Colors.shadow};

                #txt-rise {
                    font-size: ${Font.txt_70};
                    font-weight: 700;
                }

                #txt-race {
                    font-size: ${Font.txt_30};
                    font-weight: 600;
                }
            }
        }
    }



    .swiper-button-prev {
        color: ${Colors.off_white};
        transition: ease-in-out 0.2s;
    }

    .swiper-button-prev:hover {
        color: ${Colors.red_1};
        transition: ease-in-out 0.3s;
    }

    .swiper-button-disabled {
        color: ${Colors.white};
    }

    .swiper-button-next {
        color: ${Colors.white};
        transition: ease-in-out 0.2s;
    }

    .swiper-button-next:hover {
        color: ${Colors.red_1};
        transition: ease-in-out 0.3s;
    }
`