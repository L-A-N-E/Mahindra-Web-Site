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

            /* Nav Mobile */
            #nav-mobile {
                display:none;
            }
        }
    }




    /* Responsive */

    @media (max-width:1000px) {
        header {
            padding: 0 2rem 0 2rem;
        }

        #nav-desktop {
            display: none;
        }


    }

`
