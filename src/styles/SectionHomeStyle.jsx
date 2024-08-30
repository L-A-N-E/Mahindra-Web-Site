import styled from 'styled-components';
import banner1 from '../assets/home/banners/banner-1.png';
import banner2 from '../assets/home/banners/banner-2-editada.png';

export const SectionHomeStyle = styled.section `

    section {

        .banner-welcome {
            width: 100%;
            height: 90vh;

            .b1 {
                background-image: url(${banner1});
                background-position: center;
                background-size: cover;
            }

            .b2 {
                background-image: url(${banner2});
                background-position: center;
                background-size: cover;
            }

            .b3 {
                background-color: #744b4b;
            }

            .banner {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .txt-center-home {
                text-transform: uppercase;
                text-align: center;
                color: #fff;
                text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.918);

                #txt-rise {
                    font-size: 4.6rem;
                    font-weight: 700;
                }

                #txt-race {
                    font-size: 2rem;
                    font-weight: 600;
                }
            }
        }
    }

    .swiper-button-prev {
        transition: ease-in-out 0.2s;
        color: #EDEDED;
    }

    .swiper-button-prev:hover {
        transition: ease-in-out 0.3s;
        color: #f50000b8;
    }

    .swiper-button-disabled {
        color: #fff;
    }

    .swiper-button-next {
        transition: ease-in-out 0.2s;
        color: #fff;
    }

    .swiper-button-next:hover {
        transition: ease-in-out 0.3s;
        color: #f50000b8;
    }
`