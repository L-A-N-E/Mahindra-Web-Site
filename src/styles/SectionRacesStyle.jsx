import styled from 'styled-components';
import Font from '../constant/Font'
import Colors from '../constant/Colors'

export const SectionRacesStyle = styled.section `
    
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        height: 100dvh;
        background: rgb(204,204,210);
        background: linear-gradient(90deg, rgba(204,204,210,1) 0%, rgba(237,237,237,1) 100%);

        #title-race {
            margin-top: 50px;
            text-transform: uppercase;
            font-size: ${Font.txt_2rem};
            color: ${Colors.black};
            h1{
                font-weight: bolder;
            }
            
        }

        .swiper{
            width: 100%;
            .swiper-slide{
                width: 80%;
                height: 80dvh;
                padding: 5rem 2rem;
                display: flex;
                justify-content: space-between;
                align-items: end;

                .container-info{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    h3{
                        font-size: ${Font.txt_3rem};
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    h2{
                        font-size: ${Font.txt_2rem};
                        font-weight: lighter;
                    }
                    p{
                        font-size: ${Font.txt_1rem};
                        text-transform: uppercase;
                    }
                    .img-flag{
                        img{
                            height: 200px;
                        }
                    }
                }

                .container-img{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem 1rem;
                    backdrop-filter: blur(10px);

                    img{
                        height: 200px;
                        width: 500px;
                    }
                }
            }
            .swiper-slide-next, .swiper-slide-prev{
                filter: blur(2px);
            }
        }
    }

`