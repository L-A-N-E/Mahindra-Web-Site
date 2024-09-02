import styled from 'styled-components';
import Background from '../assets/home/banners/banner-3.png'

export const LoginStyle = styled.section `

    section {
        height: 100vh;
        width: 100%;
        display: flex;

        #left-login {
            background-image: url(${Background});
            background-position: center;
            background-size: cover;
            height: 100%;
            width: 40%;
        }

        #right-login {
            background-color: #000000;
            height: 100%;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;

            .container-acc {
                width: 60%;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;

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
                        color: #fff;
                        font-weight: 300;
                        font-size: 20px;
                    }
                }

                .mid-acc {
                    width: 70%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;

                    form {
                        width: 85%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;

                        input {
                            width: 100%;
                            background-color: transparent;
                            border: 1px solid #fff;
                            border-radius: 40px;
                            padding: 1rem 2rem;
                        }

                        ::placeholder {
                            color: #ffffff
                        }

                        a {
                            text-decoration: none;
                            color: #ffffff;
                            transition: all 0.3s;
                        }

                        a:hover {
                            color: #c9c9c9
                        }

                        button {
                            font-weight: 700;
                            text-transform: uppercase;
                            background-color: #ff0000;
                            color: #fff;
                            border: none;
                            border-radius: 10px;
                            width: 100%;
                            padding: 1rem 3rem;
                            cursor: pointer;
                            background-image: linear-gradient(to left, #ff0000 50%, #880000 50%);
                            background-size: 200% 100%;
                            background-position: right bottom;
                            transition: background-position 0.5s ease-in-out;
                        }

                            button:hover {
                                background-position: left bottom;
                            }
                    }

                    p {
                        color: #ffffff;

                        button {
                            background-color: transparent;
                            color: #fff;
                            border: none;
                            cursor: pointer;
                            font-size: 16px;
                            transition: all 0.3s;
                        }

                        button:hover {
                            color: #c9c9c9
                        }
                    }
                }

                /* Div Bottom */
                .end-acc {
                    width: 50%;
                        button {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: 500;
                            text-transform: uppercase;
                            background-color: #ffffff;
                            color: #171717;
                            font-size: 12px;
                            border: none;
                            border-radius: 10px;
                            width: 100%;
                            padding: 0.4rem 1rem;
                            cursor: pointer;
                            background-image: linear-gradient(to left, #ffffff 50%, #ababab 50%);
                            background-size: 200% 100%;
                            background-position: right bottom;
                            transition: background-position 0.5s ease-in-out;

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
            #left-login {
                display: none;
            }

            #right-login {
                width: 100%;

                .container-acc {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        section {
            #right-login {

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
