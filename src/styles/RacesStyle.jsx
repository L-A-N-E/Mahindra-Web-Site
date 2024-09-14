import styled from 'styled-components';
import Font from '../constant/Font'
import Colors from '../constant/Colors'
import Background from '../assets/home/banners/banner-teste.png'

export const RaceStyle = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    height: 110dvh;
    background-image: url(${Background});
    background-position: bottom;
        
        /* Swiper */
        .swiper{
            width: 100%;
            height: 500px;
            
            /* Slides */
            .swiper-slide{
                width: 40%;
                height: 450px;
                background: transparent;

                @media (max-width: 1024px){
                    width: 80%;
                }

                @media (max-width: 600px){
                    width: 90%;
                    height: 400px;
                }
            }
            
            /* Next Slide */
            .swiper-slide-next, .swiper-slide-prev{
                filter: blur(2px);
            }
        }
`

export const RaceContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    -webkit-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
    -moz-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
    box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
`

export const RaceTop = styled.div `
    width: 100%;
    height: 50px;
`

export const RaceInfo = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1rem;
`

export const RaceFlag = styled.div `
    .flag{
        height: 50px;
    }
`

export const RaceNameData = styled.div `
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
`

export const RaceBottom = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background: rgb(23,23,23);
    background: linear-gradient(328deg, rgba(23,23,23,1) 0%, rgba(71,71,71,1) 50%, rgba(23,23,23,1) 100%);
`

export const RaceMainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`

export const RaceSeeMore = styled.div `
    display: flex;
    gap: 0.3rem;
    cursor:pointer;

    /* Effect Rotation Arrow */
    .arrow-rotation {
        transition: transform 0.3s ease-in-out;
    }

    &:hover .arrow-rotation {
        transform: rotate(90deg);
    }
`

export const RaceButton = styled.button `
    cursor:pointer;
    background: transparent;
    border: none;
    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    font-size: ${Font.txt_12};
    color: ${Colors.off_white};
    position: relative;
    display: inline-block;
    font-weight: 300;
    transition: all 0.3s;

    /* Effect Hover Line */
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`