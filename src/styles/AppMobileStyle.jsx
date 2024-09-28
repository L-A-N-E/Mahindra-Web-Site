import styled from 'styled-components';

export const BackgroundAppMobile = styled.div`
background-color:#fa0b21;
h1, h2{
    transition: all 0.5s ease-in-out;
    cursor:auto;
}
h1:hover, h2:hover{
    text-shadow: 1px 1px white, -3px -3px #444;
    transition: all 0.5s ease-in-out;
}
`

export const TopAppMobile = styled.div`
    .top-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

    }

    .titulo-wrapper {
        width: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
        padding:2rem;
    }

    .titulo {
        color: #fff;
        font-size: 90px;
        font-weight: bold;
        z-index:1;
    }

    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .image-wrapper img {
        width: 80%; 
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
.center{ 
    height:200px;
    border-left: 6px dashed #af0817;
    position: relative;
    margin-top:80px;
    margin-bottom:80px;
}

.arrow{
    position:absolute;
    top:0;
    left:-6px;
    height:40px;
    width:6px;
    background:#fff;
    animation: animate 3.5s infinite;
}

.arrow:before{
    content: "";
    position: absolute;
    bottom:0;
    left:-10px;
    width:20px;
    height:20px;
    border-bottom:6px solid #fff;
    border-right:6px solid #fff;
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
    background-image: linear-gradient(90deg, rgb(167, 167, 167),rgb(27, 27, 27)),linear-gradient(45deg, rgb(116, 19, 48) 0%, rgb(116, 19, 48) 69%,rgb(141, 30, 47) 69%, rgb(141, 30, 47) 75%,rgb(166, 41, 47) 75%, rgb(166, 41, 47) 81%,rgb(192, 52, 46) 81%, rgb(192, 52, 46) 85%,rgb(217, 63, 46) 85%, rgb(217, 63, 46) 91%,rgb(242, 74, 45) 91%, rgb(242, 74, 45) 100%),linear-gradient(135deg, rgb(116, 19, 48) 0%, rgb(116, 19, 48) 69%,rgb(141, 30, 47) 69%, rgb(141, 30, 47) 75%,rgb(166, 41, 47) 75%, rgb(166, 41, 47) 81%,rgb(192, 52, 46) 81%, rgb(192, 52, 46) 85%,rgb(217, 63, 46) 85%, rgb(217, 63, 46) 91%,rgb(242, 74, 45) 91%, rgb(242, 74, 45) 100%); background-blend-mode:overlay,overlay,normal;
    background-size: 200% 200%;
    background-position: 0% 0%;
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
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    height: 100%;
    transition: 0.5s ease-in-out;
    padding:2rem;
}

.hidden {
    display: block;
    opacity: 0.7;
    font-size:20px;
    line-height:32px;
    transition: all 0.3s ease-in;
    font-weight: normal;
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
.final-section{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    color: #fff;
    padding:5rem;
    gap:1.5rem; 
}

.final-section h1{
    color: #fff;
    font-size: 70px;
    font-weight: bold;
    letter-spacing:2px;
    text-wrap:nowrap;
}

.final-section h1 span{
    color:#fff;
    font-size: 70px;
    letter-spacing:5px;
    text-wrap:nowrap;
}


.final-section p{
    line-height:1.5;
    font-size:20px;
}

.final-section h2{
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    letter-spacing:2px;
    text-wrap:nowrap;
}

/* Efeito NOW */
.button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
}

.button {
    --animation-color: #000;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 2px #FFF;
}
.hover-text {
    position: absolute;
    box-sizing: border-box;
    color: #000;
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 4px #000;
}
.button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(10px 10px 35px cyan)
}

@media(max-width:900px){
    .final-section h1{
        font-size:20px;
    }
    .final-section h1 span{
        font-size:25px;
    }
    .final-section h2{
        font-size:15px;
    }

}
`

export const Buttons=styled.div`
button{
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 1000ms ease-in-out;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #000;
    background-color:#000;
    text-wrap:nowrap;
    width:auto;
    color:#fff;
}

button:hover{
    cursor:pointer;
    transform: scale(1.1);
    outline: 2px solid #fff;
    box-shadow: 4px 5px 17px -4px #fff;
    color: #000;
}

button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #fff;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms ease-in-out;
}

button:hover::before {
    width: 250%;  
}

.final-section-buttons{
    display:flex;
    flex-direction:row;
    gap:2rem;
}
@media(max-width:900px){
    button{
        font-size:10px;
    }
}
`