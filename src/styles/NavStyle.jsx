import styled from 'styled-components';

export const NavStyle = styled.header `

    /* Header */
    header {
        width: 100%;
        height: 70px;
        background-color: #EDEDED;
        display: flex;
        justify-content: space-between;
        padding: 0 4rem 0 4rem;

        /* Div Left */
        #left-nav {
            height: 70px;
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

                ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-between;


                    li{
                       a {
                            text-decoration: none;
                            list-style: none;
                            text-transform: uppercase;
                            font-size: 14px;
                            color: #171717
                       }

                       button {
                            border: none;
                            cursor: pointer;
                            text-transform: uppercase;
                            font-size: 14px;
                            color: #171717
                       }
                    }

                    #content-lng {
                        display:flex;
                        flex-direction: column;

                        ul{
                            display:flex;
                            flex-direction: column; 
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

    @media (max-width:1000px) {
        header {
            padding: 0 2rem 0 2rem;
        }

        #nav-desktop {
            display: none;
        }
    }

`
