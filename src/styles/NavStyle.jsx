import styled from 'styled-components';

export const NavStyle = styled.header `

    /* Header */
    header {
        display: flex;
        justify-content: space-between;
        background-color: #161616;
        padding: 0rem 2rem;
        height: 70px;
        width:100%;

        #left-nav {
            display: flex;
            align-items: center;
        }

        /* Div Right */
        #right-nav {
            display: flex;
            align-items: center;
            width: 50%;

            /* Nav Desktop */
            #nav-desktop {
                width: 100%;
                position: relative;

                ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-evenly;

                    /* Sections */
                    li {
                       a {
                            text-decoration: none;
                            list-style: none;
                            text-transform: uppercase;
                            font-size: 14px;
                            color: #EDEDED
                       }

                       a::after {
                            color: #ccc;
                       }

                       button {
                            text-align: start;
                            width: 100%;
                            border: none;
                            cursor: pointer;
                            text-transform: uppercase;
                            font-size: 14px;
                            color: #EDEDED;
                            background-color: transparent;
                       }

                       button:hover {
                            background-color: #353535;
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
                            margin-top: 1rem;
                            
                            li {
                                button {
                                    padding: 1rem
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
                    height: 4px;
                    background-color: #fff;
                    transition: 0.3s;
                }

                /* Animation */
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
                background-color: #171717;
                position: absolute;
                top: 69px; 
                right: 0;
                width: 50vw;
                height: 100vh;
                box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
                z-index: 1000;

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li{
                        padding: 15px;

                        a {
                            text-decoration: none;
                            color: #EDEDED;
                            display: block;
                            width: 100%;
                            text-transform: uppercase;
                        }
                    }

                    button {
                        background: transparent;
                        color: #fff;
                        border: none;
                        padding-left: 1rem;
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
                    }
                }
            }
        }
    }
`
