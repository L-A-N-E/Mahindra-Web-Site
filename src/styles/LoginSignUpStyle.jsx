import styled from 'styled-components'; //Styled Components
import Colors from '../constant/Colors'; //Var Colors 
import Font from '../constant/Font';  //Var Fonts
import Background from '../assets/login_signup/background.png' //Background Section

export const LoginSignUpStyle = styled.section `

    section {
        height: 100vh;
        width: 100%;
        display: flex;

        /* Div Left */
        #left-login-sign-up {
            background-image: url(${Background});
            background-position: center;
            background-size: cover;
            height: 100%;
            width: 40%;
        }
        
        /* Div Right */
        #right-login-sign-up {
            background-color: ${Colors.black};
            height: 100%;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            /* Content */
            .container-acc {
                width: 80%;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                
                /* Content Top Login */
                .top-acc {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    width: 70%;
                    
                    img {
                        height: 30px;
                    }
                    
                    h2 {
                        color: ${Colors.white};
                        font-weight: 300;
                        font-size: ${Font.txt_20};
                    }
                }
                
                /* Content Mid Login */
                .mid-acc {
                    width: 70%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    
                    /* Forms Login */
                    form {
                        width: 85%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem;
                        
                        /* Username & Password */
                        input {
                            width: 100%;
                            background-color: transparent;
                            border:none;
                            border-bottom: 1px solid ${Colors.white};
                            color: ${Colors.white};
                            padding: 1rem 2rem;
                            outline:none;
                            letter-spacing:1.3px;
                        }
                        
                        /* Placeholder */
                        input::placeholder {
                            color: ${Colors.white}
                        }
                        
                        /* Forgot Password */
                        a {
                            text-decoration: none;
                            color: ${Colors.white};
                            transition: all 0.3s;
                            margin-top:1rem;
                        }
                        
                        a:hover {
                            color: ${Colors.white_hover}
                        }
                        
                        /* Button Login */
                        button {
                            font-weight: 700;
                            text-transform: uppercase;
                            background-color: ${Colors.red_1};
                            color: ${Colors.white};
                            border: none;
                            border-radius: 10px;
                            width: 100%;
                            padding: 1rem 3rem;
                            cursor: pointer;
                            background-image: linear-gradient(to left, ${Colors.red_1} 50%, ${Colors.red_hover} 50%);
                            background-size: 200% 100%;
                            background-position: right bottom;
                            transition: background-position 0.5s ease-in-out;
                            margin-top:1rem;
                        }
                        
                        button:hover {
                            background-position: left bottom;
                            }
                        }
                        
                        /* Dont Have Account */
                        p {
                            color: ${Colors.white};
                            
                            /* Link To Sign-Up */
                            button {
                                background-color: transparent;
                                border: none;
                                cursor: pointer;
                                
                                a {
                                    font-size: ${Font.txt_16};
                                    text-decoration: none;
                                    color: ${Colors.white};
                                    transition: all 0.3s;
                                }
                                
                                a:hover {
                                    color: ${Colors.white_hover}
                                }
                        }
                    }
                }
                
                /* Content End Login */
                .end-acc {
                    width: 50%;

                    /* Button Login with Google */
                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 500;
                        text-transform: uppercase;
                        background-color: ${Colors.white};
                        color: ${Colors.dark_gray};
                        font-size: ${Font.txt_12};
                        border: none;
                        border-radius: 10px;
                        width: 100%;
                        padding: 0.4rem 1rem;
                        cursor: pointer;
                        background-image: linear-gradient(to left, ${Colors.white} 50%, ${Colors.white_hover} 50%);
                        background-size: 200% 100%;
                        background-position: right bottom;
                        transition: background-position 0.5s ease-in-out;

                            /* Logo Google */
                            img {
                                height: 40px;
                            }
                        }

                            button:hover {
                                background-position: left bottom;
                            }
                        }
                    }
                }
            }

    @media (max-width: 1000px) {
        section {
            #left-login-sign-up {
                display: none;
            }

            #right-login-sign-up {
                width: 100%;

                .container-acc {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        section {
            #right-login-sign-up {

                .container-acc {
                    .mid-acc {
                        width: 100%;
                    }

                    .end-acc {
                        width: 65%;
                    }
                }
            }
        }
    }
`
