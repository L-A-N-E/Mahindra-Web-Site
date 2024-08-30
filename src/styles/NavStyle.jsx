import styled from 'styled-components';

export const NavStyle = styled.header `

    /* Header */
    header {
        display: flex;
        justify-content: space-around;
        background-color: #171717;
        padding: 0rem 2rem;
        height: 50px;
        width:100%;

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
                            font-size: 12px;
                            color: #EDEDED;
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
                            background-color: #ff0000;
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

                        /* Options */
                        ul{
                            position: absolute;
                            top: 100%;
                            display: flex;
                            flex-direction: column;
                            z-index: 1000;
                            background-color: #171717;
                            margin-top: 0.9rem;
                            
                            li {
                                
                                button {
                                    text-align: start;
                                    width: 100%;
                                    border: none;
                                    cursor: pointer;
                                    text-transform: uppercase;
                                    font-size: 12px;
                                    color: #EDEDED;
                                    background-color: transparent;
                                    padding: 1rem
                                }

                                button:hover {
                                    background-color: #353535;
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
                    background-color: #fff;
                    transition: 0.3s;
                    border-radius: 15px;
                }

                /* Animation Open and Close*/
                .bar.open:nth-child(1) {
                    transform: rotate(45deg) translate(8px, 8px);
                    background-color: #ff0000;
                }

                .bar.open:nth-child(2) {
                    opacity: 0;
                }

                .bar.open:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                    background-color: #ff0000;
                }
            }

            /* Menu Mobile */
            #nav-mobile {
                display: none;
                flex-direction: column;
                background-color: #17171792;
                position: absolute;
                top: 49px; 
                right: 0;
                width: 50vw;
                height: 100vh;
                box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.625);
                backdrop-filter: blur(10px);
                z-index: 100;

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    li{
                        padding: 15px;

                        a {
                            text-decoration: none;
                            color: #EDEDED;
                            display: block;
                            width: 100%;
                            text-transform: uppercase;
                            z-index: 1000;
                        }
                    }

                    button {
                        background: transparent;
                        color: #fff;
                        border: none;
                        padding-left: 1rem;
                        text-transform: uppercase;
                        z-index: 1000;
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
