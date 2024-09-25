import styled from 'styled-components';

export const BackgroundAppMobile = styled.div`
background-color:#fa0b21;

@media(max-width:1800px){
    background-image: linear-gradient(67.5deg, rgb(95, 27, 43) 0%, rgb(95, 27, 43) 21%,rgb(109, 47, 38) 21%, rgb(109, 47, 38) 28%,rgb(123, 66, 32) 28%, rgb(123, 66, 32) 32%,rgb(137, 86, 27) 32%, rgb(137, 86, 27) 41%,rgb(152, 105, 22) 41%, rgb(152, 105, 22) 48%,rgb(166, 125, 17) 48%, rgb(166, 125, 17) 69%,rgb(180, 144, 11) 69%, rgb(180, 144, 11) 93%,rgb(194, 164, 6) 93%, rgb(194, 164, 6) 100%),linear-gradient(45deg, rgb(95, 27, 43) 0%, rgb(95, 27, 43) 21%,rgb(109, 47, 38) 21%, rgb(109, 47, 38) 28%,rgb(123, 66, 32) 28%, rgb(123, 66, 32) 32%,rgb(137, 86, 27) 32%, rgb(137, 86, 27) 41%,rgb(152, 105, 22) 41%, rgb(152, 105, 22) 48%,rgb(166, 125, 17) 48%, rgb(166, 125, 17) 69%,rgb(180, 144, 11) 69%, rgb(180, 144, 11) 93%,rgb(194, 164, 6) 93%, rgb(194, 164, 6) 100%),linear-gradient(112.5deg, rgb(95, 27, 43) 0%, rgb(95, 27, 43) 21%,rgb(109, 47, 38) 21%, rgb(109, 47, 38) 28%,rgb(123, 66, 32) 28%, rgb(123, 66, 32) 32%,rgb(137, 86, 27) 32%, rgb(137, 86, 27) 41%,rgb(152, 105, 22) 41%, rgb(152, 105, 22) 48%,rgb(166, 125, 17) 48%, rgb(166, 125, 17) 69%,rgb(180, 144, 11) 69%, rgb(180, 144, 11) 93%,rgb(194, 164, 6) 93%, rgb(194, 164, 6) 100%),linear-gradient(90deg, rgb(173, 64, 191),rgb(42, 31, 17)); background-blend-mode:overlay,overlay,overlay,normal;
}
`

export const TopAppMobile = styled.div`
    .top-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding:3rem;
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
        height: 80%;
    }

    .image-wrapper img {
        width: 80%; 
        height: auto;
    }

    .animate-img{
        animation: animate-image 1.5s ease-in-out;
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

@media(max-width:1800px) {
    .image-wrapper {
        display: none;
    }
}

`

export const TopAppMobileMediaImg = styled.div`
.image-wrapper {
        display: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
    }

    .image-wrapper img {
        width: 60%; 
        height: auto;
    }

    .animate-img{
        animation: animate-image 1.5s ease-in-out;
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
@media(max-width:1800px) {
    .image-wrapper {
        display: flex;
        height:auto;
    }
}
`

export const ContainerArrow = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;

@media(max-width:1800px) {
    display:none;
}
`

export const ArrowAnimated = styled.div`
.center{ 
    height:160px;
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
        transform: translateY(120px);
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

.container-texts{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    gap:3rem;
    position:absolute;
}

.middle-section img{
    max-width:60%;
    min-width:50%;
    max-height:4250px;
    min-height:3500px;
    width: auto;
    height: auto;
    padding:2rem;
}

.textbox1{
    width: 35%;
    padding: 2rem;
    background-color: #000;
    color:#fff;
    margin-top:9vh;
    letter-spacing:2px;
    border-radius:10px;
    line-height: 2;
    transition: transform 0.5s ease-in-out;

}

.textbox1:hover{
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
    cursor:pointer;
}

.animate-txt-r {
    animation: animate-text-r 2s ease-in-out;
}

.animate-txt-l {
    animation: animate-text-l 2s ease-in-out;
}

@keyframes animate-text-r {
    0% {
        transform: translateX(20%); 
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes animate-text-l {
    0% {
        transform: translateX(-20%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@media (max-width: 1800px) {
    .container-texts{
    position:relative;
    width: auto;
    padding: 1rem;
    background-color: #000;
    color:#fff;
    border-radius: 0px;
    letter-spacing:2px;
    line-height: 2;
    }
    .middle-section img{
        display:none;
    }
    .textbox1{
        width:100%;
        border-top: 2px solid #fff;
        font-size:20px;
        line-height:2;
        border-radius: 0px;
    }
    .textbox1:hover{
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
    cursor:pointer;
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
}


.final-section h1{
    color: #fff;
    font-size: 70px;
    font-weight: bold;
    letter-spacing:2px;
}

.final-section p{
    line-height:1.5;
    font-size:20px;
    text-wrap:wrap;
}

.final-section h2{
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    letter-spacing:2px;
}

.final-section button{
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
    width:200px;
    color:#fff;
}

.final-section button:hover{
    cursor:pointer;
    transform: scale(1.1);
    outline: 2px solid #fff;
    box-shadow: 4px 5px 17px -4px #fff;
    color: #000;
}

.final-section button::before {
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

.final-section button:hover::before {
    width: 250%;  
}

.final-section-buttons{
    display:flex;
    flex-direction:row;
    gap:2rem;
    padding:25px;
}

`