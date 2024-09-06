import styled from 'styled-components'; //Styled Components
import Colors from '../constant/Colors'; //Var Colors 
import Font from '../constant/Font'; //Var Font

export const NavStyle = styled.header `

    /* Header */
    header {
        display: flex;
        position: fixed;
        justify-content: space-around;
        background-color: ${Colors.black};
        padding: 0rem 2rem;
        width:100%;
        height: 50px;
        z-index: 100;

        /* Nav Left */
        #left-nav {
            display: flex;
            align-items: center;
            width: 40%;

            img {
                height: 20px;
            }
        }

        /* Div Right */
        #right-nav {
            display: flex;
            align-items: center;
            width: 40%;

            /* Nav Desktop */
            #nav-desktop {
                width: 100%;
                position: relative;

                ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-evenly;

                    /* Sections Home */
                    li {

                        a {
                            text-decoration: none;
                            list-style: none;
                            text-transform: uppercase;
                            font-size: ${Font.txt_12};
                            color: ${Colors.off_white};
                            position: relative;
                            display: inline-block;
                        }

                        /* Effect Hover */
                        a::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -3px;
                            width: 0;
                            height: 1px;
                            background-color: ${Colors.red_1};
                            transition: width 0.3s ease-in-out;
                        }

                        a:hover::after {
                            width: 100%;
                        }
                    }

                    /* Change Language */
                    .content-lng {
                        display:flex;
                        flex-direction: column;

                        /* LI Language */
                        .lgn-li {
                            display:flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            gap: 0.3rem;
                        }

                        /* Effect Rotation Arrow */
                        .arrow-rotation {
                            transition: transform 0.3s ease-in-out;
                        }

                        &:hover .arrow-rotation {
                            transform: rotate(90deg);
                        }

                        /* Options */
                        ul{
                            position: absolute;
                            top: 100%;
                            display: flex;
                            flex-direction: column;
                            z-index: 1000;
                            background-color: ${Colors.black};
                            margin-top: 0.9rem;
                            
                            li {
                                
                                button {
                                    text-align: start;
                                    width: 100%;
                                    border: none;
                                    cursor: pointer;
                                    text-transform: uppercase;
                                    font-size: ${Font.txt_12};
                                    color: ${Colors.off_white};
                                    background-color: transparent;
                                    padding: 1rem
                                }

                                button:hover {
                                    background-color: ${Colors.dark_gray};
                                }
                            }
                        }
                    }
                }
            }

            /* Menu Hamburguer */
            #hamburger-menu {
                display: none;
                flex-direction: column;
                justify-content: space-around;
                width: 100%;
                height: 30px;
                cursor: pointer;

                 /* Icon Hamburguer */
                .bar {
                    width: 100%;
                    height: 1px;
                    background-color: ${Colors.white};
                    transition: 0.3s;
                    border-radius: 15px;
                }

                /* Animation Open and Close*/
                .bar.open:nth-child(1) {
                    transform: rotate(45deg) translate(8px, 8px);
                    background-color: ${Colors.red_1};
                }

                .bar.open:nth-child(2) {
                    opacity: 0;
                }

                .bar.open:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                    background-color: ${Colors.red_1};
                }
            }

            /* Menu Mobile */
            #nav-mobile {
                display: none;
                flex-direction: column;
                background-color: ${Colors.bg_mobile};
                position: absolute;
                top: 49px; 
                right: 0;
                width: 50vw;
                height: 100vh;
                box-shadow: 0px 8px 16px ${Colors.shadow};
                backdrop-filter: blur(10px);
                z-index: 100;

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    .content-lng {
                        .lgn-li {
                            display: flex;
                            gap: 0.3rem;
                            text-transform: uppercase;
                            font-size: ${Font.txt_12};
                            color: ${Colors.off_white};
                        }
                    }

                    li{
                        padding: 15px;

                        a {
                            width: 100%;
                            display: block;
                            z-index: 1000;
                            color: ${Colors.off_white};
                            text-decoration: none;
                            text-transform: uppercase;
                            font-size: ${Font.txt_12};
                        }
                    }

                    button {
                        z-index: 1000;
                        padding-left: 1rem;
                        border: none;
                        background: transparent;
                        color: ${Colors.white};
                        font-size: ${Font.txt_12};
                        text-transform: uppercase;
                    }
                }
            }
            
            /* Show Menu Mobile Options */
            #nav-mobile.open {
                display: flex;
            }


        } 
    }




    /* Responsive */

    /* Tablet */
    @media (max-width:1000px) {
        header {
            justify-content: space-between;
            padding: 0 2rem 0 2rem;

            #right-nav {
                width: 30px;

                #nav-desktop {
                    display: none;
                }

                #hamburger-menu {
                    display: flex;
                }
            }   
        }
    }

    /* Mobile */
    @media (max-width:300px) {
        header {
            
            #left-nav {
                img {
                    height: 20px;
                }
            }

            #right-nav {
                #nav-mobile {
                    width: 100vw;
                    
                    ul {
                        width: 100%;
                        margin-top: 1rem;

                        li {

                            a {
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
`