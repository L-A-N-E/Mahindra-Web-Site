import styled from 'styled-components'; //Styled Components
import Colors from '../constant/Colors'; //Var Colors 
import Font from '../constant/Font'; //Var Fonts
import banner1 from '../assets/home/banners/banner-1.png'; //Banner 2 Section
import banner2 from '../assets/home/banners/banner-2.png'; //Banner 1 Section
import banner3 from '../assets/home/banners/banner-3.png'; //Banner 3 Section
import banner4 from '../assets/home/banners/banner-4.png'; //Banner 4 Section

export const SectionHomeStyle = styled.section `
        background-color: ${Colors.black};

        .swiper {
            width: 100%;
            height: calc(100dvh - 70px);
            

            .b1 {
                background-color: ${Colors.black};
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .b2 {
                background-image: url(${banner2});
                background-position: center;
                background-size: cover;
            }

            .b3 {
                background-image: url(${banner3});
                background-position: center;
                background-size: cover;
            }

            .b4 {
                background-image: url(${banner4});
                background-position: center;
                background-size: cover;
            }
        }



    .swiper-pagination-bullet{
        background-color: ${Colors.red_1};
        transition: ease-in-out 0.2s;
        
    }
    


    .swiper-button-prev {
        display: none;
    }

    .swiper-button-prev:hover {
        display: none;
    }

    .swiper-button-disabled {
        display: none;
    }

    .swiper-button-next {

        display: none;
    }

    .swiper-button-next:hover {
        display: none;
    }
`