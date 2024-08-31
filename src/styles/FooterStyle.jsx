import styled from 'styled-components';

import bgFooter from '../assets/footer/bg.png'


export const FooterStyle = styled.footer `

    footer {
        height: 400px;
        width: 100%;
        color:#fff;
        font-size: 12px;
        text-transform: uppercase;
        display: flex;
        background-image:url(${bgFooter});
        background-position: center;
        background-size: cover;
        
        /* Div Left */
        #footer-left {
            display: flex;
            width: 50%;
            align-items: center;
            justify-content: space-around;

            .position-logo {
                .container-logo{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
            }

            .position-item {
                display: flex;
                align-items: start;
                height: 30%;
                
                .footer-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .item-footer {
                    display: flex;
                    gap: 0.3rem;
                    cursor:pointer;

                    h4 {
                        text-decoration: none;
                        list-style: none;
                        text-transform: uppercase;
                        font-size: 12px;
                        color: #EDEDED;
                        position: relative;
                        display: inline-block;
                        font-weight: 300;
                     }

                    /* Effect Hover Line */
                    h4::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -3px;
                        width: 0;
                        height: 1px;
                        background-color: #ff0000;
                        transition: width 0.3s ease-in-out;
                    }

                    h4:hover::after {
                        width: 100%;
                    }

                    /* Effect Rotation Arrow */
                    .arrow-rotation {
                        transition: transform 0.3s ease-in-out;
                    }

                    &:hover .arrow-rotation {
                        transform: rotate(90deg);
                    }
                }

            }
        }

    }
    

/* Responsive for Tablets */

@media (max-width:1000px) {
    footer {
        #footer-left {
            width: 100%;
        }
        #footer-right {
            display: none;
        }
    }
}

/* Responsive for Mobile */

@media (max-width: 500px) {
    footer {
        #footer-left {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto; 
            padding: 2rem 0;

           
            .position-logo {
                grid-column: 1 / -1; 
                grid-row: 1 / 2; 
                text-align: center;
                padding: 1rem;

                .container-logo {
                    align-items: center;
                    img {
                        width: 200px;
                    }
                }
            }

            .position-item {
                height: 100%;
                justify-content: space-around;
            }

            .position-item:nth-child(2) {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
            }

            .position-item:nth-child(1) {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
            }
        }
    }

}

`