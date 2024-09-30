import styled from 'styled-components';
import Colors from '../constant/Colors'


import Font from '../constant/Font'

export const BackgroundAppMobile = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(106,15,28,1) 100%);
`

export const TopAppMobile = styled.div`
    display: flex;
    height: 100dvh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .image-wrapper img {
        width: 100%; 
        height: auto;
        opacity:0;
    }

    .animate-img{
        animation: animate-image 1.5s ease-in-out forwards;
    }

    @keyframes animate-image {
    0% {
        transform: translateY(400px); /* Surge debaixo */
        opacity: 0; /* Invisível no início */
    }
    100% {
        transform: translateY(0); /* Volta à posição original */
        opacity: 1; /* Totalmente visível */
    }
}
@media(max-width:700px){
    .titulo{
        font-size: 50px;
    }
}
`

export const ContainerArrow = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
`

export const ArrowAnimated = styled.div`
    height:200px;
    border-left: 6px dashed ${Colors.off_white};
    position: relative;
    margin-top:80px;
    margin-bottom:80px;


.arrow{
    position:absolute;
    top:0;
    left:-6px;
    height:40px;
    width:6px;
    background: ${Colors.white};
    animation: animate 3.5s infinite;
}

.arrow:before{
    content: "";
    position: absolute;
    bottom:0;
    left:-10px;
    width:20px;
    height:20px;
    border-bottom:6px solid ${Colors.white};
    border-right:6px solid ${Colors.white};
    transform:rotate(45deg);
}

@keyframes animate {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(160px);
    }
}
`

export const MidAppMobile = styled.div`
    width:100%;
    .middle-section{
        height:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        position: relative;
    }

    .card {
        width: 50%;
        height: auto;
        background: black;
        border-radius: 35px;
        border: 2px solid rgb(40, 40, 40);
        padding: 7px;
        position: relative;
        box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
    }

    .card-int {
        background-color: ${Colors.white_hover};
        height: 100%;
        border-radius: 25px;
        transition: all 0.6s ease-out;
        overflow: hidden;
        cursor:pointer;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .card:hover .card-int {
        background-position: 100% 100%;
    }

    .top {
        position: absolute;
        top: 0px;
        right: 50%;
        transform: translate(50%, 0%);
        width: 35%;
        height: 18px;
        background-color: black;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .speaker {
        position: absolute;
        top: 2px;
        right: 50%;
        transform: translate(50%, 0%);
        width: 40%;
        height: 2px;
        border-radius: 2px;
        background-color: rgb(20, 20, 20);
    }

    .camera {
        position: absolute;
        top: 6px;
        right: 84%;
        transform: translate(50%, 0%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.048);
    }

    .int {
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        background-color: rgba(0, 0, 255, 0.212);
    }

    .btn1, .btn2, .btn3, .btn4 {
        position: absolute;
        width: 2px;
    }

    .btn1, .btn2, .btn3 {
        height: 45px;
        top: 30%;
        right: -4px;
        background-image: linear-gradient(to right, #111111, #222222, #333333, #464646, #595959);
    }

    .btn2, .btn3 {
        transform: scale(-1);
        left: -4px;
    }

    .btn2, .btn3 {
        transform: scale(-1);
        height: 30px;
    }

    .btn2 {
        top: 26%
    }

    .btn3 {
        top: 36%
    }

    .hello {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;
        color: ${Colors.red_1};
        font-size: ${Font.txt_2rem};
        font-weight: ${Font.txt_700w};
        text-align: center;
        text-transform: uppercase;
        line-height: 60px;
        height: 100%;
        transition: 0.5s ease-in-out;
        padding:2rem;
    }

    .hidden {
        display: block;
        line-height:32px;   
        transition: all 0.3s ease-in;
        font-weight: ${Font.txt_400w};
        text-transform: none;
        color: ${Colors.black};
        font-size: ${Font.txt_1rem};

        li {
            color: ${Colors.red_1};
        }
        
        .red {
            color: ${Colors.red_1};
            font-weight: ${Font.txt_500w};
        }

        .black {
            color: ${Colors.black};
            font-weight: ${Font.txt_400w};
        }
    }


    .card:hover .hidden {
        opacity: 1;
    }

    .card:hover .hello {
        transform: translateY(15px);
    }

    .text-animated-l{
        animation: animate-txt-l 2.5s ease-in-out;
    }
    
    .text-animated-r{
        animation: animate-txt-r 2.5s ease-in-out;
    }

    .padding-top {
        padding-top: 5rem;
    }

    @keyframes animate-txt-l {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes animate-txt-r {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @media(max-width:900px){
        .card{
            width: 80%;
        }
        .hello{
            font-size: 20px;
            line-height:2rem;
        }
        .hidden{
            font-size:15px;
        }
    }
`

export const BotAppMobile = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:5rem;
    gap:1.5rem; 

    h1 {
        color: #fff;
        text-transform: uppercase;
        font-size: ${Font.txt_2rem};
        font-weight: bold;
        letter-spacing:2px;
        text-align: center;
    }
    
    .final-section-buttons {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 450px) {
        
        h1 {
            font-size: ${Font.txt_1_5rem};
        }

        .final-section-buttons {
            flex-direction: column;
        }
    }
`
